import BackImg from '@/components/backImg/backImg';
import Image from 'next/image';
import React from 'react';
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
              <h1>Business Solution and Application</h1>
              <span>
              Our Business Solutions and Applications services are designed to improve your company&apos;s performance through tailor-made approaches and innovative technologies. Our team combines industry knowledge with technological expertise to provide tailored solutions that improve effectiveness, effectiveness, and profitability.<br />
              Our team of experts specializes in :
                  <ul>
                    <li className={styles.list}>
                      <h3>	Enterprise Systems Development:</h3>
                      <p>Utilize our experience in creating resilient enterprise systems that will help your organization. Our products are intended to improve communication, streamline procedures, and foster creativity within your company.</p>
                    </li>
                    <li  className={styles.list}>
                      <h3> Business Intelligence and Analytics: </h3>
                      <p>Using our advanced analytics and business intelligence tools, you can extract meaningful insights from your data. Our specialists can assist you in making well-informed choices, identifying trends, and uncovering growth and efficiency possibilities.
                      </p>
                    </li>
                    <li  className={styles.list}>
                      <h3>	Intelligent Systems:  </h3>
                      <p>Using our extensive ERP systems, you can streamline your business processes. Our ERP systems, which range from inventory management to financial reporting, are intended to increase productivity, decrease costs, and assure industry compliance.</p>
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
