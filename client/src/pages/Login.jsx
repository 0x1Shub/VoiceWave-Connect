import React, { useState } from 'react'
import PhoneEmailRegister from './Registration/PhoneEmailRegister.jsx';
import OTPVerify from './Registration/OTPVerify.jsx';

import '../styles/pages/Login.scss';


const process = {
    1: PhoneEmailRegister,
    2: OTPVerify,
}
  

function Login() {
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

export default Login
