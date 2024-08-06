import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search-icon.png";
import addRoom from "../assets/add-room-icon.png";
import RoomCard from "../components/RoomCard";
import AddRoomModal from "../components/AddRoomModal";
import { getAllRooms } from "../http";
import profileIcon from "../assets/monkey-avatar.png";

import "../styles/pages/Rooms.scss";

// const rooms = [
//   {
//     id: 1,
//     topic: "Which framework best for frontend ?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         profile: profileIcon,
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         profile: profileIcon,
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 3,
//     topic: "Whats new in machine learning?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         profile: profileIcon,
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         profile: profileIcon,
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 4,
//     topic: "Why people use stack overflow?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         profile: profileIcon,
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         profile: profileIcon,
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 5,
//     topic: "Artificial inteligence is the future?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         profile: profileIcon,
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         profile: profileIcon,
//       },
//     ],
//     totalPeople: 40,
//   },
// ];

function Rooms() {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      <div className="roomContainer">
        <div className="roomsHeader">
          <div className="left">
            <span className="heading">All voice rooms</span>
            <div className="searchBox">
              <img src={searchIcon} alt="search" />
              <input type="text" className="searchInput" />
            </div>
          </div>

          <div className="right">
            <button onClick={openModal} className="startBtn">
              <img src={addRoom} alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <div className="roomList">
          {rooms.map((room) => (
            <>
              <RoomCard key={room.id} room={room} />
            </>
          ))}
        </div>
      </div>

      {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Rooms;
