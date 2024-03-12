'use client'
import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdContacts } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlineBlock, AiOutlineSlack } from "react-icons/ai";
import styles from "../about-us/aboutUs.module.scss";
// import soft from "../../../../public/03.jpg"

const Page = () => {

const [expand, setExpand] = useState(false);
const [read, setRead] = useState({
  id: "one"
})

const handleExpand = (e) => {
  setRead({id: e.currentTarget.id})
  setExpand(!expand);
}

  return (
    <div className={styles.softwareWrapper}>
      <BackImg  />
      <div  className={styles.headText}><h1>ABOUT US <br /></h1></div>
      <div className={styles.soft}>
          <div className={styles.software}>          
            <div className={styles.sofwaretext}>
              <div className={styles.text}>
                <div className={styles.iconn}>
                    <div className={styles.icons}><IoMdContacts /></div>
                    <h1>About Us</h1>
                </div>
                <div className={styles.writeUp}>
                    <p>
                      At Foreware Technologies, we believe in leveraging technology and innovations to generate success for organizations of all sizes. With an emphasis on innovation and excellence, we offer a full range of information technology services tailored to the changing demands of modern businesses.<br />
                    <span className={(read.id === "one" && expand) ? styles.opnDiv : styles.clsDiv}>
                      We specialize in providing cutting-edge solutions in cloud services, business application deployment, data management, and artificial intelligence. Whether you&apos;re a start-up trying to establish a digital presence or a large corporation looking to optimize your IT infrastructure, we have the expertise and skills to help you succeed.<br />
                        What distinguishes us is our dedication to providing bespoke solutions that suit your specific business pain points and objectives. Our professionals collaborate closely with you to understand your unique demands and design tailored solutions that produce concrete results.<br />
                        With Foreware Technologies as your IT partner, you can expect nothing less than great service, creative solutions, and dedication to your success. 
                    </span>
                    </p>
                    <button id="one" onClick={(e) => handleExpand(e)}>read more</button>
                </div>
              </div>
            </div>
            <div className={styles.sofwaretext}>
              <div className={styles.text}>
                <div className={styles.iconn}>
                    <div className={styles.icons}><AiOutlineSlack /></div>
                    <h1>Why Foreware?</h1>
                </div>
                <div className={styles.writeUp}>
                    <p>
                    At Foreware Technologies, we&apos;re all about helping businesses thrive in today&apos;s digital landscape. Our team is passionate about harnessing the power of technology to drive innovation and efficiency. We understand that every organization has unique needs,<br />
                    <span className={(read.id === "two" && expand) ? styles.opnDiv : styles.clsDiv}>
                    which is why we offer a comprehensive range of IT services tailored to suit small, medium, and large businesses alike. Whether it&apos;s deploying cutting-edge business applications, leveraging the potential of cloud services, or harnessing the power of data and AI, we&apos;re here to empower our clients to succeed. With Foreware Technologies by your side, you can rest assured that your IT infrastructure is in good hands, allowing you to focus on what you do best – growing your business.
                    </span>
                    </p>
                    <button id="two" onClick={(e) => handleExpand(e)}>read more</button>
                </div>
              </div>
            </div>
            <div className={styles.sofwaretext}>
              <div className={styles.text}>
                <div className={styles.iconn}>
                    <div className={styles.icons}><AiOutlineBlock /></div>
                    <h1>Vision Statement</h1>
                </div>
                <div className={styles.writeUp}>
                    <p>
                    To innovate the future of IT, empowering businesses with cutting-edge solutions. 
                    </p>
                   
                </div>
              </div>
            </div>
            <div className={styles.sofwaretext}>
              <div className={styles.text}>
                <div className={styles.iconn}>
                    <div className={styles.icons}><MdOutlineRocketLaunch /></div>
                    <h1>Mission Statement</h1>
                </div>
                <div className={styles.writeUp}>
                    <p>
                    Our mission is to empower organizations of all sizes with innovative and reliable information technology solutions. Our goal is to be a trusted partner, providing expert guidance and support to help businesses thrive in the digital age.
                    </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page
