import {ArrowWrapper, Card, CardContent, CardText, CardTitle, Content, StyledSteps, Title} from "./style";
import {ContainerXS} from "../../assets/styles";
import {Arrow2, Arrow3} from "../../assets/icons";

const Steps = () => {
    return (
        <StyledSteps>
            <ContainerXS>
                <Content>
                    <Title>
                        Как это работает
                        <span>?</span>
                    </Title>
                    <ArrowWrapper>
                        <Arrow2/>
                    </ArrowWrapper>
                    <Card>
                        <CardTitle>1 Шаг</CardTitle>
                        <CardText>Зарегистрируйтесь</CardText>
                        <CardContent>Введите номер телефона и подтвердите регистрацию с помощью sms-кода</CardContent>

                    </Card>
                    <div style={{marginBottom: "65px", paddingLeft: "88px"}}>
                        <Arrow3/>
                    </div>
                    <Card>
                        <CardTitle>2 Шаг</CardTitle>
                        <CardText>Создайте магазин
                        </CardText>
                        <CardContent>Напишите название магазина, выберете категорию и загрузите логотип. Ваш магазин
                            создан, теперь его нужно настроить</CardContent>
                    </Card>
                    <div style={{marginBottom: "65px", paddingLeft: "88px"}}>
                        <Arrow2/>
                    </div>
                    <Card>
                        <CardTitle>3 Шаг</CardTitle>
                        <CardText>Настройте магазин
                        </CardText>
                        <CardContent>Загрузите обложку, добавьте товары, укажите способы оплаты и доставки. Ваш магазин
                            готов</CardContent>
                    </Card>
                    <div style={{marginBottom: "65px", paddingLeft: "88px"}}>
                        <Arrow3/>
                    </div>
                    <Card>
                        <CardTitle>4 Шаг</CardTitle>
                        <CardText>Поделитесь ссылкой
                        </CardText>
                        <CardContent>Разместите ссылку на сайт в соцсетях, мессенджерах и поисковиках, чтобы привлечь
                            покупателей</CardContent>
                    </Card>
                </Content>
            </ContainerXS>
        </StyledSteps>
    );
}
export default Steps