'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../../util/motion';
import StyledButton from "../styled-button";

const Navbar = () => {

  return (

    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative w-full`}
      data-testid="navbar"
    >
      <div className="absolute w-[100%] inset-0" />
      <div
        className={`w-full 2xl:max-w-[1280px] mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          ICPUNO
        </h2>
        <a href="/play">
          <StyledButton roundedStyle='rounded-full' className='bg-[#ff9000] text-2xl'>Start Game</StyledButton>
        </a>
      </div>
    </motion.nav>
  )
};

export default Navbar;
