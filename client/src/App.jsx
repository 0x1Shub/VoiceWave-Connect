import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

import Authentication from './pages/Authentication.jsx';
import Activate from './pages/Activate.jsx';
import Rooms from './pages/Rooms.jsx';

import './styles/app.scss';

const  isAuthenticated  = true;
const user = {
  activated: true,
}


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<GuestRoute element={<Home />} />} />
        <Route path="/authenticate" element={<GuestRoute element={<Authentication />}></GuestRoute>} />
        <Route path='/activate' element={<SemiProtectedRoute element={<Activate />} />} />
        <Route path='/rooms' element={<ProtectedRoute element={<Rooms />} />} />
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


const SemiProtectedRoute = ({ element }) => {
  return !isAuthenticated ? (
      <Navigate to="/" replace />
  ) : isAuthenticated && !user.activated ? (
      element
  ) : (
      <Navigate to="/rooms" replace />
  );
};

const ProtectedRoute = ({element}) => {
  return !isAuthenticated ? (
    <Navigate to={'/'} replace />
  ) : isAuthenticated && !user.activated ? (
    <Navigate to={'/activate'} replace />
  ) : (
    element
  )
}

export default App
