import styled from "styled-components";

export const InputDiv = styled.div`
  text-align: center;
  width: 380px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;
export const Input = styled.input`
  width: 340px;
  height: 48px;
  border: none;
  outline: none;
`;

export const LoginButton = styled.button`
  color: #fff;
  width: 380px;
  height: 48px;
  background: #5fc970;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  width: 380px;
  height: 240px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.0024em;
    color: #a6a6a6;
    margin-right: 5px;
  }
`;

export const ATagContainer = styled.div`
  display: flex;
`;
