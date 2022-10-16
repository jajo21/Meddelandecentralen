using ChatAPI.Models;

namespace ChatAPI.Repositories
{
    public interface IPostRepository
    {
        List<Post> AllPosts { get; }
        void AddPost(Post post);
        void DeletePost(string id);
    }
}
