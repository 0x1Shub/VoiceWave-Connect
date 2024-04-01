import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

import Authentication from './pages/Authentication.jsx';
import './styles/app.scss';

const  isAuthenticated  = false;


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<GuestRoute element={<Home />} />} />
        <Route path="/authenticate" element={<GuestRoute element={<Authentication />}></GuestRoute>} />
      </Routes>
    </BrowserRouter>
  )
}


const GuestRoute = ({element}) => {
  return (
      isAuthenticated ? (
              <Navigate
                  to="/rooms"
                  replace
              />
          ) : (
              element
          )
  );
}

export default App
