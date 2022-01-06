import OtherCard from "../../components/other-card/otherCard";
import { OtherBlockInner } from "./style";
import { OtherBlock } from "./style";
import { OtherBlockCardBlock } from "./style";
import {ContainerXS} from '../../assets/styles/index'
import Arrow from '../../assets/icons/arrow.svg'
import Ic2 from '../../assets/icons/ic2.svg'
import Ic3 from '../../assets/icons/ic3.svg'
import Ic4 from '../../assets/icons/ic4.svg'
import Ic5 from '../../assets/icons/ic5.svg'
import Ic6 from '../../assets/icons/ic6.svg'


const Other = () => {
    return ( 
        <OtherBlock>
        <ContainerXS>
        <OtherBlockInner>
            <h2 className="title-other">
            Другие <span className="span-other">возможности</span> конструктора 
            </h2>

            <OtherBlockCardBlock>
                <OtherCard
                            img={Arrow}
                            title={'Встроенные инструменты маркетинга'}
                />
                <OtherCard
                    img={Ic2}
                    title={`Помощь в продвижении  бизнеса`}
                />
                <OtherCard
                    img={Ic3}
                    title={`Возможность подключить свой домен`}
                />
                <OtherCard
                    img={Ic4}
                    title={`Адаптивный дизайн для всех  устройств`}
                />
                <OtherCard
                    img={Ic5}
                    title={`Глубокая  аналитика для оптимизации бизнеса`}
                                   />
                <OtherCard
                    img={Ic6}
                    title={`Безопасность персональных  данных`}
                />
            </OtherBlockCardBlock>
        </OtherBlockInner>

        </ContainerXS>
        </OtherBlock>
     );
}
 
export default Other;