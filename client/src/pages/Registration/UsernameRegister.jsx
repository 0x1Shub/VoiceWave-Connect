import React, { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import userIcon from "../../assets/goggle-emoji.png";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/activateSlice";

import "../../styles/pages/Registration/UsernameRegister.scss";

function UsernameRegister({ onNext }) {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(name);

  function nextStep() {
    if (!fullName) {
      return;
    }
    dispatch(setName(fullName));
    onNext();
  }

  return (
    <>
      <Card title={"What's your full name?"} icon={userIcon}>
        <TextInput
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <p className="text">People use real names at voice-wave :) !</p>

        <div className="actionButtonWrap">
          <Button onClick={nextStep} title="Next" />
        </div>
      </Card>
    </>
  );
}

export default UsernameRegister;
