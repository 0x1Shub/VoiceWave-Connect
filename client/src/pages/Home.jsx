import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icons8-waving-hand-light-skin-tone-96.png'

import '../styles/pages/Home.scss';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {

  const navigate = useNavigate();

  function usernameHandler(){
    navigate('/authenticate');
  }
  

  return (
    <div className="home">  

    <Card title={"Welcome to Voice-Wave!"} icon={logo}>

        <p className='text'>
          Voice-Wave revolutionizes communication with real-time voice chat. 
          It fosters seamless global collaboration. 
          Experience instant connection and collaboration like never before :)
        </p>

        <div>
          <Button onClick={usernameHandler} title={"Get Started"} />
        </div>

        <div className='signinWrapper'>
          <span>Have an invite text?</span>
        </div>

    </Card>

    </div>
  )
}

export default Home;