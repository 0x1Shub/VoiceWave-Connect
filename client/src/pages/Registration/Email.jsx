import React, { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

import EmailIcon from "../../assets/Mail.png";
import TextInput from "../../components/TextInput.jsx";

function Email({ onNext }) {
  const [email, setEmail] = useState("");

  return (
    <Card title={"Enter your email id"} icon={EmailIcon}>
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />

      <div>
        <Button title={"Next"} onClick={onNext} />

        <p className="text">
          By entering your email, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
}

export default Email;
