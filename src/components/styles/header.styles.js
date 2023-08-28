import { styled } from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 64px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  p {
    font-size: 24px;
    color: rgb(60, 64, 67);
    font-weight: 450;
    margin: 10px 2px;
  }
`;

export const Hamburger = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

export const CalenderYear = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 4px;
`;

export const CenterNav = styled.div`
  display: flex;
  align-items: center;
  width: 72%;
  justify-content: space-between;
`;

export const LeftCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const DivBox = styled.div`
  border: 1px solid rgb(218, 220, 224);
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 20px;

  img {
    width: 12px;
    height: 12px;
    margin-left: 3px;
  }
`;

export const Span = styled.span`
  color: rgb(60, 64, 67);
  font-weight: 400;
  /* padding: 15px; */
`;

export const MonthBackward = styled.img`
  width: 28px;
  height: 28px;
`;
export const MonthForward = styled.img`
  transform: scaleX(-1);
  width: 28px;
  height: 28px;
`;

export const Month = styled.div`
  font-size: 22px;
  color: rgb(60, 64, 67);
  font-weight: 475;
  display: flex;
  align-items: center;
  margin-left: 18px;

  img {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

export const RightCenter = styled.div`
  display: flex;
  margin-right: 21px;
  align-items: center;

  > div {
    margin-right: 15px;
  }
  :first-child {
    margin-right: 5px;
  }
`;

export const Search = styled.div`
  img {
    width: 45px;
    height: 45px;
  }
`;
export const Support = styled.div`
  img {
    width: 32px;
    height: 32px;
  }
`;
export const Setting = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;

  :first-child {
    width: 24px;
    height: 24px;
  }
  :last-child {
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 50%;
    margin-left: 18px;
  }
`;
