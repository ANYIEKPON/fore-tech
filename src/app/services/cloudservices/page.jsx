import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import { MdOutlineSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbCloudMinus } from "react-icons/tb";
import { SiGoogletagmanager } from "react-icons/si";
import { RiDeviceRecoverLine } from "react-icons/ri";
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
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><TbCloudMinus /></div>
                          <h3> Cloud Migration:</h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>We assist organizations in smoothly migrating their existing workloads, apps, and data to the cloud, thereby guaranteeing least interruption and optimal performance.</p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><SiGoogletagmanager /></div>
                          <h3> Cloud Infrastructure Management: </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Foreware team offers full cloud infrastructure management services, such as tracking, improvement, and servicing, to guarantee that your cloud landscape is reliable and functional.
                      </p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><MdOutlineSecurity /></div>
                          <h3>	Cloud Security:  </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>We provide powerful cloud security solutions to safeguard your data and apps from cyber-attacks, ensuring that your organization stays secure and in compliance with industry requirements.</p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><RiDeviceRecoverLine /></div>
                          <h3>	Cloud Backup and Disaster Recovery:   </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Our cloud backup and disaster recovery services enable organizations to secure their data and applications from loss or damage, assuring business continuity in the event of a disaster.</p>
                        </div>
                      </div>
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
