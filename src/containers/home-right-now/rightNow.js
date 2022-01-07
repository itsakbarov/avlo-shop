import Button from "../../components/Button/Button";
import { RightNowWrapper } from "./style";

const RightNowBlock = () => {
    return ( 
            <RightNowWrapper>
                <h2 className="right_now_title">Начните свой бизнес вместес нами <span className="right_now_span">прямо сейчас !</span></h2>
                <div className="right_now_btn_block">
                    <Button>Создать магазин</Button>
                </div>
            </RightNowWrapper>
     );
}
 
export default RightNowBlock;