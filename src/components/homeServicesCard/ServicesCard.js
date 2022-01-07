import { ServicesCardInner } from "./style";
import { ServicesCardIcon } from "./style";



import { ServicesCardRight } from "./style";
import {Globos} from '../../assets/icons/index'
const ServicesCard = ({title, dscription,img}) => {
    return ( 
        <ServicesCardInner>
            <ServicesCardIcon>
                <span className="icons"><Globos /></span>
            </ServicesCardIcon>
            <ServicesCardRight>
                <h6 className="title">{title}</h6>
                <p className="description">{dscription}</p>
            </ServicesCardRight>
        </ServicesCardInner>
     );
}
 
export default ServicesCard;