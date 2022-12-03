import styled from "styled-components";

interface styledProps {
  isOpenNav: Boolean;
}
export const CloseBtnContainer = styled.div<styledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  left: ${(props) => (props.isOpenNav ? "0px" : "372px")};
  top: 430px;
  width: 18px;
  height: 40px;
  background: ${(props) => props.theme.background};
  border-radius: 0px 8px 8px 0px;
`;
