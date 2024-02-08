import BackImg from '@/components/backImg/backImg';
import Contact from '@/components/encrypt/Encrypt';
import Service from '@/components/service/Service';
import React from 'react';
import styles from "./page.module.scss";

const page = () => {
  return (
    <div className={styles.mainHome}>
      <div className={styles.wrapper}>
        <BackImg />
        <div  className={styles.headText}><h1>FOREWARE CONSULTING</h1></div>
        <div className={styles.service}><h2>PERFECT SOLUTION FOR ANY BUSINESS OPERATION</h2></div>
        <Service />
        <Contact />
        <div className={styles.centre}>CENTRE</div>
      </div>
    </div>
  )
}

export default page