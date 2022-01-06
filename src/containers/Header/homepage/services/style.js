import styled from "styled-components";

export const Services = styled.div`
  margin-top: 140px;
`;
export const ServicesTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    font-style: normal;
    font-weight: 800;
    font-size: 65px;
    line-height: 70px;
    color: #ff3d00;
    .text_span {
      color: #000;
      display: block;
    }
  }

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin-top: 24px;
    color: #000000;
  }
`;
export const ServicesBottom = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
`;
export const ServicesTopLeft = styled.div`
  width: 45%;
`;
export const ServicesTopRight = styled.div`
  width: 45%;
  .img {
    border-radius: 10px;
  }
`;
