import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import WALLYFAMILY from "./WALLYFAMILY.jpg";
import { Row, Col } from "react-bootstrap";
const Wrapper = styled.div`
  height: 100vh;
  font-family: Gill Sans, sans-serif;
`;

const Left = styled.div`
  font-size: 100px;
  color: blue;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  background: repeating-linear-gradient(
    75deg,
    #ff0000,
    #ff0000 10px,
    #f5fffa 10px,
    #f5fffa 20px
  );
`;

const WallyImage = styled.img`
  height: 100vh;
`;
const WelcomeTitle = styled.h1`
  color: black;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 50px;
`;

const Label = styled.label`
  font-size: 24px;
  color: black;
  width: 50%;
`;
const Input = styled.input`
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  color: black;
  width: 70%;
  margin: auto;
`;

const InputButton = styled.button`
  width: 40%;
  height: 50px;
  font-size: 15px;
  background-color: #fff5ee;
  border-radius: 10px;
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 30px;
`;

function RealLoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    password: "",
  });
  const { id, password } = user;

  const navigate2Home = () => {
    if (id === "" || password === "") {
      alert("ID OR PASSWORD IS EMPTY!");
      return;
    }

    if (
      id === "WallyNumberOne" &&
      password ===
        "!1234"
    ) {
      alert("LOGIN SUCCESSFUL!");
      console.log("yoquieromuchostacobellypleasedonottrytokillwallyandthisistherealloginpagebythewayandisntthissupercalifragilisticexpialidociouspleasesayyesandloverickrollsbecauseithelpedrickastleywhosnameisrichardpaulandrikastaliinarabicrisetofameafterhismusicalcareerendeddozensofyearsagoandalsogavemeandotherstheperfectsongtolisteneverydayandisatrulygoodmemeforeveryoneandialsolovecodingandilearnmultiplelanguagesincludingkoreanenglishchinesehtmlpythonjavascriptandcssohandbythewayilestentoaverypopularfamousandmiraclesongnamednevergonnagiveyouupbyrickastleyandialsolistentoabbabonnietylerandsomuchmoreartistsonyoutubemusicspotifymelondeezerandsomuchmoremusicstreamingplatforms")
      navigate("/");
      return;
    }
  };
  const PutUserInfo = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setUser({ ...user, [name]: value });
    console.log(user.value);
  };

  const SignUp = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <Row noGutter>
        <Col md={6}>
          <Left>
            <WelcomeTitle>We Are Happy To See You Back!</WelcomeTitle>
            <ButtonWrapper>
              <Label>ID: </Label>
              <Input
                autocomplete="off"
                type="text"
                defaultValue={id}
                name="id"
                onChange={PutUserInfo}
              ></Input>
            </ButtonWrapper>
            <ButtonWrapper>
              <Label>Password: </Label>
              <Input
                autocomplete="off"
                type="password"
                defaultValue={password}
                name="password"
                onChange={PutUserInfo}
              ></Input>
            </ButtonWrapper>
            <ButtonWrapper>
              <InputButton onClick={navigate2Home}>log in</InputButton>
              <InputButton onClick={SignUp}>SIGN UP</InputButton>
            </ButtonWrapper>
          </Left>
        </Col>
        <Col md={6} className="d-none d-lg-block">
          <WallyImage src={WALLYFAMILY}></WallyImage>
        </Col>
      </Row>
    </Wrapper>
  );
}
export default RealLoginPage;
