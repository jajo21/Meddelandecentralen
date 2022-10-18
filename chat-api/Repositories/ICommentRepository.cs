using ChatAPI.Models;
using ChatAPI.Resources;

namespace ChatAPI.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> AllComments { get; }
        void AddComment(Comment comment);
        void DeleteComment(DeleteRequest delete);
    }
}
