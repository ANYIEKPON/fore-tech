import React from 'react';
import styles from '../footer/footer.module.scss';
import logo from "../../../public/slideFore.PNG"
import Image from 'next/image';
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.one}>
              <div className={styles.chooseUs}>Why Foreware</div>
              <div className={styles.footerText}>
                  <p>
                  At Foreware Technologies, we&apos;re all about helping businesses thrive in today&apos;s digital landscape. Our team is passionate about harnessing the power of technology to drive innovation and...<Link href="/about-us" className="link"> <span>Read More</span></Link>
                  </p>
                </div>
          </div>
          <div className={styles.two}>
            <h4>Services</h4>
            <div className={styles.servics}>
                <span>Software Development</span>
                <span>Cloud Services</span>
                {/* <span>Training</span> */}
                <span>Data Service and AI</span>
                <span>Digital Advisory and Training</span>
                {/* <span>Bussiness Solutions</span> */}
                <Link href="/services" className="link" style={{color: "#e48913"}}><span>More</span></Link>
            </div>
          </div>
          <div className={styles.two}>
            <h4>Pages</h4>
            <div className={styles.servics}>
                <span>Home</span>
                <span>About Us</span>
                <span>Services</span>
                <span>Industries</span>
                <span>Contact Us</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; Copyright 2023 - <span>Foreware</span></p>
          {/* <span className={styles.infomail}>info@forewaretechnologies.com</span> */}
          <div className={styles.socialMedia}>
            <div className={styles.socialIcon}><LuFacebook /></div>
            <div className={styles.socialIcon}><RiTwitterXFill /></div>
            <div className={styles.socialIcon}><FaLinkedinIn /></div>
            <div className={styles.socialIcon}><FaGooglePlusG /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;