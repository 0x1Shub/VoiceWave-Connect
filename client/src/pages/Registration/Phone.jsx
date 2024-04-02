import React from 'react'
import Card from '../../components/Card.jsx'
import Button from '../../components/Button.jsx'

import PhoneIcon from '../../assets/Phone.png'

function Phone() {
  return (
    <Card title={"Enter your phone number"} icon={PhoneIcon}>

        <div>
          <Button title={"Next"} />
        </div>
    </Card>
  )
}

export default Phone
