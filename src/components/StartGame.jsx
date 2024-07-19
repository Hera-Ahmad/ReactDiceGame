import React from "react";
import styled from "styled-components";

const StartGame = () => {
  return <Container> 
     <img src="hero.png" alt="hero-logo" />
     <div>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
     </div>
     </Container> 
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display:flex;
  margin: 0 auto;
`;

const Button = styled.button`
padding: 10px 18px;
gap:10px;
min-width:220px;
background: black;
color:white;
border-radius:5px;
border:none;
`;