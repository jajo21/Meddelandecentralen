using ChatAPI.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatAPI.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendPost(Post post)
        {
            /* var date = DateTime.Now.ToString("yyyy'-'MM'-'dd' 'HH':'mm"); */
            post.Date = DateTime.Now;

            await Clients.All.SendAsync("ReceivePost", post);
        }
    }
}