import styled from "styled-components";

export const NavWrapper = styled.section`

.navlist {
    margin-top: 0px;
    display: flex;
    justify-content: space-around;
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
    animation: back 15s linear infinite;

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
  @keyframes back{
    10% {
      background-position: 0px 200px;
    }
    100% {
      background-position: 1000px 700px;
    }
  }
`