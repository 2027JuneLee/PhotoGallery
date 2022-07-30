import styled from "styled-components"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    color: black;
    justify-content: center;
    align-items: center;
    // text-align: center;
    font-family: Arial Narrow, sans-serif;
    background-image: url(https://www.bettercloud.com/wp-content/uploads/bb-plugin/cache/mdblue-pattern-landscape.png)
`

const Heading = styled.h1`
    font-size: 30px;

`;

const Blob = styled.div`  
    border-radius: 30px;
    background-color: white;
    width: 1100px;
    // height: 0800px;
    padding: 20px;

`;
const  SubHeading = styled.h3`
    font-size: 20px;
    border-bottom: 1px black solid;
`;
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
const InputGUY = styled.button`
border-radius: 5px;
font-size: 14px;
border: none;
width: 100px;
height: 25px;
padding: 8px;

`;
const CheckBoxWrapper = styled.div`
display:flex;
flex-direction: row;
// justify-content: center;
align-items: center;
`;
const AgreementWrapper= styled.div`
// width: 100%;
height: 120px;
overflow-y: auto;
font-size: 18px;
// border: 1px black solid;
`;
function SignUpPage() {
    const navigate = useNavigate()

const [user, setUser] = useState({
    id:"",
    password:"",
    repeat_password:"",
    gender: "",
    email: "",
    privacy_policy: false,
    })
    console.log(user)
const PutUserInfo = (e) => { 
    const{name, value} = e.target;
    console.log(name , " " , value)
    if (name == "privacy_policy") {
        setUser({...user, [name]: !user.privacy_policy})
    } else {
        setUser({...user,[name]:value});    
    }
    
console.log(user)
    }
function Submit() {
    if (user.id != "" && user.password != "" && user.repeat_password == user.password && user.gender != "" && user.email != "" && user.privacy_policy == true) {
        alert("SIGN UP SUCCESSFUL!")
        navigate("/login")
    } else {
        alert("YOU FAILED. GO BACK!")
    }
}


return (   
    <Wrapper>
        <Blob>
            <Heading>SIGN UP FORM</Heading>
            <SubHeading>Please fill up this form to sign up for the photo gallery website.</SubHeading>
            <br></br>
           
                
                <Input id="Name" type="text"  placeholder="1. Fill in ID" name="id" value={user.id} onChange={PutUserInfo}/>
                <p>2. Gender</p>
                <input  type="radio" name="gender" value="male" onChange={PutUserInfo}/>
                <label>Male</label>
                <input  type="radio" name="gender" value="female" onChange={PutUserInfo}/>
                <label >Female</label>
                <input  type="radio" name="gender" value="non-binary" onChange={PutUserInfo}/>
                <label>Non-Binary</label>
                <br></br>
                <br></br>
                <Input type="password" name="password" placeholder="2. Password" value={user.password} onChange={PutUserInfo} />
                <br></br>
                <br></br>
                <Input  type="password" name="repeat_password"  placeholder="3. REPEAT Password" value={user.repeat_password} onChange={PutUserInfo} />
                <br></br>
                <br></br>
                <Input type="text" name="email"  placeholder="4. Email-Address" value={user.email}onChange={PutUserInfo} />
                <br></br>
                <br></br>
                <CheckBoxWrapper>
                <p>6. Do you agree to our privacy policy?</p>
                <input name="privacy_policy" type="checkbox" onChange={PutUserInfo}/>
                </CheckBoxWrapper>
                

                <AgreementWrapper>
                    SUMMARY OF KEY POINTS:
                    This summary provides key points from our privacy notice, but you can find out more details about any
                     of these topics by clicking the link 
                    following each key point or by using our table of contents below to find the section you are looking for. 
                    You can also click here to go directly to our table of contents.What personal information do we process? When you visit, use, or navigate our Services, 
                    we may process personal information depending on how you interact with I Don't Have A Company and the Services,
                     the choices you make, and the products and features you use. Click here to learn more.Do we process any sensitive personal information?
                      We do not process sensitive personal information.Do we receive any information from third parties? We do not receive any 
                      information from third parties.How do we process your information? We process your information to provide, improve, and administer our Services,
                       communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes
                        with your consent. We process your information only when we have a valid legal reason to do so. 
                        Click here to learn more.In what situations and with which parties do we share personal information? 
                        We may share information in specific situations and with specific third parties. Click here to learn more.What are your rights? Depending
                         on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                          Click here to learn more.How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject
                           request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws
                           .Want to learn more about what I Don't Have A Company does with any information we collect? Click here to review the notice in full. </AgreementWrapper>
                <br></br>
                <InputGUY onClick={Submit}>Submit!!!</InputGUY>
        </Blob>
    </Wrapper>
    )
}
export default SignUpPage