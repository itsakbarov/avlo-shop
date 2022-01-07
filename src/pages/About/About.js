import {Wrapper} from "./style";
import BannerAbout from '../../containers/BannerAbout'
import AboutUs from "../../containers/AboutUs";
import Ourpartners from "../../containers/Ourpartners";
const About = () => {
    return (
        <Wrapper>
             <BannerAbout/>
             <AboutUs/>
             <Ourpartners/>
        </Wrapper>
    )
}
export default About