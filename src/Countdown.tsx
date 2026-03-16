//@ts-ignore
import { useState, type ReactElement } from 'react';
//@ts-ignore
import { useTimer } from 'react-timer-hook';
import { motion } from "motion/react";
import './stylesheets/Countdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import App, { ani } from './App.tsx';
import { DerivedParamsAtom } from './store.ts';
import { useAtom } from 'jotai';
import { Toggle } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import "./stylesheets/ToggleGroup.scss";

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
const Countdown=({endTime, startTime, name}:{endTime: Date,startTime?:Date,name:string}):ReactElement=>{
  const [selectedTime, setSelectedTime] = useState("end");
  
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
      //TODO: add celebration
    }
  });

  const[params,setParams]=useAtom(DerivedParamsAtom);
  const removeDist=():void=>{setParams(["dist",""]);};

  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let endYear=endTime.getFullYear();
  let endMonth=endTime.getMonth();
  let endDay=endTime.getDate();
  let endHour=endTime.getHours();
  let endMinute=endTime.getMinutes();
  let endSecond=endTime.getSeconds();

  let startYear=startTime?.getFullYear();
  let startMonth=startTime?.getMonth();
  let startDay=startTime?.getDate();
  let startHour=startTime?.getHours();
  let startMinute=startTime?.getMinutes();
  let startSecond=startTime?.getSeconds();
  
  const endDate:string = `${months[endMonth]} ${endDay}, ${endYear}, ${endHour > 12 ? endHour % 12 : endHour}:${endMinute.toString().padStart(2, '0')}:${endSecond.toString().padStart(2, '0')} ${endHour < 12 ? "am" : "pm"}`;
  const startDate:string = startTime ? `${months[startMonth!]} ${startDay}, ${startYear}, ${startHour! > 12 ? startHour! % 12 : startHour!}:${startMinute!.toString().padStart(2, '0')}:${startSecond!.toString().padStart(2, '0')} ${startHour! < 12 ? "am" : "pm"}` : "";


  return(<>
    <motion.h1 
      transition={{duration:.15,delay:.15,}}
      {...ani}
      className="schoolName">{name} ({selectedTime === "end" ? endDate : startDate})
    </motion.h1>
    <motion.h1 
      transition={{duration:.15,delay:.15,}}
      onClick={(e)=>{removeDist();}}
      {...ani}
      className="back"><FontAwesomeIcon icon={faCircleLeft}/>  Go Back</motion.h1>
    <ToggleGroup defaultValue={["2526end"]} 
      className="Panel"
      onValueChange={(newValue):void => {
        if(newValue[0] !== undefined) {
          restart(newValue[0] === "2526end" ? endTime : startTime!)
          setSelectedTime(newValue[0] === "2526end" ? "end" : "start")
        }
        if(newValue[0] === undefined) restart(endTime);
      }}
    >
      <Toggle value="2526end" className="Button">25-26 End</Toggle>
      <Toggle value="2627start" className="Button">26-27 Start</Toggle>
    </ToggleGroup>
    <motion.div className="CountdownWrapper">
      <motion.div 
        transition={{duration:.15,delay:.15,}}
        {...ani}
        className="CountdownDays">
          {days} Days
      </motion.div>
      <motion.div 
        transition={{duration:.15,delay:.15,}}
        {...ani}
        className="CountdownTimer">
          <motion.span>
            {hours.toString().padStart(2,"0")}:{minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}
          </motion.span>
      </motion.div>
    </motion.div>
  </>);
};
export default Countdown;