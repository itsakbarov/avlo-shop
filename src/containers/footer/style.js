import styled from "styled-components";

export const FooterBlock = styled.div`
  background: black;
  padding: 100px 0 46px 0;
`;

export const FooterBlockInner = styled.div``;
export const FooterBlockInnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ul {
    margin: 0;
    padding: 0;
  }

  .footer_block_title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  .footer_block_link {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #999999;
    margin: 5px 0;
    transition: all ease 0.3s;
    &:hover {
      color: #fff;
    }
  }

  .footer_block_address {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #999999;
    max-width: 180px;
    margin-top: 24px;
  }
`;
export const FooterBlockInnerBottom = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 132px;
    padding-bottom: 37px;

    .social_link {
        margin-left:15px;
       fill:white;
       width:40px;
       height:40px;
       border:1px solid white;
       border-radius: 50%;
       display:inline-block;
       &:hover {
           .social_facebook {
            fill:#1671E7;
           }
           .social_twitter {
            fill:#1671E7;
           }
           .social_youtube {
            fill:red;
           }
           .social_instagram {
            fill:#CA2588;
           }
            
        }
       
    }

    .social_icon {
        fill:white;
        width:20px;
        height:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:10px auto;
        transition:all ease 0.3s;
        
    }
`;
export const FooterBlockWrapper = styled.div`
border-top:2px solid #ffffff1c;
padding-top: 30px;
justify-content:space-between;
align-items:center;
display: flex;
.copy_right {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    color: #FFFFFF;
    opacity: 0.6;
}

.footer_language {
    border:none;
    background: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    cursor: pointer;
}
`;
