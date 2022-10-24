using ChatAPI.Models;
using ChatAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ChatAPI.Controllers
{
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;

        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [Route("api/comments")]
        [HttpGet]
        public ActionResult<List<Comment>> GetComments()
        {
            return Ok(_commentRepository.AllComments);
        }
    }
}