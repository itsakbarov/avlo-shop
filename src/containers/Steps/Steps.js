import {ArrowWrapper, Content, Frame, Sticky, StyledSteps, Title} from "./style";
import {ContainerXS} from "../../assets/styles";
import {Arrow2, Arrow3} from "../../assets/icons";
import Card from '../../components/Card'
import Mac from '../../assets/images/MACBOOK.png'
import FrameImage from '../../assets/images/image 29.png'
import FrameImage1 from '../../assets/images/1.png'
import FrameImage2 from '../../assets/images/Banner1.png'
import {useEffect, useRef, useState} from "react";

const Steps = () => {
    const [offset, setOffset] = useState(200);
    const image = useRef(null)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset <= 2500 && window.pageYOffset >= 1000) {
                setOffset(window.pageYOffset - 800)
            }
        }
        switch (true) {
            case window.pageYOffset <= 1448:
                image.current.src = FrameImage1
                break;
            case window.pageYOffset <= 1940:
                image.current.src = FrameImage2
                break;
            case window.pageYOffset <= 2100:
                image.current.src = FrameImage
                break;
            case window.pageYOffset > 2100:
                image.current.src = Mac
                break;
            default:
                break;
        }
    }, [offset]);

    return (
        <StyledSteps>
            <ContainerXS style={{display: "flex"}}>
                <Content>
                    <Title>
                        Как это работает
                        <span>?</span>
                    </Title>
                    <ArrowWrapper>
                        <Arrow2/>
                    </ArrowWrapper>
                    <Card title={"1 Шаг"}/>
                    <div style={{marginBottom: "65px", paddingLeft: "88px"}}>
                        <Arrow3/>
                    </div>
                    <Card title={"2 Шаг"}/>
                    <div style={{marginBottom: "65px", paddingLeft: "88px"}}>
                        <Arrow2/>
                    </div>
                    <Card title={"3 Шаг"}/>
                    <div style={{marginBottom: "65px", paddingLeft: "88px"}}>
                        <Arrow3/>
                    </div>
                    <Card title={"4 Шаг"}/>
                </Content>
                <Sticky>
                    <Frame>
                        <img ref={image} style={{transform: `translateY(${offset}px)`}} src={Mac} alt=""/>
                    </Frame>
                </Sticky>
            </ContainerXS>
        </StyledSteps>
    );
}
export default Steps