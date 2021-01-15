import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Image from '../../images/about.png';
import { motion } from 'framer-motion';
import { animation2 } from '../../animations/index';

const About = () => {
    const dummyText = "Aenean ac luctus massa. Quisque turpis est.";
    return (
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                transition={animation2.duration}
                variants={animation2}
            >
                <Header />
                <Main image={Image} title="About Us" desc={dummyText} ></Main>
            </motion.div>
        </>
    )
}

export default About
