import { styled } from "styled-components";

export const StyledMain = styled.div`
  border-top: 1px solid rgb(218, 220, 224);
  height: 100%;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

export const MainDaysDiv = styled.div`
  margin-left: 7px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const MainDatesDiv = styled.div`
  margin-left: 7px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.div`
  border-left: 1px solid rgb(218, 220, 224);
  padding-top: 7px;
  color: #70757a;
`;
export const Date = styled.div`
  border-bottom: 1px solid rgb(218, 220, 224);
  border-left: 1px solid rgb(218, 220, 224);
  padding: 7px 45px 84px 45px;
  color: rgb(60, 64, 67);
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskTitle = styled.div`
  background-color: #1967d2;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: -75px 1.5px;
  width: 180px;
  border: 0;
  border-radius: 5px;
  height: 21px;

  &:hover {
    background-color: #1b66c9;
  }

  p {
    color: white;
    padding: 4px 5px;
    margin: auto;
    text-align: left;
  }
`;

// export const SidePlus = styled.div`

// `
