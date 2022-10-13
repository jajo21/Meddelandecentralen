namespace ChatAPI.Models
{
    public class Room : IRoom
    {
        public int Id { get; set; }
        public string? Name { get; set; }
    }
}