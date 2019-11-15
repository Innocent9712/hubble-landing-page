import React from "react";
import "../App.css";
import layout from "../images/illustration-mockups.svg";

const Body = () => {
  return (
    <div className="body">
      <img src={layout} />
      <div className="content">
        <p>Build The Community Your Fans Will Love</p>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a href="#">
          <p>Register</p>
        </a>
      </div>
    </div>
  );
};

export default Body;
