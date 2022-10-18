using ChatAPI.Models;
using ChatAPI.Resources;

namespace ChatAPI.Repositories
{
    public interface IPostRepository
    {
        List<Post> AllPosts { get; }
        void AddPost(Post post);
        void DeletePost(DeleteRequest delete);
    }
}
