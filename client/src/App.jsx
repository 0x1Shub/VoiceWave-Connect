import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Navigation from './components/shared/navigation/Navigation.jsx';

function App() {

  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
