import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
import styles from "../dataservices/dataservices.module.scss";
import soft from "../../../../public/03.jpg"

const Page = () => {
  return (
    <div className={styles.softwareWrapper}>
      <BackImg  />
      <div  className={styles.headText}><h1>SERVICES <br /></h1></div>
      <div className={styles.soft}>
          <div className={styles.software}>
            <div className={styles.softImage}><Image className={styles.img} src={soft} alt="img" /></div>
            <div className={styles.sofwaretext}>
              <h1>Data Services and Artificial Intelligence</h1>
              <span>
              We want to provide organizations the competitive advantage they need in today&apos;s digital landscape by helping them realize the full value of their data, spur innovation, and use Artificial Intelligence (AI) and Data Services. To provide innovative solutions that meet your data and AI demands, our skilled team blends in-depth industry experience with cutting-edge technology.<br />
              Our Data Services and AI solutions include:
                  <ul>
                    <li className={styles.list}>
                      <h3>	Data Analytics: </h3>
                      <p>We offer comprehensive data analytics services that help businesses extract valuable insights from their data, enabling them to make informed decisions and drive business growth.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3> Data Warehousing: </h3>
                      <p>Our data warehousing solutions help businesses store and manage large volumes of data efficiently, ensuring data is organized and accessible for analysis and reporting.
                      </p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Data Integration:  </h3>
                      <p>We provide data integration services that help businesses consolidate data from multiple sources, ensuring data is accurate, consistent, and up to date.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3> Artificial Intelligence: </h3>
                      <p>Our AI solutions leverage machine learning and deep learning algorithms to help businesses automate processes, enhance customer experiences, and drive innovation.</p>
                    </li>
                  </ul>
                  At Foreware, we are committed to delivering high-quality Data Services and AI solutions that help businesses thrive in the digital age. 	
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page
