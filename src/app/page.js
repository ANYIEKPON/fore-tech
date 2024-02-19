"use client";
import React, { useState, useEffect} from 'react';
import BackImg from '@/components/backImg/backImg';
import Contact from '@/components/encrypt/Encrypt';
import Service from '@/components/service/Service';
import styles from "./page.module.scss";

const Page = () => {
  const [fadeprop, setFadeprop] = useState({
    fade: styles.headTestFadein
  })

  useEffect(() => {
      const timeOut = setInterval(() => {
        if(fadeprop.fade === styles.headTestFadein){
          setFadeprop({
            fade: styles.headTestFadeout
          })} else {
            setFadeprop({
              fade: styles.headTestFadein
            })
          }
      }, 2000)

      return () => clearInterval(timeOut);
  }, [fadeprop]);

  return (
    <div className={styles.mainHome}>
      <div className={styles.wrapper}>
        <BackImg />
        {/* make it animate in and out */}
        <div  className={fadeprop.fade}><h1>FOREWARE SOLUTIONS</h1> <br /><span>...moving bussinesses forward</span></div>
        <div className={styles.service}><h2>Empower Your Business with Our IT Solutions: Explore Our Services Today!</h2></div>
        <Service />
        <Contact />
        {/* <div className={styles.centre}>CENTRE</div> */}
      </div>
    </div>
  )
}

export default Page