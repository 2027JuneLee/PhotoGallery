import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {Stage,Layer, Rect, Text} from "react-konva"

const Wrapper = styled.div`
    
    height: 100%;
    display: flex;
    flex-direction:row;

`
const Left = styled.div`
    font-size: 20px;
    color: black;
    display:flex;
    flex-direction:column;
    text-align: center;
    width: 25%;
    height: 100vh;
    font-weight: bold;
   background: repeating-linear-gradient(
    45deg,
    #f81e1e,
    #f81e1e 10px,
    #f5fffa 10px,
    #f5fffa 20px
  );
`
const Write = styled.div`
    font-size: 20px
    display:flex;
    flex-direction: column;
    // text-align: center;
    width: 80%;
    height: 100%;
`

function MainPage() {
    const location = useLocation()
    const states = location.state
    const [images, setImages] = useState( {
        select1 :  states.select1,
        select2 : states.select2,
        select3 : states.select3
})
    return (   
    <Wrapper>
        <Left>
            YOUR CHOSEN WALLY/RACCOON/BACKGROUND:
            <img src={images.select1}></img>
            <img src={images.select2}></img>
            <img src={images.select3}></img>    
        </Left>
        <Write>
            <h1>How To Create Your Own Wally Page: I DONT KNOW!</h1>
            <h6>Now let's create YOUR OWN WALLY PAGE!</h6>
               <Stage width={300} height={300}>
                <Layer>
                <Rect x={20} y={20} width={100} height={100} fill={"yellow"}/>
                </Layer>
                </Stage> 
        </Write>
    </Wrapper>
    )
}
export default MainPage