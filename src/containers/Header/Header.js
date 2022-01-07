import {ContainerXS} from "../../assets/styles";
import {Dropdown, Login, More, Navbar, NavLink, SpaceBetween} from "./style";
import {Link} from "react-router-dom";
import {SiteLogo} from "../../assets/icons";
import {FiMoreVertical} from "react-icons/fi";
import Button from "../../components/Button/Button";

const Header = () => {
    return (
        <ContainerXS style={{padding: '26px 0'}}>
            <SpaceBetween>
                <SpaceBetween style={{width: "55%"}}>
                    <Link to={'/'}>
                        <SiteLogo/>
                    </Link>
                    <Navbar>
                        <SpaceBetween>
                            <NavLink to={'/About'}>Как это работает</NavLink>
                            <NavLink to={'/'}>Возможности</NavLink>
                            <NavLink to={'/'}>Тарифы</NavLink>
                            <More>
                                <FiMoreVertical/>
                            </More>
                        </SpaceBetween>
                    </Navbar>
                </SpaceBetween>
                <SpaceBetween style={{width: "30%"}}>
                    <Login to={'/login'}>
                        Войти
                    </Login>
                    <Button>
                        Создать магазин
                    </Button>
                    <Dropdown>
                        Ru
                    </Dropdown>
                </SpaceBetween>
            </SpaceBetween>
        </ContainerXS>
    )
}
export default Header