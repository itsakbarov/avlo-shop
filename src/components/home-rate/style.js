import styled from "styled-components";

export const RateCard = styled.div`
  width: 45%;
`;
export const RateCardTop = styled.div`
  background: #000000;
  border-radius: 0px 40px 0px 0px;
  padding: 31px 47px;
  box-sizing: border-box;
  &.rate-red {
    background: red;
    border-radius: 0px 40px 0px 0px;
    padding: 31px 47px;
    box-sizing: border-box;
  }

  .rate-card-text {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    color: #ffffff;
    
  }

  .span-block-rate {
      display: flex;
      align-items:flex-end;
  }

  .rate-card-span {
    margin: 0;
    font-weight: normal;
    display: block;
    margin-top: 10px;
  }

  .extraTextMini {
      font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #fff;
    margin-bottom: 8px;
  }
`;
export const RateCardBottom = styled.div`
  background: #ffffff;
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 0px 0 0 40px;
  padding: 31px 47px;
  box-sizing: border-box;

  &.rate-red {
    border: 4px solid red;
  }

  
`;

export const RateCardBottomInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
  .rate-card-link {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    color: #ff3d00;
  }

  .black-btn {
      background:black !important;
      &:before {
          border: 3px solid #000;
      }
  }
`;
