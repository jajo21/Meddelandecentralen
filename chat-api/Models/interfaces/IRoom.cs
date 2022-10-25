namespace ChatAPI.Models
{
    public interface IRoom
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? User { get; set; }
    }
}