namespace ChatAPI.Models
{
    public interface IPost
    {
        public string? Id { get; set; }
        public string? User { get; set; }
        public string? Message { get; set; }
        public string? RoomId { get; set; }
        public DateTime? Date { get; set; }
    }
}