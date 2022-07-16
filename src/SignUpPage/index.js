import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    color: black;
    justify-content: center;
    text-align: center;
    background-image: url(https://www.bettercloud.com/wp-content/uploads/bb-plugin/cache/mdblue-pattern-landscape.png)
`

function SignUpPage() {
return (   
    <Wrapper>
        <h1>SIGN UP FORM</h1>
        <br></br>
        <form>
            <p>1. What's your ID?</p>
            <label for="Name">Must be 3-18 characters; no .,?!s allowed</label>
            <input id="Name" type="text" name="text-field" />
            <p>2. What's your gender?</p>
            <input id="Gender" type="radio" name="text-field" value="Joe"/>
            <label for="Gender">Male</label>
            <input id="Gender" type="radio" name="text-field" value="Joe"/>
            <label for="Gender">Female</label>
            <input id="Gender" type="radio" name="text-field" value="Joe"/>
            <label for="Gender">Non-Binary</label>
            <p>3. What's the PASSWORD (8-24 characters, must have numbers, small and capital letters, and two special chracters!!!)?</p>
            <label for="Password"></label>
            <input id="Password" type="passwor" name="text-field" />
            <p>4. REPEAT PASSWORD</p>
            <label for="Password"></label>
            <input id="Password" type="password" name="text-field" />
            <p>5. Email Address</p>
            <label for="Password"></label>
            <input id="Password" type="text" name="text-field" />
            <p>6. Your favorite phrase or something to remember in case you forget your account details</p>
            <label for="Code"></label>
            <input id="Code" type="text" name="text-field" />
            <p>7. Check to consent to our privacy policy (link: https://pastebin.com/1AjhqcMD)?</p>
            <label for="Password"></label>
            <input id="Password" type="checkbox" name="text-field" />


        </form>

    </Wrapper>
    )
}
export default SignUpPage