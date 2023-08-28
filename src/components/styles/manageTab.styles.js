import { styled } from "styled-components";

export const StyledManagedTab = styled.div`
  display: block;
  position: absolute;
  top: 100px;
  left: 100px;
  width: 400px;
  height: 300px;
  z-index: 100;
  border: 0;
  border-radius: 10px;
  background-color: white;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f3f4;
  margin: -10px;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  span {
    font-size: 21px;
    color: rgb(60, 64, 67);
    font-weight: 450;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Task = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  label {
    width: 100%;
    margin-bottom: 25px;
  }

  input {
    background-image: linear-gradient(#1967d2, #1967d2),
      linear-gradient(#bfbfbf, #bfbfbf);
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
    float: none;
    background-color: transparent;
    background-position: center bottom, center calc(100% - 1px);
    background-repeat: no-repeat;
    background-size: 0 2px, 100% 1px;
    padding: 0;
    transition: background 0s ease-out 0s;
    min-height: 35px;
    display: initial;
    width: 85%;
    outline: none;
    font-size: 18px;
    &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
    &::placeholder {
      font-size: 24px;
    }
  }
  textarea {
    margin-left: 10px;
    background-image: linear-gradient(#1967d2, #1967d2),
      linear-gradient(#bfbfbf, #bfbfbf);
    border: 0 none;
    border-radius: 3px;
    box-shadow: none;
    float: none;
    background-color: #f1f3f4;
    background-position: center bottom, center calc(100% - 1px);
    background-repeat: no-repeat;
    background-size: 0 2px, 100% 1px;
    padding: 0;
    transition: background 0s ease-out 0s;
    display: initial;
    outline: none;
    font-size: 12px;
    resize: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-y: visible;
    overflow-x: hidden;
    width: 85%;
    min-height: 100px;
    &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
    &::placeholder {
      font-size: 15px;
      padding: 3px;
    }
  }

  button {
    background-color: #1967d2;
    color: white;
    border: 0;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 15px;
    &:hover {
      background-color: #1b66c9;
    }
  }
`;

export const DescriptionImage = styled.img`
  position: absolute;
  top: 125px;
  left: 15px;
  width: 20px;
  height: 20px;
`;
