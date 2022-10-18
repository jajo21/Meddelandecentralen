using ChatAPI.Models;
using ChatAPI.Resources;
using MassTransit;

namespace ChatAPI.Repositories
{
    public class CommentRepository : ICommentRepository
    {
        private static List<Comment> _comments = new();
        public List<Comment> AllComments { get { return _comments; } }

        public void AddComment(Comment comment)
        {
            comment.Id = NewId.Next().ToString();
            comment.Date = DateTime.Now;
            _comments.Add(comment);
        }

        public void DeleteComment(DeleteRequest delete)
        {
            var comment = _comments.FirstOrDefault(c => c.Id == delete.Id);
            if (comment == null) throw new Exception("Hittar inte kommentar");
            _comments.Remove(comment);
        }
    }
}