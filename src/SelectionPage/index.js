import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import WALLYWORLD from "./WALLYWORLD.jpeg"
import WALDO from "./WALDO.png"
import ODLAW from "./ODLAW.png"
import WALTER from "./WALTER.png"
import AWALLY from "./AWALLY.png"
import WATCHERS from "./WATCHERS.png"
import WHITEBEARD from "./WHITEBEARD.png"
import WHERE from "./WHERE.png"

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
    font-family: 'Dancing Script', cursive;
    opacity: 0.8;
    background: 
    repeating-linear-gradient(
        
        45deg,
        #FF0000,
        #FF0000 50px,
        #F5FFFA 10px,
        #F5FFFA 20px
    );;
`

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
    }
    const [WallyIndex, setWallyIndex] = useState({
        first: 0,
        last: 4
    })
    const images = [ODLAW,AWALLY,WHERE,WALDO,WALTER,WHITEBEARD,ODLAW,WATCHERS]

    const nextPage = (action) => {
        if(action == "prev" && WallyIndex.first == 4) {
            setWallyIndex({
                first: 0 ,
                last: 4
            })
        }
        if(action == "next" && WallyIndex.first == 0) {
            setWallyIndex({
                first: 4 , 
                last: 8
            })
        }
    }

return (   
    <Wrapper>
        <h2>SELECT YOUR CHARACTER: </h2>
        <br></br>
        <SliderWrapper>
        <SliderButton onClick={() => nextPage("prev")}> 
            <span>&#8592;</span>
        </SliderButton>
        {
            images.slice(WallyIndex.first, WallyIndex.last).map((image, index) => (<Block onClick={() => MOVE2(index)} src={image}/>))
        }

<SliderButton onClick={() => nextPage("next")}> 
            <span>&#8594;</span>
        </SliderButton>
        </SliderWrapper>
          </Wrapper>
    )
}
export default MainPage