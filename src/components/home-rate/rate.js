import Button from '../Button/Button'
import { RateCardTop } from './style';
import { RateCardBottom } from './style';
import { RateCardBottomInner } from './style';
import { RateCard } from './style';

const Rate = ({title, extraText, description,clasRate, extraTextMini}) => {
    return ( 
        <RateCard>
            <RateCardTop className={clasRate}>
                <h2 className="rate-card-text">{title} <div className="span-block-rate"><span className="rate-card-span">{extraText}</span> <span className="extraTextMini">{extraTextMini} </span></div> </h2>
            </RateCardTop>
            <RateCardBottom className={clasRate}>
            <p className="rate-card-description">{description}</p>
                <RateCardBottomInner>
                    <Button>Выбрать Старт</Button>
                    <a href="" className="rate-card-link">Подробнее...</a>
                </RateCardBottomInner>
            </RateCardBottom>
        </RateCard>
     );
}
 
export default Rate;