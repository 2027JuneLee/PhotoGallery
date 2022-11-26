import styled from "styled-components";
import React, { useState } from "react";
import Wally from "./Wally.png";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import "./index.css";
const Wrapper = styled.div`
  background-color: #fffacd;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
`;
const Title = styled.h1`
  /* margin-top: 50px; */
  color: black;
`;

const Image1 = styled.img`
  width: 100px;
`;

const ImageWrapper = styled.div`
  width: 35%;
`;

const BoardWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
function Tutorial() {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);

  const URLImage = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <Image
        image={img}
        x={image.x}
        y={image.y}
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
      />
    );
  };
  return (
    <Wrapper>
      <Title>Tutorial</Title>
      <BodyWrapper>
        <ImageWrapper>
          <Image1
            src={Wally}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          ></Image1>
        </ImageWrapper>
        <BoardWrapper
          onDrop={(e) => {
            e.preventDefault();
            // register event position
            stageRef.current.setPointersPositions(e);
            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current,
                },
              ])
            );
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ border: "1px solid #666600" }}
            ref={stageRef}
          >
            <Layer>
              {images.map((image) => {
                return <URLImage image={image} />;
              })}
            </Layer>
          </Stage>
        </BoardWrapper>
      </BodyWrapper>
      {/* <BoardWrapper></BoardWrapper> */}
    </Wrapper>
  );
}

export default Tutorial;
