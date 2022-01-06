import { Services } from "./services/style";
import { ServicesBottom } from "./services/style";
import { ServicesTop } from "./services/style";
import { ServicesTopRight } from "./services/style";
import { ServicesTopLeft } from "./services/style";
import Man from "../../../assets/images/man.png";
import { ContainerXS } from "../../../assets/styles";
import ServicesCard from "../../../components/homeServicesCard/ServicesCard";
import { Globos } from "../../../assets/icons/index";

const HomeServices = () => {
  return (
    <ContainerXS>
      <Services>
        <ServicesTop>
          <ServicesTopLeft>
            <h2 className="text">
              Почему наш конструктор
              <span className="text_span">
                будет полезен предпринимателям из Узбекистана?
              </span>
            </h2>
            <p lassName="title">
              При разработке конструктора мы учли проблемы, которые мешают нашим
              предпринимателям выходить в онлайн. Вот, что мы можем предложить
            </p>
          </ServicesTopLeft>
          <ServicesTopRight>
            <img className="img" src={Man} alt="" />
          </ServicesTopRight>
        </ServicesTop>
        <ServicesBottom>
          <ServicesCard
            title={"Готовый сайт за цену ужина в кафе"}
            dscription={"Разработка сайта — это очень дорого. Мы же предлагаем полноценный интернет-магазин за 199 000 в месяц"}
          />
          <ServicesCard
            title={"Готовый сайт за цену ужина в кафе"}
            dscription={"Разработка сайта — это очень дорого. Мы же предлагаем полноценный интернет-магазин за 199 000 в месяц"}
          />
          <ServicesCard
            title={"Готовый сайт за цену ужина в кафе"}
            dscription={"Разработка сайта — это очень дорого. Мы же предлагаем полноценный интернет-магазин за 199 000 в месяц"}
          />
          <ServicesCard
            title={"Готовый сайт за цену ужина в кафе"}
            dscription={"Разработка сайта — это очень дорого. Мы же предлагаем полноценный интернет-магазин за 199 000 в месяц"}
          />
          
        </ServicesBottom>
      </Services>
    </ContainerXS>
  );
};

export default HomeServices;
