import React, { useState } from 'react'
import Card from '../../components/Card.jsx'
import Button from '../../components/Button.jsx'

import '../../styles/pages/Registration/Phone.scss';

import PhoneIcon from '../../assets/Phone.png'
import TextInput from '../../components/TextInput.jsx'

function Phone({onNext}) {

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Card title={"Enter your phone number"} icon={PhoneIcon}>

        <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div>
          <Button title={"Next"} onClick={onNext} />

          <p className='text'>
            By entering your number, you're agreeing to our Terms of 
            Service and Privacy Policy. Thanks!
          </p>
        </div>

        
    </Card>
  )
}

export default Phone
