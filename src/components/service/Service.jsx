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
                            <p>Foreware provides high-quality software development services, crafting custom solutions, mobile apps, and websites. Our skilled team employs cutting-edge technologies to exceed client expectations. With a focus on client success, Foreware delivers innovative and tailored software solutions for businesses to thrive in this digital age.
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
                            <p>Foreware provides Cloud Services enabling innovation, scalability, and operational efficiency. Our expertise covers migration, infrastructure management, security, and backup/disaster recovery. With tailored solutions, Foreware supports businesses in navigating the digital landscape effectively and securely.
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
                            <p>Foreware provides Business Solutions and Applications services, offering tailored strategies and advanced technologies for enhanced company performance. Our expertise includes Enterprise Systems Deployment, Business Intelligence, and Intelligent Systems, driving efficiency and profitability.
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
                            <p>Foreware offers Data Services and AI solutions, enabling businesses to leverage their data for competitive advantage and innovation. Our expertise includes Data Analytics, Data Warehousing, Data Integration, and Artificial Intelligence, delivering high-quality solutions to drive success in the digital age.
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
                            <p>Foreware&apos;s Digital Advisory and Training Services equip businesses with expertise to navigate digital transformation and stay ahead in the digital landscape. Our offerings include digital transformation consulting, IT governance, technology adoption, and IT training, fostering growth and innovation.
                            </p>
                        </div>
                        }
                </div>
                <Link  className="link" href="/services"><span>Learn More </span></Link>
           </div>
        </div>
    </div>
  )
}

export default Service