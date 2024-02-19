import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
import styles from "../cloudservices/cloudservices.module.scss";
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
              <h1>Cloud Services</h1>
              <span>
              We provide complete Cloud Services that enable organizations to leverage the power of the cloud to promote innovation, increase scalability, and optimize operational effectiveness. Our team of professionals specializes in providing safe, dependable, and economically viable cloud solutions suited to your specific company requirements.<br />
              Our Cloud Services include:
                  <ul>
                    <li className={styles.list}>
                      <h3> Cloud Migration:</h3>
                      <p>We assist organizations in smoothly migrating their existing workloads, apps, and data to the cloud, thereby guaranteeing least interruption and optimal performance.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3> Cloud Infrastructure Management: </h3>
                      <p>Foreware team offers full cloud infrastructure management services, such as tracking, improvement, and servicing, to guarantee that your cloud landscape is reliable and functional.
                      </p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Cloud Security:  </h3>
                      <p>We provide powerful cloud security solutions to safeguard your data and apps from cyber-attacks, ensuring that your organization stays secure and in compliance with industry requirements.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Cloud Backup and Disaster Recovery:   </h3>
                      <p>Our cloud backup and disaster recovery services enable organizations to secure their data and applications from loss or damage, assuring business continuity in the event of a disaster.</p>
                    </li>
                  </ul>
                  With the expertise and experience to support you along the way, Foreware can assist you with cloud migration, infrastructure optimization, or security enhancement. Make an appointment with us right now to learn how our Cloud Services can support your business&apos;s success in the digital age.	
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page
