import React, {useState} from 'react'
import Video from '../../videos/Video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>O mundo está online, seu dinheiro também deveria estar</HeroH1>
                <HeroP>
                    Descubra como criptomoedas podem ser uma solução de investimento para sua empresa
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="deal" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                        Quero investir agora  {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
