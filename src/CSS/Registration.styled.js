import styled from "styled-components";

export const RegistrationWrapper = styled.section`
  background: url(${(props) => props.backImg});
  /* background-color: #000; */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  .textfield{
    width: 250px;
    color: #fff;
    border-color: #fff;
    outline: #fff;
  }
  .banner{
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    font-size: 70px;
    margin-top: 0px;
    background: url(${(props) => props.back});
    -webkit-background-clip: text;
    animation: backSlide 10s linear infinite;
    text-shadow: 0px 0px 20px #fff;
  }
  .paperDiv{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .paper {
    border-radius: 20px;
    border: 2px solid #fff;
    box-shadow: 0px 0px 15px #323232;
    width: 300px;
    height: 400px;
    background-color: #000000a4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    padding: 10px;
  }
  .inputTag{
    /* background-color: #fff; */
  }
  .MuiTextField-root{
    width:250px;
  }
  .submitBtn{
    width: 200px;
    font: "Jost";
    border-radius: 10px 20px 10px 20px;
    color: #fff;
    transition:1s;
    border: 1px solid #fff;
  }
.submitBtn:hover{
  border: 1.5px solid #000;
  color: #000;
  background-color: #fff;

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


