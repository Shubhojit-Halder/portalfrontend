import styled from "styled-components";
export const LandingPageWrapper = styled.section`
  background: url(${(props) => props.bgImg});
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 50px 20px 50px;

  .navlist {
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: 0.1em;
    list-style: none;
    font-family: "Jost", sans-serif;
  }
  .box_nav {
    -webkit-text-stroke: 0.75px #fff;
    text-shadow: 0px 0px 20px #0f8dd6;
    color: transparent;
    animation: back 20s linear infinite;
    background: url(${(props) => props.backPNG});
    -webkit-background-clip: text;
    background-position: 5px 5px;
    cursor: pointer;
    transition: 1s;
  }
  .box_nav:hover {
    border-bottom: 2px solid white;
  }
  /* .box_nav::after{
    content: "";
    background-color: #fff;
    height: 10px;
    width: 100%;
  } */
  .box_nav:hover {
    letter-spacing: 0.2em;
    text-shadow: 0px 0px 50px #0f8dd6;
  }
  .club-name {
    text-align: center;
    font-size: 85px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0px 0px 20px #0f8dd6;
  }
  .portal_2k22{
    font-size: 100px;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 2px #fdffa1;
    text-align: center;
    /* font-family: 'Jost', sans-serif; */
  }
  .portal_2k22 p {
    font-size: 60px;
    margin-top: -70px;
  }
  .portal_2k22 h1 {
    background: url(${(props) => props.backPNG});
    -webkit-background-clip: text;
    background-position: 5px 5px;
    animation: backSlide 7s linear infinite;
    transition: 2s linear;
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
  @keyframes back {
    10% {
      background-position: 0px 200px;
    }
    /* 40%{
      background-position: 200px 350px;
    }
    70%{
      background-position: 400px 550px;
    } */
    100% {
      background-position: 1000px 700px;
    }
  }
`;
