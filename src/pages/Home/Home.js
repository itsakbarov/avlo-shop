import {StyledHome} from "./style";
import {ContainerXL} from "../../assets/styles";
import Header from "../../containers/Header";
import Banner from "../../containers/Banner";
import Steps from "../../containers/Steps";

const Home = () => {
    return (
        <StyledHome>
            <ContainerXL>
                <Header/>
                <Banner/>
                <Steps/>
            </ContainerXL>
        </StyledHome>
    )
}
export default Home