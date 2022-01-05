import { StyledHome} from "./style";
import {ContainerXL} from "../../assets/styles";
import Header from "../../containers/Header";
import Banner from "../../containers/Banner";

const Home = () => {
    return (
        <StyledHome>
            <ContainerXL>
               <Header />
                <Banner />
            </ContainerXL>
        </StyledHome>
    )
}
export default Home