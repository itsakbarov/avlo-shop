
import { OtherCardInner } from "./style";
import { OtherCardIcon } from "./style";

const OtherCard = ({img, title, description, classes}) => {
  return (
    <OtherCardInner>
      <OtherCardIcon>
        <img src={img} className="img" alt="" />
      </OtherCardIcon>
      <h6 className={`title ${classes}`}>{title}</h6>
      <p className="otherCardDescription">{description}</p>
    </OtherCardInner>
  );
};

export default OtherCard;
