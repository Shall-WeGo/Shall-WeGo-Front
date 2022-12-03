import styled from "styled-components";

export const HeaderComponent = styled.div`
  z-index: 1;
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0 600px 0 100px;
  a {
    text-decoration: none;
    color: #000;
  }
`;
