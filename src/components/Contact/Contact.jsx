import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Image from '../../images/contact.png';
import { motion } from 'framer-motion';
import { animation3 } from '../../animations/index';

const Contact = () => {
    const dummyText = "Maecenas in sit amet sapien mattis tristique.";

    return (
        <>
            <motion.div
                initial="out"
                animate="end"
                end="out"
                transition={animation3.duration}
                variants={animation3}
            >
                <Header />
                <Main image={Image} title="Contact Us" desc={dummyText} />
            </motion.div>
        </>
    )
}

export default Contact
