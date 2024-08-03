import React from "react";
import "../styles/components/RoomCard.scss";
import chatIcon from "../assets/chat1.png";
import userIcon from "../assets/user-icon.png";

const RoomCard = ({ room }) => {
  return (
    <div className="roomCard">
      <h3 className="topic">{room.topic}</h3>
      <div className="speakers">
        <div className="profiles">
          {room.speakers.map((speaker) => (
            <img key={speaker.id} src={speaker.profile} alt="speaker-profile" />
          ))}
        </div>
        <div className="names">
          {room.speakers.map((speaker) => (
            <div key={speaker.id} className="nameWrapper">
              <span>{speaker.name}</span>
              <img src={chatIcon} alt="chatIcon" />
            </div>
          ))}
        </div>
      </div>
      <div className="peopleCount">
        <span>{room.totalPeople}</span>
        <img src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};

export default RoomCard;
