import { check, service1, service2, service3 } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./Generating"
import Heading from "./Heading"
import Section from "./Section"
import {PhotoChatMessage, Gradient, VideoBar, VideoChatMessage} from "./design/Services"


const Services = () => {
    return (
        <Section id={"how-to-use"}>
            <div className="container">
                <Heading title={"Generative AI made for creators."} text="Brainware unlocks the potential of AI-powered applications" />
                <div className="relative">
                    <div className="relative z-1 flex items-center border h-[39rem] mb-5 p-8 border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img src={service1} alt="Smartest AI" width={800} height={730} className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-1 ml-auto max-w-[17rem]">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
                            <ul className="body-2">
                                {brainwaveServices.map((item, index) => (
                                    <li key={index} className="flex items-center justify-start py-4 border-t border-n-6">
                                        <img src={check} width={24} height={24} alt="Service" />
                                        <p className="ml-4">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className={"absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"} />
                    </div>
                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="Robot"></img>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using out AI photo editing features. Try it now !</p>
                            </div>
                            <PhotoChatMessage/>
                        </div>
                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <div className="h4 mb-4">Video Generation</div>
                                <p className="body-2 text-n-3">
                                    The world&appos;s most powerful AI Photo and Video art generation engine. What will you create?
                                </p>
                                <ul className="flex items-center justify-center gap-4">
                                    {brainwaveServicesIcons.map((item, index) =>(
                                        <li key={index} className={`flex items-center justify-center rounded-2xl ${index === 2?
                                            "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" :
                                            "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                        }`}>
                                            <div className={index === 2?
                                                "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                                                :""
                                            }>
                                                <img src={item} alt="" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img src={service3} className="w-full h-full object-cover" width={520} height={400} alt="Scary robot" />
                                <VideoChatMessage/>
                                <VideoBar/>
                            </div>
                        </div>
                    </div>
                    <Gradient/>
                </div>
            </div>

        </Section>
    )
}

export default Services