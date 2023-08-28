import React from "react";
import {
  CalenderYear,
  CenterNav,
  DivBox,
  Hamburger,
  LeftCenter,
  LeftNav,
  MonthBackward,
  MonthForward,
  StyledHeader,
  Month,
  RightCenter,
  Search,
  Support,
  Setting,
  Span,
  RightNav,
} from "./styles/header.styles";

const Header = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <StyledHeader>
      <LeftNav>
        <Hamburger
          src="./images/hamburger-menu-icon.png"
          alt="Hamburger Menu"
        />
        <CalenderYear
          src="./images/calender-year-icon.png"
          alt="Calender Year"
        />
        <p>Calender</p>
      </LeftNav>
      <CenterNav>
        <LeftCenter>
          <DivBox>
            <Span>Today</Span>
          </DivBox>
          <MonthBackward
            src="./images/month-change-icon.png"
            alt="MonthBackward"
          />
          <MonthForward
            src="./images/month-change-icon.png"
            alt="MonthForward"
          />
          <Month>
            <p>
              {month} {year}
            </p>
            <img src="./images/dropdown-icon.png" alt="Dropdown" />
          </Month>
        </LeftCenter>
        <RightCenter>
          <Search>
            <img src="./images/search-icon.png" alt="Search" />
          </Search>
          <Support>
            <img src="./images/support-icon.png" alt="Support" />
          </Support>
          <Setting>
            <img src="./images/setting-icon.png" alt="Settings" />
          </Setting>
          <DivBox>
            <Span>Month</Span>
            <img src="./images/dropdown-icon.png" alt="Dropdown" />
          </DivBox>
        </RightCenter>
      </CenterNav>
      <RightNav>
        <img src="./images/dots-nine-bold.svg" alt="Other Google Apps" />
        <img src="./images/account-icon.png" alt="Account Photo" />
      </RightNav>
    </StyledHeader>
  );
};

export default Header;
