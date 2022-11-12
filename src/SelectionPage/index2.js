import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Img1 from "./raccoon-1.jpg";
import Img2 from "./raccoon-2.png";

import Img4 from "./raccoon-4.png";
import Img5 from "./raccoon-5.png";

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
  width: 250px;
  height: 250px;
  margin-right: 20px;
  margin-left: 20px;
`;
function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  function MOVE2(index){
    console.log(images[index])
    
   
    if (window.confirm('CONFIRM TO SELECT CHARACTER?')){
        navigate( "/select-3",
       {
        state:       
           {...location.state,
            select2: images[index]}   
       } )
    }else{
        alert("TASK ABORTED")
    }
}
  const [RacoonIndex, setRacoonIndex] = useState({
    first: 0,
    last: 4,
  });
  const images = [Img1, Img2, Img4, Img5];

  const nextPage = (action) => {
    if (action == "prev" && RacoonIndex.first == 4) {
      setRacoonIndex({
        first: 0,
        last: 4,
      });
    }
    if (action == "next" && RacoonIndex.first == 0) {
      setRacoonIndex({
        first: 4,
        last: 8,
      });
    }
  };

  return (
    <Wrapper>
      <h2>SELECT YOUR CHARACTER: </h2>
      <br></br>
      <SliderWrapper>
        <SliderButton onClick={() => nextPage("prev")}>
          <span>&#8592;</span>
        </SliderButton>
        {images.slice(RacoonIndex.first, RacoonIndex.last).map((image, index) => (
          <Block onClick={() => MOVE2(index)}src={image} />
        ))}

        <SliderButton onClick={() => nextPage("next")}>
          <span>&#8594;</span>
        </SliderButton>
      </SliderWrapper>
    </Wrapper>
  );
}
export default MainPage;
