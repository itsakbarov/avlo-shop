import {ContainerXS, W50} from "../../assets/styles";
import {SpaceBetween} from "../Header/style";
import {ArrowHolder, StyledBanner, Text, Title} from "./style";
import Button from "../../components/Button/Button";
import {Arrow} from '../../assets/icons'
import {useEffect, useState} from "react";
import Background from '../../assets/images/Banner1.png'

const Banner = () => {


    return (
        <StyledBanner>
            <ContainerXS>
                <SpaceBetween style={{padding: "150px 0"}}>
                    <W50 style={{maxWidth: "619px"}}>
                        <Title>Создайте сайт и запустите онлайн-продажи <span>за час</span></Title>
                        <Text>Аvlo.shop — доступный конструктор интернет-магазинов для предпринимателей из
                            Узбекистана</Text>
                        <Button>
                            Создать магазин
                        </Button>
                    </W50>
                    <W50 style={{position: "absolute", right: 0}}>
                        <img src={Background} alt=""/>

                    </W50>
                </SpaceBetween>
            </ContainerXS>
        </StyledBanner>
    );
}
export default Banner