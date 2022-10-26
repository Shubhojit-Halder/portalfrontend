import React from "react";
import { LandingPageWrapper } from "../CSS/Landing.styled";
import bgImg from "../Static/landing1.jpg";
import backPNG from "../Static/back.png";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <LandingPageWrapper bgImg={bgImg} backPNG={backPNG}>
      <Nav first={"Events"} main={"Megatronix"} third={"Registration"}/>
      {/* <div className="club-name"> */}
      {/* <Typed strings={["Megatronix"]} typeSpeed={50} backSpeed={50} loop/> */}
      {/* Megatronix
      </div> */}
      <div className="portal_2k22">
        <h1>Portal 2K22</h1>
        {/* <p>Tech Xtraa</p> */}
      </div>
    </LandingPageWrapper>
  );
};

export default Landing;
