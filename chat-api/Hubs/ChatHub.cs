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
        private ICommentRepository _commentRepository;

        public ChatHub(
            IRoomRepository roomRepository,
            IPostRepository postRepository,
            ICommentRepository commentRepository)
        {
            _roomRepository = roomRepository;
            _postRepository = postRepository;
            _commentRepository = commentRepository;
        }

        public async Task SendPosts()
        {
            await Clients.Caller.SendAsync("SendPosts", _postRepository.AllPosts);
        }
        public async Task SendRooms()
        {
            await Clients.Caller.SendAsync("SendRooms", _roomRepository.AllRooms);
        }

        public async Task SendComments()
        {
            await Clients.Caller.SendAsync("SendComments", _commentRepository.AllComments);
        }

        public async Task AddPost(Post post)
        {
            _postRepository.AddPost(post);
            await Clients.All.SendAsync("ReceivePost", post);
        }

        public async Task DeletePost(string id) // Behöver den en egen model?
        {
            try
            {
                _postRepository.DeletePost(id);
                await Clients.All.SendAsync("RecievePostId", id);
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
                await Clients.All.SendAsync("RecieveRoom", room);
            }
            catch (Exception error)
            {
                await Clients.Caller.SendAsync("RecieveError", error.Message);
            }
        }

        public async Task AddComment(Comment comment)
        {
            try
            {
                _commentRepository.AddComment(comment);
                await Clients.All.SendAsync("RecieveComment", comment);
            }
            catch (Exception error)
            {
                await Clients.Caller.SendAsync("RecieveError", error.Message);
            }
        }

        public async Task DeleteComment(string id) // Behöver den en egen model?
        {
            try
            {
                _commentRepository.DeleteComment(id);
                await Clients.All.SendAsync("RecieveCommentId", id);
            }
            catch (Exception error)
            {
                await Clients.Caller.SendAsync("RecieveError", error.Message);
            }
        }
    }
}