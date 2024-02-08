import React from 'react';
import Image from 'next/image';
import analytcs  from '../../../public/analytics.ico'
import website  from '../../../public/website.ico'
import marketing  from '../../../public/marketing.ico'
import { FcCustomerSupport } from "react-icons/fc";
import styles from './services.module.scss';
import Link from 'next/link';




const Service = () => {
  return (
    <div className={styles.service}>
        <div className={styles.top}>
            <span>Our Services</span>
            <h1>How does it work?</h1>
            <p>Intelligent systems are at the forefront of all that we do at Foreware 
                Technologies. Our key focus is to find meaningful ways to use technologies
                 to assist build a sustainable environment for everyone, anywhere. Please 
                 click below to read more about the technology solutions behind our offerings.
                  Kindly get in touch with us and let&#39;s discuss how your organization can leverage 
                  technological tools for seamless business operation. 
            </p>
        </div>
        <div className={styles.down}>
            <div className={styles.first}>
                {/* <FcCustomerSupport className={styles.firstImg} /> */}
                <h3>Product Support</h3>
                <p>We provide 24x7 support</p>
                <Link href="/services" className="link"><span className={styles.learn}>+ Learn More</span></Link>
            </div>
            <div className={styles.first}>
            {/* <FcCustomerSupport className={styles.firstImg} /> */}
                <h3>Migration</h3>
                <p>Keep your fears at bay</p>
                <Link href="/services" className="link"><span className={styles.learn}>+ Learn More</span></Link>
            </div>
            <div className={styles.first}>
            {/* <FcCustomerSupport className={styles.firstImg} /> */}
                <h3>Managed Services</h3>
                <p>Cloud Management made easy</p>
                <Link href="/services" className="link"><span className={styles.learn}>+ Learn More</span></Link>
            </div>
        </div>
        <Link className="link" href="/services"><button>More Features</button></Link>
    </div>
  )
}

export default Service;