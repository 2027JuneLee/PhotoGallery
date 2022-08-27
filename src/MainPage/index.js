import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    color: black;
    font-family: Gill Sans, sans-serif;
`
const Left = styled.div`
    font-size: 20px;
    color: blue;
    text-align: center;
    margin-top: 20px;
    width: 20%;
    font-weight: bold;
    background: 
        repeating-linear-gradient(
            45deg,
            #FF0000,
            #FF0000 10px,
            #F5FFFA 10px,
            #F5FFFA 20px
        );;
    font-family: 
`
const Right = styled.div`
    // text-align: center;
    margin-top: 20px;
    width: 80%;
   `

function MainPage() {
    return (   
    <Wrapper>
        <Left><h1>Please create your own Wally Page!</h1></Left>
        <Right><h1>y. </h1></Right>
    </Wrapper>
    )
}
export default MainPage