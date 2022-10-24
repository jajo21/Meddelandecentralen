using ChatAPI.Models;
using ChatAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ChatAPI.Controllers
{
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [Route("api/posts")]
        [HttpGet]
        public ActionResult<List<Post>> GetPosts()
        {
            return Ok(_postRepository.AllPosts);
        }
    }
}