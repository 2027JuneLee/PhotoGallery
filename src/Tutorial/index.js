import styled from "styled-components";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Wally from "./Wally.png";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
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

function Stickers({ shapeProps, isSelected, onSelect, onChange }) {
  const [image] = useImage(shapeProps.src);
  const shapeRef = useRef();
  const trRef = useRef();
  // useLayoutEffect(() => {
  //   if (image) {
  //     shapeRef.current.cache();
  //   }
  // }, [shapeProps, image, isSelected]);
  const [size, setSize] = useState({ w: shapeProps.w, h: shapeProps.h });

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Image
        image={image}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),

            width: Math.max(5, node.width() * scaleX), //5
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
}
function Tutorial() {
  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  const dragUrl = useRef();
  const stageRef = useRef();

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
                  id: 1,
                },
              ])
            );
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Stage
            width={1200}
            height={600}
            style={{ border: "1px solid #666600" }}
            ref={stageRef}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >
            <Layer>
              {images.map((image, i) => {
                return (
                  <Stickers
                    key={i}
                    shapeProps={image}
                    isSelected={image.id === selectedId}
                    onSelect={() => {
                      selectShape(image.id);
                    }}
                    onChange={(newAttrs) => {
                      const imgs = images.slice();
                      imgs[i] = newAttrs;
                      setImages(imgs); //setRectangles(rects);
                    }}
                  />
                );
              })}
            </Layer>
          </Stage>
        </BoardWrapper>
      </BodyWrapper>
    </Wrapper>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Tutorial />);

export default Tutorial;
