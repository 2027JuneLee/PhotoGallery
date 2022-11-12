import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WALLYWORLD from "./WALLYWORLD.jpeg";
import WALDO from "./WALDO.png";
import ODLAW from "./ODLAW.png";
import WALTER from "./WALTER.png";
import AWALLY from "./AWALLY.png";
import WATCHERS from "./WATCHERS.png";
import WHITEBEARD from "./WHITEBEARD.png";
import WHERE from "./WHERE.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
  // text-align: center;
  font-family: Arial Narrow, sans-serif;
  background-image: url({WALLYWORLD});
  font-family: "Dancing Script", cursive;
  opacity: 0.8;
  background: repeating-linear-gradient(
    45deg,
    #ff0000,
    #ff0000 50px,
    #f5fffa 10px,
    #f5fffa 20px
  ); ;
`;

const Input = styled.input`
  border-radius: 5px;
  background: black;
  font-size: 14px;
  border: none;
  color: white;
  width: 500px;
  height: 25px;
  padding: 8px;
`;
const SliderWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: center;
`;
const SliderButton = styled.button`
  font-size: 40px;
  color: black;
  font-weight: 700;
  border: none;
`;

const Block = styled.img`
  background-color: yellow;
  width: 55%;
  height: 100%;
  margin-right: 20px;
  margin-left: 20px;
`;
function MainPage() {
<<<<<<< HEAD
  const navigate = useNavigate();
  function MOVE2() {
    if (window.confirm("CONFIRM TO SELECT CHARACTER?")) {
      navigate("/select-2");
    } else {
      alert("TASK ABORTED");
=======
    const navigate = useNavigate()

    function MOVE2(index){
        console.log(images[index])
        
       
        if (window.confirm('CONFIRM TO SELECT CHARACTER?')){
            navigate( "/select-2",
           {
state:          {select1: images[index]}   
           } )
        }else{
            alert("TASK ABORTED")
        }
>>>>>>> 335b37c0ad2a3f30c5aa3d094b2a4cc2d59d034c
    }
  }
  const [WallyIndex, setWallyIndex] = useState({
    first: 0,
    last: 4,
  });
  const images = [
    ODLAW,
    AWALLY,
    WHERE,
    WALDO,
    WALTER,
    WHITEBEARD,
    ODLAW,
    WATCHERS,
  ];

  const nextPage = (action) => {
    if (action == "prev" && WallyIndex.first == 4) {
      setWallyIndex({
        first: 0,
        last: 4,
      });
    }
    if (action == "next" && WallyIndex.first == 0) {
      setWallyIndex({
        first: 4,
        last: 8,
      });
    }
  };
  var mediaQueryList = window.matchMedia("(min-width: 729px)");
  return (
    <Wrapper>
      <h2>SELECT YOUR CHARACTER: </h2>
      <SliderWrapper>
        <SliderButton onClick={() => nextPage("prev")}>
          <span>&#8592;</span>
        </SliderButton>

        {mediaQueryList.matches &&
          images.slice(WallyIndex.first, WallyIndex.last).map((image) => (
            <Col md={3}>
              <Block onClick={MOVE2} src={image} />
            </Col>
          ))}
        {!mediaQueryList.matches &&
          images.slice(WallyIndex.first, 1).map((image) => (
            <Col md={3}>
              <Block onClick={MOVE2} src={image} />
            </Col>
          ))}

        <SliderButton onClick={() => nextPage("next")}>
          <span>&#8594;</span>
        </SliderButton>
      </SliderWrapper>
      {/* 
      <br></br>
      <SliderWrapper>
        <SliderButton onClick={() => nextPage("prev")}>
          <span>&#8592;</span>
        </SliderButton>
<<<<<<< HEAD
        {images.slice(WallyIndex.first, WallyIndex.last).map((image) => (
          <Block onClick={MOVE2} src={image} />
        ))}
=======
        {
            images.slice(WallyIndex.first, WallyIndex.last).map((image, index) => (<Block onClick={() => MOVE2(index)} src={image}/>))
        }
>>>>>>> 335b37c0ad2a3f30c5aa3d094b2a4cc2d59d034c

        <SliderButton onClick={() => nextPage("next")}>
          <span>&#8594;</span>
        </SliderButton>
      </SliderWrapper> */}
    </Wrapper>
  );
}
export default MainPage;
