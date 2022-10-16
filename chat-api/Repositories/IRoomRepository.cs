using ChatAPI.Models;

namespace ChatAPI.Repositories
{
    public interface IRoomRepository
    {
        List<Room> AllRooms { get; }
        void AddRoom(Room room);
    }
}
