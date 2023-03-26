import React, {FC} from 'react';
import {SelectedPage} from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';

type Props = {
    setSelectedPage: (value: SelectedPage)=> void
}

const Home: FC<Props> = ({setSelectedPage}) => {

    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    return <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/*{IMAGE AND MAIN HEADER}*/}
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/*MAIN HEADER*/}
            <div className='z-10 mt-32 md:basis-3/5'>
            {/*Headings*/}
                <div className='md:-mt-20'>
                    <div>
                        <div>
                            <img alt='home-page-text' src={HomePageText}/>
                        </div>
                    </div>
                    <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </div>
            {/*ACTIONS*/}
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >Learn More</AnchorLink>
            </div>
        {/*IMAGE*/}
            <div>
                <img alt='home-pageGraphic' src={HomePageGraphic}/>
            </div>
        </div>

    {/*SPONSORS*/}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img alt='redbull-sponsor' src={SponsorRedBull}/>
                        <img alt='forbes-sponsor' src={SponsorForbes}/>
                        <img alt='fortune-sponsor' src={SponsorFortune}/>
                    </div>
                </div>
            </div>
        )}
    </section>
};

export default Home;