'use client'
import React, { useState, useEffect } from 'react';
import styles from './service.module.scss';
import Link from 'next/link';
import One from "../../../public/01.jpg"
import Two from "../../../public/02.jpg"
import Three from "../../../public/04.jpg"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';


const Service = () => {
    const [read, setRead] = useState({
        id: "comOne"
    })
    const [show, setShow] = useState(false);
   
    useEffect(() => {
        console.log(read);
        console.log(show)
    }, [read])

    const handleOpen = (e) => {
        setRead({
            id: e.currentTarget.id
        })
        setShow(!show);
    }   

  return (
    <div className={styles.service}>
        <div className={styles.wrapper}>
           <div className={styles.top}>
                    <div className={styles.img1}><Image className={styles.img} src={One} alt="one" /></div>
                    <div className={styles.img2}><Image className={styles.img} src={Two} alt="one" /></div>
                    <div className={styles.img3}><Image className={styles.img} src={Three} alt="one" /></div>
           </div>
           <div className={styles.botom}>
                <div className={styles.first}>
                        <div className={styles.border}></div>
                        <div className={styles.click}>
                            <div className={styles.learn} id="comOne" onClick={(e) => handleOpen(e)}>{
                               (read.id === "comOne" && show) ? <IoIosArrowUp /> : <IoIosArrowDown />
                            }</div>
                             <Link href="/services/softwaredev" className="link"><h4>Software Development</h4></Link>
                        </div>
                        {
                        (read.id === "comOne" && show) && <div className={styles.readbelow}>
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting .
                            </p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.border}></div>
                        <div className={styles.click}>
                            <div className={styles.learn} id="comTwo" onClick={(e) => handleOpen(e)}>{
                                (read.id === "comTwo" && show)? <IoIosArrowUp /> : <IoIosArrowDown />
                            }</div>
                            <Link href="/services/cloudservices" className="link"><h4>Cloud Services</h4></Link>
                        </div>
                        {
                        (read.id === "comTwo" && show) && <div className={styles.readbelow}>
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting .
                            </p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.border}></div>
                        <div className={styles.click}>
                            <div className={styles.learn} id="comThree" onClick={(e) => handleOpen(e)}>{
                                (read.id === "comThree" && show)? <IoIosArrowUp /> : <IoIosArrowDown />
                            }</div>
                            <Link href="/services/business" className="link"><h4>Business Solutions</h4></Link>
                        </div>
                        {
                        (read.id === "comThree" && show) && <div className={styles.readbelow}>
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting .
                            </p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.border}></div>
                        <div className={styles.click}>
                            <div className={styles.learn} id="comFive" onClick={(e) => handleOpen(e)}>{
                                (read.id === "comFive" && show)? <IoIosArrowUp /> : <IoIosArrowDown />
                            }</div>
                            <Link href="/services/dataservices" className="link"><h4>Data Services and AI</h4></Link>
                        </div>
                        {
                        (read.id === "comFive" && show) && <div className={styles.readbelow}>
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting .
                            </p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.border}></div>
                        <div className={styles.click}>
                            <div className={styles.learn} id="comSix" onClick={(e) => handleOpen(e)}>{
                                (read.id === "comSix" && show)? <IoIosArrowUp /> : <IoIosArrowDown />
                            }</div>
                            <Link href="/services/digitaltraining" className="link"><h4>Digital Advisory and Training</h4></Link>
                        </div>
                        {
                        (read.id === "comSix" && show) && <div className={styles.readbelow}>
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting .
                            </p>
                        </div>
                        }
                </div>
                {/* <div className={styles.first}>
                        <div className={styles.border}></div>
                        <div className={styles.click}>
                            <div className={styles.learn} id="comSeven" onClick={(e) => handleOpen(e)}>{
                                (read.id === "comSeven" && show)? <IoIosArrowUp /> : <IoIosArrowDown />
                            }</div>
                            <Link href="/services/digitaltraining" className="link"><h4>Training</h4></Link>
                        </div>
                        {
                        (read.id === "comSeven" && show) && <div className={styles.readbelow}>
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting .
                            </p>
                        </div>
                        }
                </div> */}
                <Link  className="link" href="/services"><span>Learn More </span></Link>
           </div>
        </div>
    </div>
  )
}

export default Service