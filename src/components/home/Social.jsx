import React from "react";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";

const Social = () => {
  return (
    <div className="home-social">
      <a href="https://github.com/wabualela/" className="home-social-icon" target="_blank">
        <UilGithub />
      </a>
      <a href="https://www.linkedin.com/in/wabualela/" className="home-social-icon" target="_blank">
        <UilLinkedin />
      </a>
    </div>
  );
};

export default Social;
