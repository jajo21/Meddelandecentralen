namespace ChatAPI.Models
{
    public interface IComment
    {
        public int Id { get; set; }
        public string? User { get; set; }
        public string? Message { get; set; }
        public int PostId { get; set; }
        public DateTime Date { get; set; }
    }
}