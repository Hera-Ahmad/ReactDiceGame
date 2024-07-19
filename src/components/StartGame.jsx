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
`;

const Button= styled.button`
`;