import React, {FC} from 'react';
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from '@heroicons/react/24/solid'
import {BenefitType, SelectedPage} from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "@/scenes/benefits/benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits: FC<Props> = ({setSelectedPage}) => {
    return <section
        id='benefits'
        className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <div className='md:w--3/5 md:my-5'>
                <HText>MORE THAN JUST GYM.</HText>
                <p className='my-5 text-sm'>
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </div>

            {/*Benefits*/}
            <motion.div className='mt-5 items-center justify-between'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
            variants={container}
            >
                {benefits.map((benefit) => (
                    <Benefit key={benefit.title}
                             icon={benefit.icon}
                             title={benefit.title}
                             description={benefit.description}
                             setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        {/*Graphics and descriptions*/}
            <div>
            {/*Graphic*/}
                <img/>
            {/*Descriptions*/}
                <div></div>
            {/*Title*/}
                <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                        <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                            <span className="text-primary-500">FIT</span>
                        </HText>
                    </div>
                </div>
            {/*Descrip*/}
                <div>
                    <p></p>
                    <p></p>
                </div>
            {/*Button*/}

            </div>
        </motion.div>
    </section>
        ;
};

export default Benefits;