import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Authentication from "./pages/Authentication.jsx";
import Activate from "./pages/Activate.jsx";
import Rooms from "./pages/Rooms.jsx";
import { useSelector } from "react-redux";
import Loader from "./components/Loader.jsx";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh.js";

import "./styles/app.scss";

function App() {
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <Loader message={"Loading, Please wait"} />
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<GuestRoute element={<Home />} />} />
        <Route
          path="/authenticate"
          element={<GuestRoute element={<Authentication />}></GuestRoute>}
        />
        <Route
          path="/activate"
          element={<SemiProtectedRoute element={<Activate />} />}
        />
        <Route path="/rooms" element={<ProtectedRoute element={<Rooms />} />} />
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ element }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? <Navigate to="/rooms" replace /> : element;
};

const SemiProtectedRoute = ({ element }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? (
    <Navigate to="/" replace />
  ) : isAuthenticated && !user.activated ? (
    element
  ) : (
    <Navigate to="/rooms" replace />
  );
};

const ProtectedRoute = ({ element }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? (
    <Navigate to={"/"} replace />
  ) : isAuthenticated && !user.activated ? (
    <Navigate to={"/activate"} replace />
  ) : (
    element
  );
};

export default App;
