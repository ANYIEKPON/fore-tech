import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
import { SiConsul } from "react-icons/si";
import { GrIntegration } from "react-icons/gr";
import { MdModelTraining } from "react-icons/md";
import styles from "../digitaltraining/digitalTraining.module.scss";
import soft from "../../../../public/websoft.jpeg"

const Page = () => {
  return (
    <div className={styles.softwareWrapper}>
      <BackImg  />
      <div  className={styles.headText}><h1>SERVICES <br /></h1></div>
      <div className={styles.soft}>
          <div className={styles.software}>
            <div className={styles.softImage}><Image className={styles.img} src={soft} alt="img" /></div>
            <div className={styles.sofwaretext}>
              <h1>Digital Advisory and Training Services</h1>
              <span>
              Our Digital Advisory and Training Services are designed to empower businesses with the knowledge and expertise needed to thrive in the digital age. Our team of experienced consultants and trainers provide comprehensive services that help businesses navigate digital transformation and stay ahead of the curve.<br />
              Our Digital Advisory Services include:

                  <ul>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><SiConsul /></div>
                          <h3> Digital Transformation Consulting: </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Our digital transformation consulting services help businesses identify areas for improvement, develop a roadmap for change, and implement digital solutions that drive growth and innovation.</p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><GrIntegration /></div>
                          <h3>	Technology Adoption and Integration: </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>We help businesses adopt and integrate new technologies into their operations, ensuring they are able to leverage the full potential of digital tools and platforms.</p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><MdModelTraining /></div>
                          <h3> IT Training: </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Our IT training programs cover a wide range of topics, including cloud computing, cybersecurity, SAP and Microsoft trainings, and IT project management, helping businesses stay ahead of the curve in a rapidly evolving digital landscape.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  At Foreware, we are committed to helping businesses succeed in the digital age. Contact us today to learn more about how our Digital Advisory and Training Services. 	
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page
