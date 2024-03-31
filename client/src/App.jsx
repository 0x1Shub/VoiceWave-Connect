import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

import './styles/app.scss';
import Signup from './pages/Signup.jsx';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
