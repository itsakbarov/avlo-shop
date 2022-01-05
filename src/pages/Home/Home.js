import {Navbar, SpaceBetween, StyledHome} from "./style";
import {Link} from "react-router-dom";
import {SiteLogo} from "../../assets/icons";
import {ContainerXL, ContainerXS} from "../../assets/styles";
import {FiMoreVertical} from "react-icons/fi";

const Home = () => {
    return (
        <StyledHome>
            <ContainerXL>
                <ContainerXS>
                    <SpaceBetween>
                        <SpaceBetween style={{width: "50%"}}>
                            <Link to={'/'}>
                                <SiteLogo/>
                            </Link>
                            <Navbar>
                                <SpaceBetween>
                                    <Link to={'/'}>Как это работает</Link>
                                    <Link to={'/'}>Возможности</Link>
                                    <Link to={'/'}>Тарифы</Link>
                                    <button>
                                        <FiMoreVertical />
                                    </button>
                                </SpaceBetween>
                            </Navbar>
                        </SpaceBetween>
                    </SpaceBetween>
                </ContainerXS>
            </ContainerXL>
        </StyledHome>
    )
}
export default Home