import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"

import { useNavigate } from "react-router-dom"
// const secret = styled.input`
    

const Container = styled.div`

height: 100vh;
background-color: black;
// display: flex;
`;

const Label = styled.label`
    font-size: 24px;
    color: black;
`

const Input = styled.input`
    font-family: 'Courier New', Courier, monospace;    
    font-size: 24px;
    color: black;
`


function RealLoginPage(){
const navigate = useNavigate()
//yo quiero muchos taco bell y pleasedonottrytokillwallyandthisistherealloginpagebythewayandisntthissupercalifragilisticexpialidociouspleasesayyesandloverickrollsbecauseithelpedrickastleywhosnameisrichardpaulandrikastaliinarabicrisetofameafterhismusicalcareerendeddozensofyearsagoandalsogavemeandotherstheperfectsongtolisteneverydayandisatrulygoodmemeforeveryoneandialsolovecodingandilearnmultiplelanguagesincludingkoreanenglishchinesehtmlpythonjavascriptandcss
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
    
if(id  === "June" && password === "1234") {
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

    return(
        <Container>
            <h1>HELLOss WRLD</h1>
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
            onChange={PutUserInfo}></Input>
        </Container>
    )
}

export default RealLoginPage;