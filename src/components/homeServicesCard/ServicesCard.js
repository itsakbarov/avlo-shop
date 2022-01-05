import { ServicesCardInner } from "./style";

import { ServicesCardRight } from "./style";
import {Globos} from '../../assets/icons/index'
const ServicesCard = ({title, dscription,img}) => {
    return ( 
        <ServicesCardInner>
            <span className="icons"><Globos/></span>
            <ServicesCardRight>
                <h6 className="title">{title}</h6>
                <p className="description">{dscription}</p>
            </ServicesCardRight>
        </ServicesCardInner>
     );
}
 
export default ServicesCard;