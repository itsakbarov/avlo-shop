import { Services } from "./services/style";
import { ServicesBottom } from "./services/style";
import { ServicesTop } from "./services/style";
import { ServicesTopRight } from "./services/style";
import { ServicesTopLeft } from "./services/style";
import Man from '../../../assets/images/man.png'

const HomeServices = () => {
  return (
    <Services>
      <ServicesTop>
        <ServicesTopLeft>
          <h2 className="text">
            Почему наш конструктор
            <span className="text_span"> будет полезен  предпринимателям из Узбекистана?</span>
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
      <ServicesBottom></ServicesBottom>
    </Services>
  );
};

export default HomeServices;
