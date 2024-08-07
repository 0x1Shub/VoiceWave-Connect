import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Card from "../../components/Card";
import lockLogo from "../../assets/lock.png";
import { verifyOtp } from "../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";

import "../../styles/pages/Registration/OTPVerify.scss";

const OTPVerify = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);

  async function submit() {
    if (!otp || !phone || !hash) {
      return;
    }
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data));
      // onNext();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="cardWrapper">
        <Card title={"Enter the code we just texted you"} icon={lockLogo}>
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />

          <div className="actionButtonWrap">
            <Button onClick={submit} title="Next" />
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
