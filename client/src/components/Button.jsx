import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/components/Button.scss";

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      <span>{title}</span>
      <FaArrowRight />
    </button>
  );
};

export default Button;
