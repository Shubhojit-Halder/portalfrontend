import React from "react";
import { EventPageWrapper } from "../CSS/EventPage.styled";
import backPNG from "../Static/back.png";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import Button from "@mui/material/Button";
import { CardData } from "../Static/cardData";
import bg from "../Static/landing1.jpg";
import Background from "./Background";
import Nav from "./Nav";

const Events = () => {
  return (
    <EventPageWrapper backImg={bg} back={backPNG}>
      <Background />
      <Nav first={"Home"} main={"Events"} third={"Registration"}/>
      <div className="content">
        {/* <div className="events">
          <p>TechXtraa</p>
        </div> */}
        <div className="allcards">
          {CardData.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="background"></div>
                <div className="img">
                  {" "}
                  <img className="cardImg" src={data.imglink} alt="" />
                  <div className="card_lower">
                    <p className="domainName">{data.domain}</p>
                    <Button
                      className="regBtn"
                      variant="outlined"
                      endIcon={<TrendingFlatRoundedIcon />}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </EventPageWrapper>
  );
};

export default Events;
