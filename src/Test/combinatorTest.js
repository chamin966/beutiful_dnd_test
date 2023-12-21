import styled from "styled-components";
import NavigationButton from "../components/navigationButton";

function CombinatorTest(){
  return(
    <>
      <NavigationButton path={'/'} name={'Home'}/>
      <StyledContainer>
        <div>
          <StyledTitle>{'하위 선택자: div {}는 자신이 감싸고 있는 모든 div들의 스타일에 관여'}</StyledTitle>
          <div>Element 1</div>
          <div>Element 2</div>
          <CombinatorDescendant>
            <div>CombinatorDescendant로 감싸준 div들</div>
            <div>
              <div>Element 2-1-1</div>
              <div>Element 2-1-2</div>
              <div>Element 2-1-3</div>
            </div>
            <div>Element 2-2</div>
            <div>Element 2-3</div>
          </CombinatorDescendant>
          <div>Element 3</div>
          <CombinatorDescendant>Element 4: CombinatorDescendant로 감쌌지만, 내부에 div가 없으므로 상속받은 보더와 패딩만 적용됨</CombinatorDescendant>
          <div>Element 5</div>
        </div>
        <hr/>
        <div>
          <StyledTitle>{'일반 선택자: ~ div {} 는 자신 이후의 모든 div들의 스타일에 관여'}</StyledTitle>
          <CombinatorGeneral>CombinatorGeneral</CombinatorGeneral>
          <div>Element 1</div>
          <div>Element 2</div>
          <div>
            <div>Element 2-1</div>
            <div>
              <div>Element 2-1-1</div>
              <div>Element 2-1-2</div>
              <div>Element 2-1-3</div>
            </div>
            <div>Element 2-2</div>
            <div>Element 2-3</div>
          </div>
          <div>Element 3</div>
          <div>Element 4</div>
          <div>Element 5</div>
        </div>
        <hr/>
        <div>
          <StyledTitle>{'인접 형제 선택자: + div {} 는 자신 바로 다음에 오는 div 하나의 스타일에만 관여'}</StyledTitle>
          <CombinatorAdjacent>CombinatorAdjacent</CombinatorAdjacent>
          <div>Element 1</div>
          <div>Element 2</div>
          <div>Element 3</div>
          <div>Element 4</div>
          <div>Element 5</div>
        </div>
        <hr/>
        <div>
          <StyledTitle>{'+ div {} 는 자신 바로 다음에 오는 div가 감싸고 있는 부분은 모두 영향을 줌'}</StyledTitle>
          <CombinatorAdjacent>CombinatorAdjacent</CombinatorAdjacent>
          <div>
            <div>바로 다음에 오는 div가 감싸고 있는 영역은 모두 영향을 받음</div>
            <div>Element 0-1</div>
            <div>
              <div>Element 0-1-1</div>
              <div>Element 0-1-2</div>
              <div>Element 0-1-3</div>
            </div>
            <div>Element 0-2</div>
            <div>Element 0-3</div>
          </div>
          <div>Element 1</div>
          <div>Element 2</div>
          <div>Element 3</div>
          <div>Element 4</div>
          <div>Element 5</div>
        </div>
        <div>
          <StyledTitle>{'자식 선택자: > p {} 직계 자식인 p에만 영향'}</StyledTitle>
          <p>p Element 1</p>
          <CombinatorChild1>
            <p>CombinatorChild 바로 아래 p Element 1-1</p>
            <p>CombinatorChild 바로 아래 p Element 1-2</p>
            <p>CombinatorChild 바로 아래 p Element 1-3</p>
            <div>
              <p>CombinatorChild > div > p Element 0-1-1</p>
              <div>
                <p>CombinatorChild > div > div > p Element 0-1-1-1</p>
                <p>CombinatorChild > div > div > p Element 0-1-1-2</p>
                <p>CombinatorChild > div > div > p Element 0-1-1-3</p>
              </div>
              <p>CombinatorChild > div > p Element 0-1-2</p>
              <p>CombinatorChild > div > p Element 0-1-3</p>
            </div>
            <p>CombinatorChild 바로 아래 p Element 1-4</p>
          </CombinatorChild1>
          <p>p Element 2</p>
          <p>p Element 3</p>
          <p>p Element 4</p>
          <p>p Element 5</p>
        </div>
        <div>
          <StyledTitle>{'자식 선택자: > div {} 직계 자식인 div의 내부는 전부 영향'}</StyledTitle>
          <p>p Element 1</p>
          <CombinatorChild2>
            <p>CombinatorChild 바로 아래 p Element 1-1</p>
            <p>CombinatorChild 바로 아래 p Element 1-2</p>
            <p>CombinatorChild 바로 아래 p Element 1-3</p>
            <div>
              <p>CombinatorChild > div > p Element 0-1-1</p>
              <section>
                <p>CombinatorChild > div > section > p Element 0-1-1-1</p>
                <p>CombinatorChild > div > section > p Element 0-1-1-2</p>
                <p>CombinatorChild > div > section > p Element 0-1-1-3</p>
              </section>
              <p>CombinatorChild > div > p Element 0-1-2</p>
              <p>CombinatorChild > div > p Element 0-1-3</p>
            </div>
            <p>CombinatorChild 바로 아래 p Element 1-4</p>
          </CombinatorChild2>
          <p>p Element 2</p>
          <p>p Element 3</p>
          <p>p Element 4</p>
          <p>p Element 5</p>
        </div>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  padding: 5px;
  background-color: beige;
  border: 3px solid brown;
`

const StyledTitle= styled.div`
  padding: 5px;
  background-color: white;
  margin-bottom: 10px;
`

// (하위 선택자 사용)
const CombinatorDescendant = styled(StyledContainer)`
    div {
        color: green; /* 설명을 위해 추가한 스타일 */
    }
`;

// ~ (일반 형제 선택자 사용)
const CombinatorGeneral = styled(StyledContainer)`
    ~ div {
        color: red; /* 설명을 위해 추가한 스타일 */
    }
`;

// + (인접 형제 선택자 사용)
const CombinatorAdjacent = styled(StyledContainer)`
    + div {
        color: blue; /* 설명을 위해 추가한 스타일 */
    }
`;

// > (자식 선택자 사용)
const CombinatorChild1 = styled(StyledContainer)`
  > p {
        color: cornflowerblue; /* 설명을 위해 추가한 스타일 */
    }
`;

// > (자식 선택자 사용)
const CombinatorChild2 = styled(StyledContainer)`
  > div {
        color: rosybrown; /* 설명을 위해 추가한 스타일 */
    }
`;

export default CombinatorTest;