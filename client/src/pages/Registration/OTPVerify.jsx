import React, { useState } from "react";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Card from "../../components/Card";

import lockLogo from "../../assets/lock.png";

import "../../styles/pages/Registration/OTPVerify.scss";

const OTPVerify = ({ onClick }) => {
  const [otp, setOtp] = useState("");

  function next() {
    console.log("Hii shubham");
  }

  return (
    <>
      <div className="cardWrapper">
        <Card title={"Enter the code we just texted you"} icon={lockLogo}>
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />

          <div className="actionButtonWrap">
            <Button onClick={next} title="Next" />
          </div>

          <p className="text">
            By entering your number, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};

export default OTPVerify;
