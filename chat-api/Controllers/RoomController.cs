using ChatAPI.Models;
using ChatAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ChatAPI.Controllers
{
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomRepository _roomRepository;

        public RoomController(IRoomRepository roomRepository)
        {
            _roomRepository = roomRepository;
        }

        [Route("api/rooms")]
        [HttpGet]
        public ActionResult<List<Room>> GetRooms()
        {
            return Ok(_roomRepository.AllRooms);
        }
    }
}