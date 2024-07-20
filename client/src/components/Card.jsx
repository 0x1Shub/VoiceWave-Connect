import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Card.scss";

const Card = ({ title, icon, children, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="wrapper">
        {icon && <img src={icon} alt="Image" />}
        {title && <h1>{title}</h1>}
      </div>

      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;
