import styled from "styled-components";

export const Popup = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #000;
`;

export const Wrapper = styled.div`
  padding: 43px 41px 47px;
  width: 366px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-bottom: 34px;
  align-self: center;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 8px 0;
  border: 0;
  border-bottom: 1px solid #d0cece;
  outline: none;
  font-family: "Stratos", sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: #000;

  &::placeholder {
    color: #d0cece;
  }
`;

export const Info = styled.div`
  margin-top: 10px;
  min-height: 50px;
  color: red;
`;

export const Button = styled.button`
  &.primary {
    background-color: #580ea2;
    border-radius: 6px;
    border: 0;
    padding: 10px;
    height: 52px;
    font-family: "Stratos", sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: #fff;

    &:hover {
      background-color: #3f007d;
    }

    &:active {
      border-color: #271a58;
    }
  }

  &.transparent {
    background-color: #fff;
    border: 1px solid #d0cece;
    border-radius: 6px;
    padding: 10px;
    height: 52px;
    font-family: "Stratos", sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: #000;

    &:hover {
      background-color: #f4f5f6;
    }

    &:active {
      background-color: #d9d9d9;
    }
  }
`;
