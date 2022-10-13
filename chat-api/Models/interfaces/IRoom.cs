namespace ChatAPI.Models
{
    public interface IRoom
    {
        public int Id { get; set; }
        public string? Name { get; set; }
    }
}