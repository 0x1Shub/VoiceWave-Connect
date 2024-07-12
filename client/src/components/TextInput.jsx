import React from "react";
import "../styles/components/TextInput.scss";

function TextInput({ value, onChange }) {
  return (
    <div>
      <input className="input" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default TextInput;
