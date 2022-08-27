import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"
import WallyImg from "./Wally.png"
import { useNavigate } from "react-router-dom"
// const secret = styled.input`
    

const Container = styled.div`

height: 100%;
background-color: black
// display: flex;
`;


const Image = styled.div`

height: 100vh;
display: flex;
background-size: cover;
background-image: url("https://external-preview.redd.it/PSbhZ-gbARnGclRKyx4q8xjbi131OlJBcNqXi0YwS5Y.jpg?auto=webp&s=5542bad45abe5d3d67688989235a21495f7efbcb")
`;

const Wally = styled.img`
height : 45px;
width : 25px;
`
const Count = styled.div`
height: 100px;
width: 150px;
text-align: center;
position: absolute;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgbdlaSJN5qb1lsaE0LXB2Rgb4jiAirvJiA&usqp=CAUS");
border: 5px red solid;
border-radius: 10px;
font-family: 'Lato', sans-serif;
left: 50%;
top: 50%;
`



let clicks = 0
function LoginPage(){
  const navigate = useNavigate()
  const [user, setUser] = useState({
    id:"",
    password:"",
  })

  const [top, setTop] = useState(Math.floor(Math.random() * (window.innerHeight - 50)))
  const[left,setLeft] = useState(Math.floor(Math.random() * (window.innerWidth - 50)))
  const[ms,message] = useState(`You Found Me!, Number of Wallys clicked: ${clicks}`)

    const WallyStyle = {
      position: 'absolute',
      top: top , 
      left: left
    }

    function FoundWally(){
      clicks = clicks + 1
      console.log(clicks)
      // setClicked(true)
      setTop(Math.floor(Math.random() * (window.innerHeight - 50)))
      setLeft(Math.floor(Math.random() * (window.innerWidth - 50)))
      message(`You Found Me!, Number of Wallys clicked: ${clicks}`)
      if(clicks == 10){
        navigate("/login")
      }

      
    }
    return(
        //FIND THE WALLY THE QUICKEST CONTEST!!!
        <Container>

          <Image>
            <Count>{ms}</Count>
            <Wally style={WallyStyle} src={WallyImg} onClick={FoundWally}/>
            <h2>hi</h2>
          </Image>

        </Container>
    )
}

export default LoginPage;