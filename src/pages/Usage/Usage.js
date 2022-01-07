import { ContainerXL, ContainerXS } from "../../assets/styles";
import Button from "../../components/Button/Button";
import { UsageBlock, UsageBlockBanner, UsageBlockInner } from "./style";
import { Arrow, ArrowTop } from "../../assets/icons";

const Usage = () => {
  return (
    <ContainerXL>
        <UsageBlock>
      <UsageBlockBanner>
        <h2 className="usage-banner_text"> Условия <span className="usage-banner_extratext banner_extratext">использования</span>
        </h2>
      </UsageBlockBanner>
      <ContainerXS>
          <UsageBlockInner>
        <p className="usage_block_description">
          Sed quis ante vel leo semper mollis. Nulla enim lorem, egestas eu
          interdum et, rhoncus ac velit. Sed orci lacus, pharetra eget pharetra
          eu, tristique eget turpis. In hac habitasse platea dictumst. Nam
          lobortis elementum nunc non tempus. Aenean vel aliquam neque. Nulla
          posuere felis mi, convallis consequat ex consequat quis. Phasellus
          luctus ultricies tincidunt. Curabitur volutpat ipsum enim. Mauris eget
          enim lorem. Vestibulum ut dapibus purus.
          <p className="usage_block_description">
            Aliquam quis semper mauris. Ut tincidunt justo leo, quis aliquam
            risus commodo aliquet. Aenean quis facilisis nisi. Phasellus diam
            purus, sagittis sit amet suscipit et, fringilla id ex. Nulla id
            laoreet ligula. Fusce consectetur viverra sem porta faucibus. Nam
            vitae risus vitae nisi cursus efficitur. Vestibulum aliquet pharetra
            elit, eget aliquet felis commodo a. Fusce at nisl in tellus porta
            vestibulum id quis nibh. Donec placerat sollicitudin facilisis.
            Suspendisse commodo, nunc ac dapibus maximus, lacus felis auctor ex,
            at viverra lorem urna sit amet sapien
          </p>
        </p>
        <p className="usage_block_description">
          Fusce nec lorem varius, bibendum metus nec, ultricies magna. Nulla
          eget vehicula dui. Phasellus facilisis nulla quis sagittis facilisis.
          Curabitur ullamcorper, magna sit amet tempus finibus, est augue
          ullamcorper lorem, vestibulum laoreet arcu odio nec nibh. Nulla
          euismod eu tellus eu efficitur. Etiam tellus ante, feugiat sed tortor
          ac, consequat tempor eros. Nulla pretium viverra tellus, et ultrices
          arcu semper eu. Fusce posuere finibus dignissim. In hac habitasse
          platea dictumst. Maecenas est est, egestas et lorem eget, semper
          tristique leo. Ut et commodo tortor. Etiam tincidunt nibh imperdiet
          elit convallis, vel rhoncus odio lacinia. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <p className="usage_block_description">
          Nulla sagittis suscipit arcu in congue. Mauris justo metus, maximus in
          porta tempus, pharetra eu mauris. Vivamus placerat erat in aliquam
          blandit. Phasellus tincidunt purus id sem sollicitudin, a tristique
          ante rhoncus. Cras gravida sodales purus in bibendum. Vivamus eget
          accumsan nunc. Pellentesque tempus ex vitae augue consectetur posuere.
        </p>
      </UsageBlockInner>
      </ContainerXS>
      <UsageBlockBanner>
        <h2 className="usage-banner_extratext">Начните свой бизнес вместе с нами <span className=" usage-banner_text">прямо сейчас!</span>
        </h2>
        <div className="usage_block_btn">
            <Button>
                Создать магазин
            </Button>
            
        </div>
        <div className="arrow-top">
                <ArrowTop/>
            </div>
      </UsageBlockBanner>
    </UsageBlock>
    </ContainerXL>
  );
};

export default Usage;
