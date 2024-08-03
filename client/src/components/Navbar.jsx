import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Voice_Wave_Logo2.png";
import { logout } from "../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice";
import logoutImg from "../assets/logout.png";
import defaultProfileImageUrl from "../assets/monkey-emoji.png";

import "../styles/components/Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log("User State: ", user);

  async function logoutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
        {/* <span className='title'>Voice-Wave</span> */}
      </Link>
      <div className="navRight">
        {/* {user.name ? <h3>{user.name}</h3> : <h3>{"user"}</h3>}
        <Link to={"/"}>
          <img
            className="profile"
            src={user.profile || defaultProfileImageUrl}
            width={"40"}
            height={"40"}
            alt="profile"
          />
        </Link>
        <button className="logoutBtn" onClick={logoutUser}>
          <img src={logoutImg} alt="logout" />
        </button> */}

        {user ? (
          <>
            {user.name ? <h3>{user.name}</h3> : <h3>{user.phone}</h3>}
            <Link to={"/"}>
              <img
                className="profile"
                src={user.profile || defaultProfileImageUrl}
                width={"40"}
                height={"40"}
                alt="profile"
              />
            </Link>
            <button className="logoutBtn" onClick={logoutUser}>
              <img src={logoutImg} alt="logout" />
            </button>
          </>
        ) : (
          <h3>Loading...</h3> // You can replace this with a better placeholder
        )}
      </div>
      {/* {isAuthenticated && <button onClick={logoutUser}>Logout</button>} */}
    </div>
  );
}

export default Navbar;
