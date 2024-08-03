import React from "react";
import "../styles/components/TextInput.scss";

function TextInput({ value, onChange, fullWidth }) {
  return (
    <div>
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChange}
        style={{ width: fullWidth === "true" ? "100%" : "inherit" }}
      />
    </div>
  );
}

export default TextInput;
