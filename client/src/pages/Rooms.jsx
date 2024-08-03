import React from "react";
import searchIcon from "../assets/search-icon.png";
import addRoom from "../assets/add-room-icon.png";
import RoomCard from "../components/RoomCard";

import profileIcon from "../assets/monkey-avatar.png";

import "../styles/pages/Rooms.scss";

const rooms = [
  {
    id: 1,
    topic: "Which framework best for frontend ?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        profile: profileIcon,
      },
      {
        id: 2,
        name: "Jane Doe",
        profile: profileIcon,
      },
    ],
    totalPeople: 40,
  },
  {
    id: 3,
    topic: "Whats new in machine learning?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        profile: profileIcon,
      },
      {
        id: 2,
        name: "Jane Doe",
        profile: profileIcon,
      },
    ],
    totalPeople: 40,
  },
  {
    id: 4,
    topic: "Why people use stack overflow?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        profile: profileIcon,
      },
      {
        id: 2,
        name: "Jane Doe",
        profile: profileIcon,
      },
    ],
    totalPeople: 40,
  },
  {
    id: 5,
    topic: "Artificial inteligence is the future?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        profile: profileIcon,
      },
      {
        id: 2,
        name: "Jane Doe",
        profile: profileIcon,
      },
    ],
    totalPeople: 40,
  },
];

function Rooms() {
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
            <button className="startBtn">
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
    </>
  );
}

export default Rooms;
