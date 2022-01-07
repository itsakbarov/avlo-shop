import React from 'react'
import {ContainerXS, W50} from "../../assets/styles";
import { StyledBanner, Text, Title,SpaceEvenly,Img1,Img2} from "./style";
import mask from '../../assets/images/Mask.png'
import Logo from '../../assets/images/LOGO.png'
 
const BannerAbout = () => {
    return (
        <StyledBanner>
            <ContainerXS>
                <SpaceEvenly style={{padding: "85px 0"}}>
                    <W50 style={{maxWidth: "488px"}}>
                        <Title> <span>О</span>компании</Title>
                        <Text>Avlo.shop — доступный веб-конструктор для самостоятельного создания интернет-магазинов и продвижения бизнеса онлайн. 
                            
                                Мы хотим, чтобы предприниматели в нашем регионе поверили в силу электронной коммерции
                                </Text>
                    </W50>
                    <W50 style={{position: "relative"}}>
                        <Img1 src={Logo} alt=""/>
                        <Img2 src={mask} alt=""/>
                    </W50>
                </SpaceEvenly>
            </ContainerXS>
        </StyledBanner>

            
    )
}

export default BannerAbout