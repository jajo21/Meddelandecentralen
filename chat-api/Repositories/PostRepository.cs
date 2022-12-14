using ChatAPI.Models;
using ChatAPI.Resources;
using MassTransit;

namespace ChatAPI.Repositories
{
    public class PostRepository : IPostRepository
    {
        private static List<Post> _posts = new();
        public List<Post> AllPosts { get { return _posts; } }

        public void AddPost(Post post)
        {
            post.Id = NewId.Next().ToString();
            post.Date = DateTime.Now;
            _posts.Add(post);
        }

        public void DeletePost(DeleteRequest delete)
        {
            var post = _posts.FirstOrDefault(p => p.Id == delete.Id);
            if (post == null) throw new Exception("Hittar inte inlägget");
            _posts.Remove(post);
        }
    }
}