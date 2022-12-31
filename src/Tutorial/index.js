import styled from "styled-components";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Wally from "./Wally.png";
import Ra from "./raccoon-1.jpg";
import Null from "./null.png"
import Ba from "./background-1.jpg";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Image, Transformer, Line, Text } from "react-konva";
import useImage from "use-image";
import TUTO from "./tuto.png"

const Wrapper = styled.div`
  background-color: #fffacd;
  height: 100vh;
  /* text-align: center; */
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const INPUT = styled.input`
  height: 25px;
  width: 200px;
  /*margin-left: 100px;*/
`

const P = styled.p`
  margin-left: 100px;
`

const INPUT2 = styled.input`
  height: 25px;
  width: 100px;
`
const INPUT3 = styled.input`
  height: 50px;
  width: 300px;
  font-size: 48x;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
`;
const Title = styled.h1`
  /* margin-top: 50px; */
  text-align: center;
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

const SelectWrapper = styled.select`
  width: 100px;
  /*margin-left: 100px;*/
`;

function Stickers({ shapeProps, isSelected, onSelect, onChange }) {
  const [image] = useImage(shapeProps.src);
  const shapeRef = useRef();
  const trRef = useRef();

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
  const [color, setColor] = React.useState("#000000");  
  const addColor = (event) => {
    setColor(event.target.value);
  };
  const [RAA, setRAA] = React.useState("./null.png");  
  const addRAA = (event) => {
    setRAA(event.target.value);
  };
  const [thickness, setThickness] = React.useState("5");  
  const addThickness = (event) => {
    setThickness(event.target.value);
  };

  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [tool, setTool] = React.useState("pen");
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }

    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const dragUrl = useRef();
  const stageRef = useRef();

  return (
    <Wrapper>
      <Title>Tutorial</Title>
      <p>Drag the boring tutorial image to the whiteboard!</p>

      <div>
      <SelectWrapper
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </SelectWrapper>
      <INPUT2 type="text" id="size" onChange={(addThickness)}></INPUT2>
      <P>Tool PX</P>
      </div>
      <INPUT type="text" id="color" onChange={addColor}></INPUT>
      <P>Color</P>
      <INPUT type="text" id="color" onChange={addRAA}></INPUT>
      <P>Custom Image URL</P>




      <BodyWrapper>
        <ImageWrapper>
          <Image1
            src={Wally}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          ></Image1>
                    <Image1
            src={Ra}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          ></Image1>
          <Image1
            src={RAA}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          ></Image1>
                    <Image1
            src={TUTO}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          ></Image1>

                    <Image1
            src={Ba}
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
          <INPUT3 type="text" id="color"></INPUT3>
          <Stage
            width={1200}
            
            height={600}
            style={{ border: "1px solid #666600"}}
            ref={stageRef}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            onMouseup={handleMouseUp}
            onMousemove={handleMouseMove}
          >
            <Layer>
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke={color}
                  strokeWidth={thickness}
                  tension={0.5}
                  lineCap="round"
                  lineJoin="round"
                  globalCompositeOperation={
                    line.tool === "eraser" ? "destination-out" : "source-over"
                  }
                />
              ))}
            </Layer>
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
