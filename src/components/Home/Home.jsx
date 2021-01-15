import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Image from '../../images/home.png';
import { motion } from 'framer-motion';
import { animation1 } from '../../animations';

const Home = () => {
    const dummyText = "Lorem ipsum dolor sit amet, pellentesque sagit.";
    return (
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                transition={animation1.duration}
                variants={animation1}
            >
                <Header />
                <Main image={Image} title="Home Page" desc={dummyText} />
            </motion.div>
        </>
    )
}

export default Home
