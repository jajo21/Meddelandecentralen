using ChatAPI.Models;
using MassTransit;
using Microsoft.AspNetCore.SignalR;

namespace ChatAPI.Hubs
{
    public class ChatHub : Hub
    {
        private static List<Room> _rooms = new()
        {
            /* new Room {Id= NewId.Next().ToString(), Name = "Inget rum"}, */
            new Room {Id= NewId.Next().ToString(), Name = "Allmänt utrymme"},
            new Room {Id= NewId.Next().ToString(), Name = "Poolen"},
            new Room {Id= NewId.Next().ToString(), Name = "Baksidan"},
            new Room {Id= NewId.Next().ToString(), Name = "Rum 1"},
        };

        public static List<Room> rooms
        {
            get { return _rooms; }
            set { _rooms = value; }
        }

        private static List<Post> _posts = new();
        public static List<Post> posts
        {
            get { return _posts; }
            set { _posts = value; }
        }

        /*         public ChatHub(List<Room> Rooms)
                {
                    _rooms = Rooms;
                } */
        /*         private IRoomRepository _roomRepository;

                public ChatHub(IRoomRepository roomRepository)
                {
                    _roomRepository = roomRepository;
                } */

        public async Task SendPosts()
        {
            await Clients.Caller.SendAsync("SendPosts", posts);
        }
        public async Task SendRooms()
        {
            await Clients.Caller.SendAsync("SendRooms", rooms);
        }

        public async Task SendPost(Post post)
        {
            /* var date = DateTime.Now.ToString("yyyy'-'MM'-'dd' 'HH':'mm"); */
            post.Id = NewId.Next().ToString();
            post.Date = DateTime.Now;
            posts.Add(post);
            await Clients.All.SendAsync("ReceivePosts", posts);
        }

        public async Task DeletePost(string id) // Behöver den en egen model?
        {
            var post = posts.FirstOrDefault(p => p.Id == id);
            if (post != null) posts.Remove(post);
            await Clients.All.SendAsync("RecieveNewPosts", posts);
        }

        public async Task AddRoom(Room room)
        {
            /* var nameTaken = rooms.FirstOrDefault(r => r.Name == room.Name);
            if (nameTaken != null) throw new Exception("Rummet finns redan"); */
            room.Id = NewId.Next().ToString();
            rooms.Add(room);
            await Clients.All.SendAsync("RecieveRooms", rooms);
        }
    }
}