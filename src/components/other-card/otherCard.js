
import { OtherCardInner } from "./style";
import { OtherCardIcon } from "./style";

const OtherCard = ({img, title, description}) => {
  return (
    <OtherCardInner>
      <OtherCardIcon>
        <img src={img} className="img" alt="" />
      </OtherCardIcon>
      <h6 className="title">{title}</h6>
    </OtherCardInner>
  );
};

export default OtherCard;
