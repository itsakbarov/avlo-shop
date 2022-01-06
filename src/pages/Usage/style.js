import styled from "styled-components";

export const UsageBlock = styled.div``;

export const UsageBlockBanner = styled.div`
  background: #ffece6;
  border-radius: 50px;
  padding: 150px;
  position: relative;

  .arrow-top {
     position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .usage-banner_text {
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 70px;
    text-align: center;
    color: #ff3d00;
  }

  .usage-banner_extratext {
    color: #000;
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 70px;
    text-align:center;
    max-width:1060px;
    margin-left:auto;
    margin-right:auto;
  }

  .banner_extratext {
    display: block;
  }

  .usage_block_btn {
      display: flex;
      justify-content:center;
      margin-top: 44px;
  }
`;

export const UsageBlockInner = styled.div`

margin:100px 0;

.usage_block_description {
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
margin:30px auto;
max-width:600px;
color: #000000;
}
`
