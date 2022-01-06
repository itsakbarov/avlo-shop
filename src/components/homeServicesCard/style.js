import styled from "styled-components";

export const ServicesCardInner = styled.div`
  /* display: flex; */
  width:20%;
  align-items:flex-start;
  margin:30px 18px;
  .icons {
    
    display: block;
  }
`;

export const ServicesCardRight = styled.div`
  .title {
    margin:30px 0 0 0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    color: #000;
  }
  .description {
    margin:20px 0 0 0 ;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    margin-top: 15px;
  }
`;

export const ServicesCardIcon = styled.div`
  padding:15px;
  background:#FFECE6;
  width:50px;
  height:50px;
  border-radius:50%;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
`