import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import WALLYWORLD from "./WALLYWORLD.jpeg"
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
    opacity: 0.5;
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

function MainPage() {
    const navigate = useNavigate()

return (   
    <Wrapper>
        DD
    </Wrapper>
    )
}
export default MainPage