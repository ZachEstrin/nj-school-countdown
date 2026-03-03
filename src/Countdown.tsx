//@ts-ignore
import { React } from 'react';
import type { ReactElement } from 'react';
//@ts-ignore
import { useTimer } from 'react-timer-hook';
import { motion } from "motion/react";
import './stylesheets/Countdown.scss';
export const variants={
  open:{
    opacity: 1,
    y:0,
  },
  closed:{
    opacity: 0,
    y:5,
  },
}
const Countdown=({endTime,name}:{endTime: Date,name:string}):ReactElement=>{
  const{
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    pause,
    resume,
    restart,
  }=useTimer({
    expiryTimestamp:endTime,
    onExpire:()=>{
      //Code for timer end effect
    }
  })

  let endYear=endTime.getFullYear();
  let endMonth=endTime.getMonth();
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let endDay=endTime.getDate();
  let endHour=endTime.getHours();
  let endMinute=endTime.getMinutes();
  let endSecond=endTime.getSeconds();
  return(<>
    <motion.h1 
        transition={{duration:.15,delay:.15,}}
        variants={variants}
        initial={"closed"}
        whileInView={"open"}
        exit={"closed"}
        className="schoolName">{name} ({months[endMonth]} {endDay}, {endYear}, {endHour >= 12 ? endHour % 12 : endHour}:{endMinute.toString().padStart(2,'0')}:{endSecond.toString().padStart(2, '0')})</motion.h1>
    <motion.div className="CountdownWrapper">
      <motion.div 
        transition={{duration:.15,delay:.15,}}
        variants={variants}
        initial={"closed"}
        whileInView={"open"}
        exit={"closed"}
        className="CountdownDays">
          {days} Days
      </motion.div>
      <motion.div 
        transition={{duration:.15,delay:.15,}}
        variants={variants}
        initial={"closed"}
        whileInView={"open"}
        exit={"closed"}
        className="CountdownTimer">
          <motion.span>
            {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2,"0")}
          </motion.span>
      </motion.div>
    </motion.div>
  </>);
}
export default Countdown;