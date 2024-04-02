import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

import EmailIcon from '../../assets/Mail.png'
import TextInput from '../../components/TextInput.jsx'

function Email() {

  const [email, setEmail] = useState('');

  return (
    <Card title={"Enter your email id"} icon={EmailIcon}>

        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />

        <div>
          <Button title={"Next"} />

          <p className='text'>
            By entering your number, you're agreeing to our Terms of 
            Service and Privacy Policy. Thanks!
        </p>
        </div>
    </Card>
  )
}

export default Email
