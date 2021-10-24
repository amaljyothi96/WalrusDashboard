import React from "react";
import "./style.css";

function Intro(props) {
  const { user } = props;
  return (
    <div style={{ width: "50%", height: "40%" }}>
      <p className="addressing"> Hi {user.name},</p>
      <p className="message1">Complete your KYC</p>
      <p className="message2">
        and experience the world class bitcoin app defi
      </p>
      <p className="startText">
        START KYC<p></p>
      </p>
    </div>
  );
}

export default Intro;
