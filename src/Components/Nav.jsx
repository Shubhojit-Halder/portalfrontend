import React from "react";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";
import { NavWrapper } from "../CSS/Navwrapper.styled";
import backPNG from "../Static/back.png";
const Nav = (props) => {
  const navigate = useNavigate();
  return (
    <NavWrapper backPNG={backPNG}>
      <ul className="navlist">
        <li
          className="box_nav"
          onClick={() => {
            navigate(`/${props.first}`);
          }}
        >
          {props.first}
        </li>
        <li className="club-name">
          {" "}
          <Typed
            strings={[`${props.main}`]}
            typeSpeed={100}
            showCursor={false}
          />{" "}
        </li>
        <li
          className="box_nav"
          onClick={() => {
            navigate(`/${props.third}`);
          }}
        >
          {props.third}
        </li>
        {/* <li>Events</li> */}
      </ul>
    </NavWrapper>
  );
};

export default Nav;
