import React, { useState } from 'react'
import Phone from './Phone';
import Email from './Email';

import phoneWhite from '../../assets/mobile-white01.png';
import emailWhite from '../../assets/mail-white01.png';

import '../../styles/pages/Registration/PhoneEmailRegister.scss'

const phoneEmailMap = {
  phone: Phone,
  email: Email,
}

function PhoneEmailRegister({onClick}) {
  const [type, setType] = useState('phone');

  const Component = phoneEmailMap[type]

  function registerhandler(){
      setType(type+1);
  }

  return (
      <>

        <div className="cardWrapper">
          <div> 
            <div className="btnWrap">
              <button className={` ${type === 'phone' ? 'active' : 'phone-white'}`} onClick={() => setType('phone')}>
                <img src={phoneWhite} alt="Phone" />
              </button>
              <button className={` ${type === 'email' ? 'active' : 'phone-white'}`} onClick={() => setType('email')}>
                <img src={emailWhite} alt="Email" />
              </button>
            </div>

            <Component onClick={registerhandler} />
          </div>
        </div>

        
       
      </>
  )
}

export default PhoneEmailRegister
