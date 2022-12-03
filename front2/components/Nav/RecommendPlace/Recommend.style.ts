import styled from "styled-components";

export const PlaceContainer = styled.div`
  width: 374px;
  height: 60px;
  background: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.0024em;
  color: #1f1f1f;
`;

export const Container = styled.div`
  height: 533px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Button = styled.button``;

export const PlaceButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

export const SaveContainer = styled.div`
  display: flex;
  a {
    text-align: center;
    padding: 8px;
    cursor: pointer;
    width: 68px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    text-decoration: none;
    color: #000;
  }
`;

export const SaveSVG = styled.div`
  margin-right: 5px;
  cursor: pointer;
`;
