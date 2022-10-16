using ChatAPI.Models;
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

        public void DeleteComment(string id)
        {
            var comment = _comments.FirstOrDefault(c => c.Id == id);
            if (comment == null) throw new Exception("Hittar inte kommentar");
            _comments.Remove(comment);
        }
    }
}