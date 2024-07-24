import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import profileIcon from "../../assets/monkey-emoji.png";
import profileImg from "../../assets/monkey-avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../store/activateSlice";
import { activate } from "../../http";
import { setAuth } from "../../store/authSlice";
import Loader from "../../components/Loader";

import "../../styles/pages/Registration/ProfileRegister.scss";

function ProfileRegister({ onNext }) {
  const dispatch = useDispatch();
  const { name, profile } = useSelector((state) => state.activate);
  const [image, setImage] = useState(profileImg);
  const [loading, setLoading] = useState(false);
  const [unMounted, setUnMounted] = useState(false);

  function captureImg(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setProfile(reader.result));
    };
  }

  async function submit() {
    if (!name || !profile) {
      return;
    }
    setLoading(true);
    try {
      const { data } = await activate({ name, profile });
      if (data.auth) {
        // dispatch(setAuth(data));
        if (!unMounted) {
          dispatch(setAuth(data));
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Always executed
    }
  }

  useEffect(() => {
    return () => {
      setUnMounted(true);
    };
  }, []);

  if (loading) {
    return <Loader message={"Activation in progress..."} />;
  }

  return (
    <>
      <Card title={`Okay, ${name}`} icon={profileIcon}>
        <p className="subHeading">How's this photo?</p>

        <div className="profileWrapper">
          <img src={image} alt="Avatar" />
        </div>

        <div>
          <input
            id="profileInput"
            type="file"
            className="profileInput"
            onChange={captureImg}
          />
          <label className="label" htmlFor="profileInput">
            Choose a different photo
          </label>
        </div>

        <div className="actionButtonWrap">
          <Button onClick={submit} title="Next" />
        </div>
      </Card>
    </>
  );
}

export default ProfileRegister;
