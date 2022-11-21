import styled, { css } from "styled-components";

interface propsType {
  isSelectSearchBtn: Boolean;
}
const selectBtn = css`
  width: 151px;
  height: 42px;
  color: #fff;
  background: #5fc970;
  border: 1px solid #5fc970;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const notSelectBtn = css`
  width: 151px;
  height: 42px;
  color: #5fc970;
  background: #ffffff;
  border: 1px solid #5fc970;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const BtnContainer = styled.div``;

export const SearchBtn = styled.button<propsType>`
  ${(props) => (props.isSelectSearchBtn ? `${selectBtn}` : `${notSelectBtn}`)};

  margin: 24px 24px 0 0;
`;
export const MyBtn = styled.button<propsType>`
  ${(props) => (props.isSelectSearchBtn ? `${notSelectBtn}` : `${selectBtn}`)};
`;
