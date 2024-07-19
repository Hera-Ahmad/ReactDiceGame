import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import  styled from "styled-components"
import RoleDice from "./RoleDice";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top-section">
      <TotalScore/>
      <NumberSelector/>
      </div>
      <RoleDice></RoleDice >
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer= styled.main`
padding-top:30px;

.top-section{  
  display: flex;
  justify-content: space-around;
  align-items: end;

}`;
