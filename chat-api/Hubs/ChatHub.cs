using ChatAPI.Models;
using ChatAPI.Repositories;
using ChatAPI.Resources;
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

        public async Task AddPost(Post post)
        {
            try
            {
                _postRepository.AddPost(post);
                await Clients.All.SendAsync("ReceivePost", post);
            }
            catch (Exception error)
            {
                await Clients.All.SendAsync("RecieveError", error.Message);
            }
        }

        public async Task DeletePost(DeleteRequest delete)
        {
            try
            {
                _postRepository.DeletePost(delete);
                await Clients.All.SendAsync("RecievePostId", delete);
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

        public async Task DeleteComment(DeleteRequest delete) // Behöver den en egen model?
        {
            try
            {
                _commentRepository.DeleteComment(delete);
                await Clients.All.SendAsync("RecieveCommentId", delete);
            }
            catch (Exception error)
            {
                await Clients.Caller.SendAsync("RecieveError", error.Message);
            }
        }
    }
}