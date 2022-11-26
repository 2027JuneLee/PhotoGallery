import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Stage, Layer, Rect, Text } from "react-konva";
import Waldowallyyyyyyyyyy from "./waldowallyyyyyyyyyy.jpeg";
import { Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  font-size: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 15%;
  height: 100vh;
  opacity: 0.8;
  font-weight: bold;
  background-color: #f8f8e7;
  font-family: 'Courier Prime', monospace;
`;
const Write = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  // text-align: center;
  width: 80%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
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
  const location = useLocation();
  const states = location.state;
  console.log(states);
  const [images, setImages] = useState({
    select1: states.select1,
    select2: states.select2,
    select3: states.select3,
  });

  return (
    <Wrapper>
      <Left>
        YOUR CHOSEN WALLY/RACCOON/BG:
        <img src={images.select1}></img>
        <img src={images.select2}></img>
        <img src={images.select3}></img>
      </Left>
      <Write>
        <h1>Welcome To Wally Gallery!</h1>
        <h6>Now let's create YOUR OWN Wally Page!</h6>
        <button>CREATE WALLY PAGE</button>
        <p>How to Make Your Own Wally Page:</p>
        <h6>1. You Already Chose Your Characters!</h6>
        <h6>2. Click on The Button Above for Your Own Cartoon Page!</h6>
        <h6>3. Enjoy!</h6>
      </Write>
    </Wrapper>
  );
}
export default MainPage;
