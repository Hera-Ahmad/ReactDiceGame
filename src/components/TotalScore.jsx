import  styled from "styled-components"

const TotalScore = () => {
  return (
    
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  
  )
}

export default TotalScore;

const ScoreContainer= styled.div`
max-width: 200px;
text-align:center;

max-width: 150px;
h1{
    font-size: 100px;
    line-height: 10px;
}

p{
    font-size: 24px;
    font-weight: 500px;
}
`;