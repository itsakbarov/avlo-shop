import {Content, Img, StyledStyledOpportunities, Text, Title} from "./style";
import {ContainerXL, ContainerXS} from "../../assets/styles";
import Mac from '../../assets/images/Banner1.png'
import Button from "../../components/Button/Button";

const Opportunities = () => {
    return (
        <StyledStyledOpportunities>
            <ContainerXS style={{display: "flex", justifyContent: "space-between"}}>
                <Img src={Mac}/>
                <Content>
                    <Title>
                        Один аккаунт бесконечных <br/>
                        <span>возможностей</span>
                    </Title>
                    <Text>
                        С помощью сайта, созданного, на avlo.shop вы сможете управлять всеми продажами из одного окна.
                        Для знакомства с основными возможностями, создайте магазин. Это бесплатно
                    </Text>
                    <Button>
                        Создать магазин
                    </Button>
                </Content>
            </ContainerXS>
        </StyledStyledOpportunities>
    )
}
export default Opportunities