import styled from "styled-components";

export const ServicesCardInner = styled.div`
  display: flex;
  width:30%;
  align-items:flex-start;
  margin:30px 18px;
  .icons {
    margin-right: 25px;
  }
`;

export const ServicesCardRight = styled.div`
  .title {
    margin:0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    color: #000;
  }
  .description {
    margin:0;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    margin-top: 15px;
  }
`;
