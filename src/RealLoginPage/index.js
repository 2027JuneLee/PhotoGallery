import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import WALLYFAMILY from "./WALLYFAMILY.jpg"
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
`

const Left = styled.div`
    font-size: 100px;
    color: blue;
    text-align: center;
    margin-top: 20px;
    width: 50%;
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
    width: 50%;
   `
   const WallyImage = styled.img`
   height: 100%;
   `;
const WelcomeTitle = styled.h1`
    color: black;
    font-weight: 800;
    font-size: 40px;
    margin-left: 1px
`

const Label = styled.label`
    font-size: 24px;
    color: black;
`
const Input = styled.input`
    font-family: 'Courier New', Courier, monospace;    
    font-size: 24px;
    color: black;
`

const InputButton = styled.button`
    width: 20%;
    height: 50px;
    font-size: 24px;
    background-color: #FFF5EE;
    border-radius: 10px;
`

function RealLoginPage() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        id:"",
        password:"",
    })
    const {id , password} = user

const navigate2Home = () => {
    if(id === "" || password === "") {
        alert("ID OR PASSWORD IS EMPTY!")
        return
        }
        
    if(id  === "WallyNumberOne" && password === "yoquieromuchostacobellypleasedonottrytokillwallyandthisistherealloginpagebythewayandisntthissupercalifragilisticexpialidociouspleasesayyesandloverickrollsbecauseithelpedrickastleywhosnameisrichardpaulandrikastaliinarabicrisetofameafterhismusicalcareerendeddozensofyearsagoandalsogavemeandotherstheperfectsongtolisteneverydayandisatrulygoodmemeforeveryoneandialsolovecodingandilearnmultiplelanguagesincludingkoreanenglishchinesehtmlpythonjavascriptandcss") {
        alert("LOGIN SUCCESSFUL!")
        navigate("/")
        return
        }
    }
const PutUserInfo = (e) => {
    const{name, value} = e.target;
    console.log(name)
    console.log(value)
    setUser({...user,[name]:value});
    console.log(user.value)
}

function SignUp(){
    navigate("/signup")
}

return (   
    <Wrapper>
        <Left>
            <WelcomeTitle>We Are Happy To See You Back!</WelcomeTitle>
           <Label>ID: </Label> 
            <Input 
                autocomplete="off"
                type="text" 
                defaultValue={id}
                name="id" 
                onChange={PutUserInfo}>
            </Input>
            <br></br>
            <Label>Password: </Label> 
            <Input 
            autocomplete="off"
            type="password"
            defaultValue={password}
            name="password"
            onChange={PutUserInfo}
            >
            </Input>
            <br></br>
            <InputButton onClick={navigate2Home}>log in</InputButton>
            <InputButton onClick={SignUp}>SIGN UP!!!!!!</InputButton>
        </Left> 
        <Right> <WallyImage src={WALLYFAMILY}></WallyImage></Right>
    </Wrapper>
    )
}
export default RealLoginPage