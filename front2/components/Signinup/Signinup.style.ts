import styled from "styled-components";

export const GreenBackGround = styled.div`
  position: absolute;
  width: 930px;
  height: 1546px;
  right: -200px;
  top: -550px;
  background: #5fc970;
  transform: rotate(-42.28deg);
`;

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const TitleInputContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 350px;
  width: 380px;
  height: 424px;
`;

export const ImgContainer = styled.div`
  z-index: 999;
  top: 200px;
  position: absolute;
  right: 350px;
`;
export const Title = styled.h1`
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;

  color: #1f1f1f;
  span {
    color: #5fc970;
  }
`;
