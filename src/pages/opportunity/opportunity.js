import { ContainerXL, ContainerXS } from "../../assets/styles";
import HomeServices from "../../containers/Header/homepage/homeServices";
import Other from "../../containers/other/other";
import { OpportunityBlock } from "./style";
import { PurPurBlock } from "./style";
import Button from "../../components/Button/Button";
const Opportunity = () => {
  return (
    <ContainerXL>
      <OpportunityBlock>
        <Other
          noMargin={"noMargin"}
          twoTitle={"конструктора"}
          extraTitle={"Возможности"}
          description={
            "В диджитал-маркетинге мы собаку съели, поэтому подскажем, какие инструменты эффективнее использовать именно в вашем случае. Дополнительно, к вашим услугам — базовый маркетинговый план, который расскажет об основных принципах продвижения интернет-магазинов"
          }
          classes={"title_left"}
        />
      </OpportunityBlock>

      <HomeServices />
      <ContainerXS>
        <PurPurBlock>
          <h2 className="purpur-block-title">
            Некоторые функции доступны только на тарифе{" "}
            <span className="purpur-block-span">Бизнес</span>
          </h2>
          <div className="purpur-block-btn">
            <Button>Посмотреть тарифы</Button>
          </div>
        </PurPurBlock>
      </ContainerXS>
    </ContainerXL>
  );
};

export default Opportunity;
