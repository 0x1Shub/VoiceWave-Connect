import React, { useState } from "react";
import UsernameRegister from "./Registration/UsernameRegister";
import ProfileRegister from "./Registration/ProfileRegister";

import "../styles/pages/Activate.scss";

const steps = {
  1: UsernameRegister,
  2: ProfileRegister,
};

function Activate() {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div className="cardWrapper">
      <Step onNext={onNext}></Step>
    </div>
  );
}

export default Activate;
