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
                <HeroH1>O sonho é seu, a lógica é nossa</HeroH1>
                <HeroP>
                    Agende uma consultoria e comece a aplicar tecnologias de start-up na gestão do seu produto
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="deal" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                        Soluções de tech para minha empresa {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
