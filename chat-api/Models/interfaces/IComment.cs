namespace ChatAPI.Models
{
    public interface IComment
    {
        public string? Id { get; set; }
        public string? User { get; set; }
        public string? Message { get; set; }
        public string? PostId { get; set; }
        public DateTime Date { get; set; }
    }
}