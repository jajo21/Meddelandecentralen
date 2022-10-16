using ChatAPI.Models;

namespace ChatAPI.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> AllComments { get; }
        void AddComment(Comment comment);
        void DeleteComment(string id);
    }
}
