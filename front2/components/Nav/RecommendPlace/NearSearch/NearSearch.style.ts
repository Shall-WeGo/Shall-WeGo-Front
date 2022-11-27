import styled from "styled-components";

export const NearSearchContainer = styled.div`
  padding: 24px;
  width: 374px;
  height: 140px;
  border-bottom: 0.5px solid #cccccc;
  h2 {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #1f1f1f;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #eeeeee;
  border-radius: 12px;
`;

export const TagList = styled.div`
  width: 330px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const TagNameIconContainer = styled.div`
  cursor: pointer;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.0024em;

    color: #cccccc;
  }
`;
