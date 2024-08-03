import React from "react";
import TextInput from "./TextInput";
import globe from "../assets/globe.png";
import social from "../assets/social.png";
import privateImg from "../assets/lock1.png";
import celebration from "../assets/celebration.png";
import close from "../assets/close.png";

import "../styles/components/AddRoomModal.scss";

const AddRoomModal = ({ onClose }) => {
  return (
    <div className="modalMask">
      <div className="modalBody">
        <button className="closeBtn" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <div className="modalHeader">
          <h3 className="modalHeading">Enter the topic to be disscussed</h3>
          <TextInput fullWidth="true" />
          <h2>Room types</h2>
          <div className="roomTypes">
            <div className="typeBox">
              <img src={globe} alt="globe" />
              <span>Open</span>
            </div>
            <div className="typeBox">
              <img src={social} alt="social" />
              <span>Socials</span>
            </div>
            <div className="typeBox">
              <img src={privateImg} alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className="modalFooter">
          <h2>Start a room, open to everyone</h2>
          <button className="footerBtn">
            <img src={celebration} alt="celebration" />
            <span>Let's Go</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
