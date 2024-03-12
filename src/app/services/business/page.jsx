'use client'
import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
import { MdSystemUpdateAlt, MdOutlineAnalytics } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import styles from "../business/business.module.scss";
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
              <h1>Business Solutions and Applications</h1>
              <span>
              Our Business Solutions and Applications services are designed to improve your company&apos;s performance through tailor-made approaches and innovative technologies. Our team combines industry knowledge with technological expertise to provide tailored solutions that improve effectiveness efficiency, and profitability.<br />
              Our team of experts specialize in :
                  <ul>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><MdSystemUpdateAlt /></div>
                          <h3>	Enterprise Systems Deployment:</h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Utilize our experience in creating resilient enterprise systems that will help your organization. Our products are intended to improve communication, streamline procedures, and foster creativity within your company.</p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><MdOutlineAnalytics /></div>
                          <h3> Business Intelligence and Analytics: </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Using our advanced analytics and business intelligence tools, you can extract meaningful insights from your data. Our specialists can assist you in making well-informed choices, identifying trends, and uncovering growth and efficiency possibilities.
                      </p>
                        </div>
                      </div>
                    </li>
                    <li className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.iconn}>
                          <div className={styles.icons}><GiArtificialIntelligence /></div>
                          <h3>	Intelligent Systems:  </h3>
                        </div>
                        <div className={styles.writeUp}>
                        <p>Based on our experience in ERP systems, we can help you streamline your business processes. Our ERP systems, which range from inventory management to financial reporting, are intended to increase productivity, decrease costs, and assure industry compliance.We have the expertise in deployment and support of enterprise systems such as SAP, Microsoft ERP offerings, and Oracle solutions.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  We are dedicated to producing outcomes that surpass your expectations. Contact us today to learn more about how our Business Solutions and Applications may help you revolutionize your business.	
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page
