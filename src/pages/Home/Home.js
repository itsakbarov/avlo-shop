import { StyledHome} from "./style";
import {ContainerXL, ContainerXS} from "../../assets/styles";
import Header from "../../containers/Header";
import Banner from "../../containers/Banner";
import HomeServices from '../../containers/Header/homepage/homeServices'
import Other from "../../containers/other/other";
import Button from "../../components/Button/Button";
import { DarkBlock } from "./style";
import Rate from "../../components/home-rate/rate";
import { RateDiv } from "./style";
import { RateBlock } from "./style";
import Steps from "../../containers/Steps";
import RightNowBlock from "../../containers/home-right-now/rightNow";

const Home = () => {
    return (
        <StyledHome>
            <ContainerXL>
                <Banner/>
                <Steps/>
            </ContainerXL>
            <ContainerXS>
                <HomeServices/>
            </ContainerXS>
            <ContainerXS>
                <DarkBlock>
                    <h2 className="dark-block-title">Некоторые функции доступны только на тарифе <span className="dark-block-span">Бизнес</span></h2>
                    <div className="dark-block-btn">
                        <Button>Посмотреть тарифы</Button>
                    </div>
                </DarkBlock>
            </ContainerXS>
            <ContainerXL>
                <Other/>
            </ContainerXL>
            <ContainerXS>
                <RateDiv>
                <h2 className="rate-div-text">Тарифы</h2>
                        <RateBlock>
                            <Rate
                                title={'Старт'}
                                extraText={'Бесплатно'}
                                description={'Отличная возможность для тестирования платформы и быстрого старта онлайн-продаж. Доступны все основные инструменты'}
                                classBlackBtn={'black-btn'}
                            />
                            <Rate
                                title={'Business'}
                                extraText={'199 000 сум /'}
                                description={'Отличная возможность для тестирования платформы и быстрого старта онлайн-продаж. Доступны все основные инструменты'}
                                clasRate={'rate-red'}
                                extraTextMini={'в МЕСЯЦ'}
                            />
                        </RateBlock>
                </RateDiv>
            </ContainerXS>
            <ContainerXL>
                <RightNowBlock/>
            </ContainerXL>
        </StyledHome>
    )
}
export default Home