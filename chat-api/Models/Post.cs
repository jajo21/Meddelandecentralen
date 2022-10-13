namespace ChatAPI.Models
{
    public class Post : IPost
    {
        public int Id { get; set; }
        public string? User { get; set; }
        public string? Message { get; set; }
        public int RoomId { get; set; }
        public DateTime? Date { get; set; }
    }
}