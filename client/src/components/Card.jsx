import React from 'react'
import "../styles/components/Card.scss";


const Card = ({title, icon, children}) => {
  return (
    <div className='card'>
        <div className="wrapper">
          <img src={icon} alt="Image" />
          <h1>{title}</h1>
        </div>

        {children}
      </div>

  )
}

export default Card