import {ContainerXS, W50} from "../../assets/styles";
import {SpaceBetween} from "../Header/style";
import {ArrowHolder, StyledBanner, Text, Title} from "./style";
import Button from "../../components/Button/Button";
import Mac from '../../assets/images/MACBOOK.png'
import {Arrow} from '../../assets/icons'

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
                    <W50 style={{position: "relative"}}>
                        <img src={Mac} alt=""/>
                        <ArrowHolder>
                            <Arrow/>
                        </ArrowHolder>
                    </W50>
                </SpaceBetween>
            </ContainerXS>
        </StyledBanner>
    );
}
export default Banner