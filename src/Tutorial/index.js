import styled from "styled-components";
import React, { useState } from "react";
import Wally from "./Wally.png";

const Wrapper = styled.div`
  background-color: gray;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  /* margin-top: 50px; */
  color: black;
`;

const Image1 = styled.img`
  width: 100px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;
function Tutorial() {
  return (
    <Wrapper>
      <Title>Tutorial</Title>

      <ImageWrapper>
        <Image1 src={Wally}></Image1>
        <Image1 src={Wally}></Image1>
        <Image1 src={Wally}></Image1>
      </ImageWrapper>
    </Wrapper>
  );
}

export default Tutorial;
