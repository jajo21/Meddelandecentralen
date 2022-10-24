using ChatAPI.Models;
using MassTransit;

namespace ChatAPI.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        private static List<Room> _rooms = new()
        {
            new Room {Id= NewId.Next().ToString(), Name = "Hela hotellet"},
            new Room {Id= NewId.Next().ToString(), Name = "Reception"},
            new Room {Id= NewId.Next().ToString(), Name = "Köket"},
            new Room {Id= NewId.Next().ToString(), Name = "Poolen"},
            new Room {Id= NewId.Next().ToString(), Name = "Gymmet"},
            new Room {Id= NewId.Next().ToString(), Name = "Rum 1"},
        };

        public List<Room> AllRooms { get { return _rooms; } }

        public void AddRoom(Room room)
        {
            var nameTaken = _rooms.FirstOrDefault(r => r.Name == room.Name);
            if (nameTaken != null) throw new Exception("Rummet finns redan");
            room.Id = NewId.Next().ToString();
            _rooms.Add(room);
        }
    }
}