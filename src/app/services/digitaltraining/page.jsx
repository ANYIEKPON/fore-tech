import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
import styles from "../digitaltraining/digitalTraining.module.scss";
import soft from "../../../../public/websoft.jpeg"

const page = () => {
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
                      <h3> Digital Transformation Consulting: Data Analytics: </h3>
                      <p>Our digital transformation consulting services help businesses identify areas for improvement, develop a roadmap for change, and implement digital solutions that drive growth and innovation.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3> IT Governance and Compliance: </h3>
                      <p>We provide IT governance and compliance services that help businesses ensure their IT practices align with industry standards and regulations, reducing the risk of non-compliance.
                      </p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Technology Adoption and Integration: </h3>
                      <p>We help businesses adopt and integrate new technologies into their operations, ensuring they are able to leverage the full potential of digital tools and platforms.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3> IT Training: </h3>
                      <p>Our IT training programs cover a wide range of topics, including cloud computing, cybersecurity, SAP and Microsoft trainings, and IT project management, helping businesses stay ahead of the curve in a rapidly evolving digital landscape.</p>
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

export default page
