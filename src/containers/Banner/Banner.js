import {ContainerXS, W50} from "../../assets/styles";
import {SpaceBetween} from "../Header/style";
import {StyledBanner, Text, Title} from "./style";
import Button from "../../components/Button/Button";
import Mac from '../../assets/images/MACBOOK.png'

const Banner = () => {
    return (
        <StyledBanner>
            <ContainerXS>
                <SpaceBetween style={{padding: "150px 0"}}>
                    <W50>
                        <Title>Создайте сайт и запустите онлайн-продажи <span>за час</span></Title>
                        <Text>Аvlo.shop — доступный конструктор интернет-магазинов для предпринимателей из
                            Узбекистана</Text>
                        <Button>
                            Создать магазин
                        </Button>
                    </W50>
                    <W50>
                        <img src={Mac} alt=""/>
                    </W50>
                </SpaceBetween>
            </ContainerXS>
        </StyledBanner>
    )
}
export default Banner