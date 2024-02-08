"use client"
// import Image from "next/image";
import React, { useState, useEffect} from 'react';
import styles from "../backImg/backImg.module.scss";
import back1 from "../../../public/background1.jpg"
import back2 from "../../../public/05.jpg"
import back3 from "../../../public/background3.avif"
import Image from 'next/image';

const bacImage = [back1, back2, back3]

export default function BackImg() {
  const [currentPic, setCurrentPic] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentPic === 2){
        setCurrentPic(0)
      }else {
        setCurrentPic(currentPic + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentPic])



  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.imgdiv}><Image src={bacImage[currentPic]} alt="bbbf" fill={true} className={styles.bckImg}  /></div>
        <div className={styles.backColor}></div>
      </div>
    </main>
  );
}
