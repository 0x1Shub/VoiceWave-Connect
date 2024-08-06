import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import globe from "../assets/globe.png";
import social from "../assets/social.png";
import privateImg from "../assets/lock1.png";
import celebration from "../assets/celebration.png";
import close from "../assets/close.png";
import { createRoom as create } from "../http/index.js";

import "../styles/components/AddRoomModal.scss";

const AddRoomModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      navigate(`/room/${data.id}`);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="modalMask">
      <div className="modalBody">
        <button className="closeBtn" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <div className="modalHeader">
          <h3 className="modalHeading">Enter the topic to be disscussed</h3>
          <TextInput
            fullWidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2>Room types</h2>
          <div className="roomTypes">
            <div
              className={`typeBox ${roomType === "open" ? "active" : ""}`}
              onClick={() => setRoomType("open")}
            >
              <img src={globe} alt="globe" />
              <span>Open</span>
            </div>
            <div
              className={`typeBox ${roomType === "social" ? "active" : ""}`}
              onClick={() => setRoomType("social")}
            >
              <img src={social} alt="social" />
              <span>Socials</span>
            </div>
            <div
              className={`typeBox ${roomType === "private" ? "active" : ""}`}
              onClick={() => setRoomType("private")}
            >
              <img src={privateImg} alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className="modalFooter">
          <h2>Start a room, open to everyone</h2>
          <button onClick={createRoom} className="footerBtn">
            <img src={celebration} alt="celebration" />
            <span>Let's Go</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
