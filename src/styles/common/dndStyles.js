import styled from "styled-components";

export const StyledToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: cornflowerblue;
  width: 300px;
  justify-content: center;
  
  // 클론 생성 시 높이 커지는 문제 해결 가능
  // max-height: 153px;
  // <Droppable>의 direction 속성을 vertical(default), horizon 으로 엘리먼트 흐름의 방향을 조절하면 자연스럽게 움직임
`;

export const StyledDropRowsContainer = styled.div`
  display: flex;
`;

export const StyledDropContainer = styled(StyledToolContainer)`
  width: auto;
`;

export const StyledTool = styled.div`
  width: 100px;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  box-shadow: ${(props) => (props.isDragging && "0 0 0 3px blue")};
`;

export const StyledToolClone = styled(StyledTool)`
    ~ div {
      //드래그한 엘리먼트의 빈자리를 채우지 않도록 드래그한 엘리먼트 아래를 움직이지 않게 해야함
      // => 원래 beautiful dnd에서 밀리거나 움직이는 작용을 없앰
      transform: none !important;
    }
`;