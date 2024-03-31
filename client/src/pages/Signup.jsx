import React, { useState } from 'react'
import '../styles/pages/Signup.scss'
import NameRegister from './Registration/NameRegister.jsx';
import OTPVerify from './Registration/OTPVerify.jsx';
import ProfileRegister from './Registration/ProfileRegister.jsx';
import PhoneEmailRegister from './Registration/PhoneEmailRegister.jsx';
import UsernameRegister from './Registration/UsernameRegister.jsx';


const process = {
  1: PhoneEmailRegister,
  2: OTPVerify,
  3: NameRegister,
  4: ProfileRegister,
  5: UsernameRegister,
}


function Signup() {
    const [step, setStep] = useState(1);

    const Step = process[step]
  
    function registerhandler(){
      setStep(step+1);
    }
  
    return (
      <div>
        <Step onClick={registerhandler} />
      </div>
    )
}

export default Signup
