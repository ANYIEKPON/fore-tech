import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
import styles from "../softwaredev/software.module.scss";
import soft from "../../../../public/04.jpg"

const Page = () => {
  return (
    <div className={styles.softwareWrapper}>
      <BackImg  />
      <div  className={styles.headText}><h1>SERVICES <br /></h1></div>
      <div className={styles.soft}>
          <div className={styles.software}>
            <div className={styles.softImage}><Image className={styles.img} src={soft} alt="img" /></div>
            <div className={styles.sofwaretext}>
              <h1>Software Development</h1>
              <span>
                  Foreware provides high-quality software development services that assist organizations succeed in today&apos;s technological world. Our talented software engineers use cutting-edge technologies and proven techniques to develop innovative solutions that are suited to your unique needs. Whether you require a unique web application, a mobile app, or robust enterprise software, we have what it takes to make your idea a reality.
                  Our software development services include:
                  <ul>
                    <li className={styles.list}>
                      <h3>Custom Software Development:</h3>
                      <p>We provide specialized software solutions that meet your specific business concerns. Our staff collaborates directly with you to totally grasp what you expect and create a solution that surpasses what you expect.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Mobile Applications:</h3>
                      <p>We develop native and cross-platform mobile apps that allow you to reach those you want to reach on their chosen gadgets. Our mobile apps are meant to be quick, safe, and user-friendly, resulting in an excellent user experience.
                      </p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Website Development: </h3>
                      <p>The Foreware team have experience in creating responsive and intuitive websites that boost traffic while providing users with a pleasant experience. We have the competence to develop an easy-to-use informative site as well as an advanced portal for e-commerce.</p>
                    </li>
                  </ul>
                  When you choose Foreware for your software development requirements, you can be confident that you&apos;re working with a team committed to achieving your goals. Contact us today to find out how we can assist you reach your company objectives with creative software solutions.	
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page
