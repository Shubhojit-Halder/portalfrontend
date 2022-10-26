import styled from "styled-components";
export const LandingPageWrapper = styled.section`
  background: url(${(props) => props.bgImg});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 50px 0px 50px;
  /* overflow-y: hidden; */

  .portal_2k22 {
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
