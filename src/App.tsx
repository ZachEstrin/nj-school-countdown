//@ts-ignore
import { React, useState } from 'react';
import Countdown, { variants } from './Countdown.tsx';
import { motion } from "motion/react";
import './stylesheets/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

const App=({})=>{
  return(<>
    <motion.div className='AppWrapper'>
      <motion.div id="PageHeader">
        <motion.div className='ContentWrapper'>
          <motion.h1 id="Logo">NJSCD</motion.h1>
        </motion.div>
      </motion.div>
      <motion.header>
        <motion.div className='ContentWrapper'>
          <Countdown 
            endTime={new Date(2026, 5, 17, 13, 10, 0)} 
            name="Robert R. Lazar Middle School"/>
        </motion.div>
      </motion.header>
      <motion.div className="Section AboutUs">
        <motion.div className='ContentWrapper'>
          <motion.div className='RowWrapper'>
            <motion.div className='RowItem'>
              <motion.h1 
                variants={variants}
                initial={"closed"}
                whileInView={"open"}
                exit={"closed"}
                className='SectHeader'>About Us</motion.h1>
            </motion.div>
            <motion.div 
              variants={variants}
              initial={"closed"}
              whileInView={"open"}
              exit={"closed"}
              className='RowItem'>
                <FontAwesomeIcon className='icon' icon={faCalendarDays}/>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </>);
}
export default App;