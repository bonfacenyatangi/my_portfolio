import React from "react";
import BgImage from "../assets/images/a.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src={BgImage}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div>
          <h1> I'm Bonface Nyatangi </h1>
          <h2>
            I'm a
            <br />
            <span></span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiast",
                2000,
                "Coder",
                2000,
                "Peasant Farmer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
