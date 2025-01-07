import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section"

import {Gradient, BackgroundCircles, BottomLine} from "./design/Hero"
import {heroIcons} from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {

    const parallaxRef = useRef(null);

  return (<Section className={"pt-[12rem] -mt-[5.25rem]"} crosses crossesOffset={"lg:translate-y-[7.25rem]"} customPaddings id={"hero"}>
    <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 mb-6">Explore the Possibilities of AI Chatting with <span className="inline-block relative">Brainwave <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2"
             width={624} height={28} alt="Curve"/> </span> </h1>
             <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">Unleash the power of Artificial Intelligence with Brainwave and Boost your productivity to reach a perfomance 10X bigger</p>
             <Button href="/pricing" white >Get started</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative z-1 bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] bg-n-9 rounded-t-[0.9rem]"/>
                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                        <img src={robot} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} alt="AI" />
                        <Generating className={"absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"}/>
                        <ScrollParallax isAbsolutelyPositioned>
                            <ul className="hidden absolute -left-[5rem] bottom-[7.5rem] p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
                                {heroIcons.map((icon, index) =>(
                                    <li className="p-4" key={index}>
                                        <img src={icon} width={24} height={25} alt={icon} />
                                    </li>
                                ))
                                }
                            </ul>
                        </ScrollParallax>
                        <ScrollParallax isAbsolutelyPositioned>
                            <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] lg:flex" title="Code Generation" />
                        </ScrollParallax>
                    </div>
                </div>
                <Gradient />
            </div>
            <div className="absolute -z-1 -top-[54%] left-1/2 -translate-x-1/2 w-[230%] md:-top-[46%] md:w-[140%] lg:-top-[104%] ">
                <img src={heroBackground} className="w-full" width={1440} height={1800} alt="Hero"/>
            </div>
            <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
    </div>
    <BottomLine/>
  </Section>)
}

export default Hero;