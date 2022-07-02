import styled from "styled-components"
import React, { useState } from "react"

// const secret = styled.input`
    

const Container = styled.div`

height: 100vh;
background-color: black`;

const Image = styled.div`

height: 100vh;

background-image: url("https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4");
`;

const Wally = styled.img`
height = 150px;
width = 150px;
`




function LoginPage(){
    return(
        <Container>

          <Image>
            <Wally src="https://www.dlf.pt/dfpng/middlepng/420-4205020_wheres-waldo-face-png-download-wheres-wally-no.png"/>
            <h2>hi</h2>
          </Image>

        </Container>
    )
}

export default LoginPage;