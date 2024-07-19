import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import  styled from "styled-components"

const GamePlay = () => {
  return (
    <maiMainContainern>
      <div className="top-section">
      <TotalScore/>
      <NumberSelector/>
      </div>
    </maiMainContainern>
  );
};

export default GamePlay;

const MainContainer= styled.main`
.top-section{
  display: flex;
}`;
