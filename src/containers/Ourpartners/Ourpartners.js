import React from 'react'
import {ContainerXS,W50} from "../../assets/styles";
import {Partners,TitlePartner,Image,Startbusnes,StartTitle,Img} from './style'
import { StyledBanner } from '../BannerAbout/style';
import Path from '../../assets/images/path.png'
import Button from '../../components/Button/Button'; 
import amazo  from '../../assets/images/amazo.png'
import puma  from '../../assets/images/puma.png'
import zero  from '../../assets/images/zero.png'
import audio  from '../../assets/images/audio.png'
import microsoft  from '../../assets/images/microsoft.png'
import apl  from '../../assets/images/apl.png'
import leder  from '../../assets/images/leder.png'
import pay  from '../../assets/images/Pay.png'
const Ourpartners = () => {
    return (
        <div>
            <ContainerXS  >
                <TitlePartner >Наши<span>партнеры</span></TitlePartner>
                <Partners>
                    <Image src={amazo} />
                    <Image src={puma}  />
                    <Image src={zero}  />
                    <Image src={audio}  />
                    <Image src={microsoft}  />
                    <Image src={apl}  />
                    <Image src={leder}  />
                    <Image src={pay}  />
                </Partners>
            </ContainerXS>
            <StyledBanner>
                <ContainerXS>
                    <Startbusnes>
                        <StartTitle >
                        Начните свой бизнес вместе с нами <span>прямо сейчас!</span> 
                        </StartTitle>
                        <Button>
                                Создать магазин
                        </Button>
                       <Img src={Path}/>
                    </Startbusnes>
                 </ContainerXS>
            </StyledBanner>
        </div>
    )
}

export default Ourpartners

