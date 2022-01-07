import styled from "styled-components";

export const OtherBlock = styled.div`
background: #FFECE6;
border-radius: 50px;
padding: 150px;
margin-top: 150px;
&.noMargin {
    margin-top: 0;
}
`
export const OtherBlockInner = styled.div`
.title-other {
    font-style: normal;
font-weight: 800;
font-size: 70px;
line-height: 70px;
text-align: center;
color: #000000;
max-width:800px;
margin:auto;
}


.span-other {
    color:#FF3D00;
}

`
export const OtherBlockCardBlock = styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-top: 50px;
    
`