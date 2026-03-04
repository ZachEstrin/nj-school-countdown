//@ts-ignore
import { React, useState } from 'react';
import type { ReactElement } from 'react';
import Countdown, { variants } from './Countdown.tsx';
import { motion } from "motion/react";
import './stylesheets/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { Helmet } from 'react-helmet-async';
import { useAtom } from 'jotai';
import { PageTitleAtom } from './store.ts';
const App=({})=>{
  const urlParams=new URLSearchParams(window.location.search);
  const dist=urlParams.get('dist');
  const targ=urlParams.get('targ'); //targ = target (End Date / Start Date)
  const[distValue,setDistValue]=useState(dist);
  const[targValue,setTargValue]=useState(targ);
  const[pageTitle,setPageTitle]=useAtom(PageTitleAtom);
  const updateDist=(newDist:string):void=>{
    const url=new URL(window.location.href);
    url.searchParams.set('dist', newDist);
    window.history.pushState({},'',url);
    setDistValue(newDist);
  }
  const removeDist=():void=>{
    const url=new URL(window.location.href);
    url.searchParams.delete('dist');
    window.history.pushState({},'',url);
    setDistValue(null);
  }
  const updateTarg=(newTarg:string):void=>{
    const url=new URL(window.location.href);
    url.searchParams.set('targ', newTarg);
    setTargValue(newTarg)
  }

  const SchoolOption=({name,dist}:{name:string,dist:string}):ReactElement=>{
    return(<>
      <motion.p
        className="SchoolName"
        onClick={() => updateDist(dist)}>
        {name}
      </motion.p>
    </>)
  }
  return(<>
    <Helmet>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NJSCD - {pageTitle}</title> 
      {/* TODO: implement naming with jotai atom */}
    </Helmet>
    <motion.div className='AppWrapper'>
      <motion.div id="PageHeader">
        <motion.div className='ContentWrapper'>
          <motion.h1 id="Logo" onClick={removeDist}>NJSCD</motion.h1>
        </motion.div>
      </motion.div>
      <motion.header className={`${dist==null?"homepage":""}`}>
        <motion.div className='ContentWrapper'>
          {dist==null?<>
            {/* if homepage */}
            {/* to be replaced */}
            <motion.div className="CenterWrapper">
              <motion.h1 
                variants={variants}
                initial={"closed"}
                whileInView={"open"}
                exit={"closed"}
                className='PageTextHeader'>Counting Down...</motion.h1>
              <motion.p 
                variants={variants}
                initial={"closed"}
                whileInView={"open"}
                exit={"closed"}
                style={{textAlign:"center"}}
                className='SectPara'>
                  Count down the days to your summer break with NJSCD! Select from our schools below or <a href="#">Request One Here</a>
              </motion.p>
              <motion.div
                variants={variants}
                initial={"closed"}
                whileInView={"open"}
                exit={"closed"}
                className='GridWrapper'>
                  <motion.div 
                    variants={variants}
                    initial={"closed"}
                    whileInView={"open"}
                    exit={"closed"}
                    transition={{
                      duration: .15,
                      delay: .15,
                    }}
                    className="GridItem">
                      <motion.h2 className='SchoolDistrictLabel'>Montville Township Public Schools</motion.h2>
                      <SchoolOption name="Robert R. Lazar Middle School" dist="laz"/>
                      <SchoolOption name="Montville Township High Shool" dist="mths"/>
                  </motion.div>
                  <motion.div 
                    variants={variants}
                    initial={"closed"}
                    whileInView={"open"}
                    exit={"closed"}
                    transition={{
                      duration: .15,
                      delay: .3,
                    }}
                    className="GridItem">
                      <motion.h2 className='SchoolDistrictLabel'>Morris County Vocational School</motion.h2>
                      <SchoolOption name="Morris County School of Technology" dist="mcst"></SchoolOption>
                  </motion.div>
                  <motion.div 
                    variants={variants}
                    initial={"closed"}
                    whileInView={"open"}
                    exit={"closed"}
                    transition={{
                      duration: .15,
                      delay: .45,
                    }}
                    className="GridItem">
                      <motion.h2 className='SchoolDistrictLabel'>Morris Hills Regional District</motion.h2>
                      <SchoolOption name="Morris Hills High School" dist="mhhs"/>
                      <SchoolOption name="Morris Knolls High School" dist="mkhs"/>
                  </motion.div>
                  <motion.div 
                    variants={variants}
                    initial={"closed"}
                    whileInView={"open"}
                    exit={"closed"}
                    transition={{
                      duration: .15,
                      delay: .6,
                    }}
                    className="GridItem">
                      <motion.h2 className='SchoolDistrictLabel'>West Essex Regional District</motion.h2>
                      <SchoolOption name="West Essex High School" dist="wehs"/>
                      <SchoolOption name="West Essex Middle School" dist="wems"/>
                  </motion.div>
              </motion.div>
            </motion.div>
          </>
          :dist=="laz"?<Countdown 
            endTime={new Date(2026, 5, 17, 13, 10, 0)} 
            startTime={new Date(2026, 7, 27, 8, 30, 0)}
            name="Robert R. Lazar Middle School"/>
          :dist=="wehs"?<Countdown 
            endTime={new Date(2026, 5, 18, 14, 35, 0)}
            startTime={new Date(2026, 7, 31, 8, 0, 0)}
            name="West Essex High School"/>
          :dist=="wems"?<Countdown
            endTime={new Date(2026,5,18, 14, 35, 0)}
            startTime={new Date(2026, 7, 31, 8, 0, 0)}
            name="West Essex Middle School"/>
          :dist=="mcst"?<Countdown 
            endTime={new Date(2026, 5, 15, 12, 0, 0)} 
            startTime={new Date(2026, 7, 27, 8, 0, 0)}
            name="Morris County School of Technology"/>
          :dist=="mths"?<Countdown 
            endTime={new Date(2026, 5, 17, 11, 55, 0)} 
            startTime={new Date(2026, 7, 27, 7, 25, 0)}
            name="Montville Township High School"/>
          :dist=="mhhs"?<Countdown
            endTime={new Date(2026,5,15,12,51,0)}
            name="Morris Hills High School"/>
          :dist=="mkhs"?<Countdown
            endTime={new Date(2026,5,15,12,16,0)}
            name="Morris Knolls High School"/>
          :null}
          
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
              <motion.p
                className='SectPara'
                variants={variants}
                initial={"closed"}
                whileInView={"open"}
                exit={"closed"}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque 
                  faucibus ex sapien vitae pellentesque sem placerat. In id cursus 
                  mi pretium tellus duis convallis. Tempus leo eu aenean sed diam 
                  urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum 
                  egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                  Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora 
                  torquent per conubia nostra inceptos himenaeos.
              </motion.p>
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