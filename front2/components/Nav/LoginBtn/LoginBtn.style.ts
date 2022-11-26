import styled from "styled-components";

export const Button = styled.button`
  z-index: 999;
  position: absolute;
  width: 100px;
  height: 40px;
  right: 50px;
  top: 24px;
  color: #5fc970;
  background: #ffffff;
  border: 1px solid #5fc970;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  a {
    width: 100px;
    height: 40px;
    color: #5fc970;
    text-decoration: none;
  }
  &:hover {
    background: #5fc970;
    a {
      color: #ffffff;
    }
  }
`;
