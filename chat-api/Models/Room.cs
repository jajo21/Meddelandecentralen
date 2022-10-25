namespace ChatAPI.Models
{
    public class Room : IRoom
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? User { get; set; }
    }
}