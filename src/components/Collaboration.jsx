import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabContent, collabText } from "../constants"
import Button from "./Button"
import Section from "./Section"
import {LeftCurve, RightCurve} from "./design/Collaboration"


const Collaboration = () => {
  return (
    <Section crosses>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <div className="h2 mb-4 md:mb-8">
                    AI Chat app for seamless collaboration
                </div>
                <ul className="mb-10 md:mb-14 max-w-[22rem]">
                    {
                        collabContent.map((item, index) =>(
                            <li className="mb-3 py-3" key={index}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="Check" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                { item.text && (
                                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                                    ) }
                            </li>
                        ))
                    }
                </ul>
                <Button>Try it now</Button>
            </div>
            <div className="lg:ml-auto xl:w-[38rem] mt-4">
                <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                    {collabText}
                </p>
                <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                    <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                        <div className="aspect-square flex w-[6rem] m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full" >
                                <img src={brainwaveSymbol} alt="BrainWave" width={48} height={48} />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {
                            collabApps.map((app, index) =>(
                                <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                    <div className={`relative -top-[1.5rem] flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-n-7 border border-n-1/15 p-1 rounded-xl -rotate-${index * 45}`}>
                                        <img src={app.icon} alt="" className="m-auto" width={app.width} height={app.height}  />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <LeftCurve/>
                    <RightCurve/>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration