import {CardContent, CardText, CardTitle, StyledCard} from "./style";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {logDOM} from "@testing-library/react";

const Card = ({title}) => {
    const [ref, inView] = useInView({
        threshold: 1,
    })

    useEffect(()=> {
        console.log(inView + ' '  + title)
    },[inView])

    return (
        <StyledCard ref={ref} inView={inView}>
            <CardTitle>{title}</CardTitle>
            <CardText>Настройте магазин
            </CardText>
            <CardContent>Загрузите обложку, добавьте товары, укажите способы оплаты и доставки. Ваш магазин
                готов</CardContent>
        </StyledCard>
    )
   
}
export default Card