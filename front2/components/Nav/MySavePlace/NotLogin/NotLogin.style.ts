import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 650px;
  align-items: center;
`;

export const Text = styled.h3`
  width: 333px;
  height: 52px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  color: #1f1f1f;
`;
export const TextLoginContainer = styled.div`
  text-align: center;
`;
export const LoginBtn = styled.button`
  margin-top: 28px;
  width: 120px;
  height: 40px;
  border: 1px solid #5fc970;
  background-color: #fff;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 15px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #5fc970;
  }
`;
