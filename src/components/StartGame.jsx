
import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="hero.png" alt="hero-logo" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick= {toggle} >Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;


const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background: black;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.4s ease-in, color 0.4s ease-in;

  &:hover {
    background-color: white;
    color: black;
  }
`;