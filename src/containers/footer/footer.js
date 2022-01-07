import { FooterBlock,FooterBlockInner,FooterBlockInnerTop, FooterBlockInnerBottom, FooterBlockWrapper } from "./style";
import FooterLogo from '../../assets/icons/footer-logo.png'
import { ContainerXS } from "../../assets/styles";
import { Facebook } from "../../assets/icons";
import { Instagram } from "../../assets/icons";
import { Twitter } from "../../assets/icons";
import { Youtube } from "../../assets/icons";


const Footer = () => {
    return ( 
        <FooterBlock>
            <ContainerXS>
                <FooterBlockInner>
                <FooterBlockInnerTop>
                    <div className="footer_block_top">
                        <ul className="footer_block_ul">
                        <h4 className="footer_block_title">Платформа</h4>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Главная страница</a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Тарифные планы</a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Примеры магазинов</a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Возможности сайта</a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Условия использования</a></li>
                        </ul>
                    </div>
                    <div className="footer_block_top">
                        <ul className="footer_block_ul">
                        <h4 className="footer_block_title">Поддержка</h4>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Вопросы и ответы </a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Видеоуроки  сайта</a></li>
                        </ul>
                    </div>
                    <div className="footer_block_top">
                        <ul className="footer_block_ul">
                    <h4 className="footer_block_title">О нас</h4>
                            <li className="footer_block_li"><a href="" className="footer_block_link">О компании </a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="footer_block_top">
                        <ul className="footer_block_ul">
                        <h4 className="footer_block_title">Контакты</h4>
                            <li className="footer_block_li"><a href="" className="footer_block_link">+998 (91) 191 40 40</a></li>
                            <li className="footer_block_li"><a href="" className="footer_block_link">info@avlo.shop</a></li>
                            <p className="footer_block_address">Uzbekistan, Tashkent,  ул. Yunusobod 14, </p>
                        </ul>
                    </div>
                </FooterBlockInnerTop>
                <FooterBlockInnerBottom>
                    <a href="" className="footer-logo"><img src={FooterLogo} alt="" className="footer_logo_icon" /></a>
                    <div className="social-block">
                        <a href="" className="social_link"><Facebook/></a>
                        <a href="" className="social_link"><Youtube/></a>
                        <a href="" className="social_link"><Twitter/></a>
                        <a href="" className="social_link"><Instagram/></a>
                    </div>
                </FooterBlockInnerBottom>
                <FooterBlockWrapper>
                    <p className="copy_right">© 2021 Avlo shop. Все права защищены</p>
                    <button className="footer_language">Русский</button>
                </FooterBlockWrapper>
            </FooterBlockInner>
            </ContainerXS>
        </FooterBlock>
     );
}
 
export default Footer;