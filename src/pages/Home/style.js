import styled from "styled-components";

export const StyledHome = styled.div`
`
export const DarkBlock = styled.div`
background: #000000;
border-radius: 40px;
padding:60px;
margin-top: 100px;
.dark-block-title {
 font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 60px;
text-align: center;
color: #FFFFFF;
max-width:80%;
margin:0 auto 60px auto;
}

.dark-block-span {
    color:#FF3D00;
}

.dark-block-btn {
    display: flex;
    justify-content:center;
}
`

export const RateBlock = styled.div`
    display: flex;
    margin-top: 83px;
    justify-content:space-between;
    align-items:center;
`

export const RateDiv = styled.div`
    margin-top: 150px;

    .rate-div-text {
        font-style: normal;
        font-weight: 800;
        font-size: 70px;
        line-height: 70px;
        text-align: center;
        color: #000000;
    }
`
