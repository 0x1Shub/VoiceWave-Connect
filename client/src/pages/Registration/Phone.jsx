import React, { useState } from "react";
import Card from "../../components/Card.jsx";
import Button from "../../components/Button.jsx";
import TextInput from "../../components/TextInput.jsx";
import PhoneIcon from "../../assets/Phone.png";
import { sendOtp } from "../../http/index.js";

import "../../styles/pages/Registration/Phone.scss";

function Phone({ onNext }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  async function submit() {
    if (!phoneNumber) {
      console.error("Phone number is required");
      return;
    }

    try {
      const res = await sendOtp({ phone: phoneNumber });
      console.log("Response:", res);
      // onNext(); // Uncomment this if you want to proceed to the next step after successful OTP send
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Error: Bad Request", error.response.data);
      } else {
        console.error("Error sending OTP:", error.message);
      }
    }
  }

  return (
    <Card title={"Enter your phone number"} icon={PhoneIcon}>
      <TextInput
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <div>
        <Button title={"Next"} onClick={submit} />

        <p className="text">
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
}

export default Phone;
