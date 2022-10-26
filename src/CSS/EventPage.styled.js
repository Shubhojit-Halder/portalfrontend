import styled from "styled-components";

export const EventPageWrapper = styled.section`
  background: url(${(props) => props.backImg});
  padding-bottom: 20px;
  /* background: black; */
  background-position: center;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -20px;
  /* min-height: 100vh; */
  /* overflow-y: hidden; */
  .events {
    /* margin-top: -17px; */
    text-shadow: 0px 0px 70px #fff;
    background: url(${(props) => props.back});
    -webkit-background-clip: text;
    background-position: 40px 20px;
    font-size: 85px;
    margin-top: -50px;
    font-weight: bold;
    font-family: "Jost", sans-serif;
    -webkit-text-stroke: 2px #fff;
    color: transparent;
    text-align: center;
    animation: backSlide 10s ease-in-out infinite;
    z-index: 10;
  }

  .allcards {
    margin-top: -50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .background {
    border-radius: 120px 400px 110px 10px;
    background: #2f2f2f48;
    width: 280px;
    height: 360px;
    left: 100px;
    z-index: 1;
    position: absolute;
    transition: 0.5s;
  }
  .card:hover .background {
    border-radius: 10px 20px 110px 10px;
    height: 380px;
  }
  .card {
    width: 360px;
    position: relative;
    transition: 0.5s;
    /* margin-bottom: 20px; */
    margin: 50px;
  }
  .card:hover {
    margin-top: -10px;
  }
  .domainName {
    color: #fff;
    font-size: 1.7rem;
    z-index: 15;
    margin-top: -22px;
    font-family: "Jost";
  }
  .cardImg {
    width: 310px;
    height: 310px;
    z-index: 2;
    position: relative;
  }
  .card_lower {
    text-align: center;
    transition: 1s ease-in;
  }
  .regBtn {
    border: 1px solid #fff;
    border-radius: 10px 30px 10px 30px;
    background: transparent;
    color: #fff;
    visibility: hidden;
    transition: 0.5s ease-in;
    font-family: "Jost";
    z-index: 1;
  }
  .card:hover .regBtn {
    visibility: visible;
  }
  .regBtn:hover {
    background: #ffffff;
    border: 1px solid #000;
    color: #000;
  }
  @keyframes backSlide {
    10% {
      background-position: 0px 200px;
    }
    40% {
      background-position: 200px 350px;
    }
    70% {
      background-position: 400px 550px;
    }
    100% {
      background-position: 1000px 700px;
    }
  }
`;
