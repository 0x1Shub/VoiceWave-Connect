import React, { useState } from 'react'
import Card from '../../components/Card.jsx'
import Button from '../../components/Button.jsx'

import '../../styles/pages/Registration/Phone.scss';

import PhoneIcon from '../../assets/Phone.png'
import TextInput from '../../components/TextInput.jsx'

import { sendOtp } from '../../http/index.js';

function Phone({onNext}) {

  const [phoneNumber, setPhoneNumber] = useState('');

  // async function submit(){

  //   // server request
  //   const res = await sendOtp({phone: phoneNumber});
  //   console.log(res);
  // }

  const submit = async () => {
    try{
      const response = await sendOtp({phone: phoneNumber});
      console.log(response.data);
    }catch(err){
      console.error('Error sending OTP: ', err);
    }
  }

  return (
    <Card title={"Enter your phone number"} icon={PhoneIcon}>

        <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div>
          <Button title={"Next"} onClick={submit} />

          <p className='text'>
            By entering your number, you're agreeing to our Terms of 
            Service and Privacy Policy. Thanks!
          </p>
        </div>

        
    </Card>
  )
}

export default Phone
