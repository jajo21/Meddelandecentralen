using ChatAPI.Models;
using ChatAPI.Repositories;
using MassTransit;
using Microsoft.AspNetCore.SignalR;

namespace ChatAPI.Hubs
{
    public class ChatHub : Hub
    {
        private IRoomRepository _roomRepository;
        private IPostRepository _postRepository;

        public ChatHub(IRoomRepository roomRepository, IPostRepository postRepository)
        {
            _roomRepository = roomRepository;
            _postRepository = postRepository;
        }

        public async Task SendPosts()
        {
            await Clients.Caller.SendAsync("SendPosts", _postRepository.AllPosts);
        }
        public async Task SendRooms()
        {
            await Clients.Caller.SendAsync("SendRooms", _roomRepository.AllRooms);
        }

        public async Task AddPost(Post post)
        {
            _postRepository.AddPost(post);
            await Clients.All.SendAsync("ReceivePosts", _postRepository.AllPosts);
        }

        public async Task DeletePost(string id) // Behöver den en egen model?
        {
            try
            {
                _postRepository.DeletePost(id);
                await Clients.All.SendAsync("RecieveNewPosts", _postRepository.AllPosts);
            }
            catch (Exception error)
            {
                await Clients.Caller.SendAsync("RecieveError", error.Message);
            }
        }

        public async Task AddRoom(Room room)
        {
            try
            {
                _roomRepository.AddRoom(room);
                await Clients.All.SendAsync("RecieveRooms", _roomRepository.AllRooms);
            }
            catch (Exception error)
            {
                await Clients.Caller.SendAsync("RecieveError", error.Message);
            }
        }
    }
}