import React, { useState } from "react";
import Phone from "./Phone";
import Email from "./Email";

import phoneWhite from "../../assets/mobile-white01.png";
import emailWhite from "../../assets/mail-white01.png";

import "../../styles/pages/Registration/PhoneEmailRegister.scss";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

function PhoneEmailRegister({ onNext }) {
  const [type, setType] = useState("phone");

  const Component = phoneEmailMap[type];

  // function registerhandler(){
  //     setType(type+1);
  // }

  return (
    <>
      <div className="cardWrapper">
        <div>
          <div className="btnWrap">
            <button
              className={` ${type === "phone" ? "active" : ""}`}
              onClick={() => setType("phone")}
            >
              <img src={phoneWhite} alt="Phone" />
            </button>
            <button
              className={` ${type === "email" ? "active" : ""}`}
              onClick={() => setType("email")}
            >
              <img src={emailWhite} alt="Email" />
            </button>
          </div>

          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
}

export default PhoneEmailRegister;
