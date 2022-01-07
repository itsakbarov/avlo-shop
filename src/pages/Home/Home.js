import {StyledHome} from "./style";
import {ContainerXL} from "../../assets/styles";
import Banner from "../../containers/Banner";
import Steps from "../../containers/Steps";

const Home = () => {
    return (
        <StyledHome>
            <ContainerXL>
                <Banner/>
                <Steps/>
            </ContainerXL>
        </StyledHome>
    )
}
export default Home