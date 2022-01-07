import Rate from "../../components/home-rate/rate";
import { Wrapper } from "./style";
import { WrapperBanner } from "./style";
import { ContainerXL, ContainerXS } from "../../assets/styles";

const RatePage = () => {
  return (
    <ContainerXL>
      <Wrapper>
        <WrapperBanner>
          <h2 className="rate-page_text">
            Тарифы <span className="rate-page_span">аvlo</span>
          </h2>
          <p className="rate-page_description">
            Мы предлагаем гибкие тарифы, которые можно персонализироват
            дополнительными услугами. Ознакомьтесь со всеми возможностями и
            соберите свой конструктор
          </p>
        </WrapperBanner>
        <ContainerXS>
          <div className="rate-page-block">
            <Rate
              title={"Старт"}
              extraText={"Бесплатно"}
              description={
                "Отличная возможность для тестирования платформы и быстрого старта онлайн-продаж. Доступны все основные инструменты"
              }
              classBlackBtn={"black-btn"}
              listText={"Полнофункциональный интернет-магазин"}
              extraClassess={'disabled'}
            />
            <Rate
              title={"Business"}
              extraText={"199 000 сум /"}
              description={
                "Отличная возможность для тестирования платформы и быстрого старта онлайн-продаж. Доступны все основные инструменты"
              }
              clasRate={"rate-red"}
              extraTextMini={"в МЕСЯЦ"}
              listText={"Полнофункциональный интернет-магазин"}
            />
          </div>
        </ContainerXS>
      </Wrapper>
    </ContainerXL>
  );
};
export default RatePage;
