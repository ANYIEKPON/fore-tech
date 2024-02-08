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
              <div className={styles.chooseUs}>Why Choose Us</div>
              <div className={styles.footerText}>
                  <p>
                  We understand that your company depends on the capabilities of  ERP and Cloud Solutions of your IT systems. Foreware Technologies delivers IT Solutions services such...<Link href="/why-choose-us" className="link"> <span>Read More</span></Link>
                  </p>
                </div>
          </div>
          <div className={styles.two}>
            <h4>Services</h4>
            <div className={styles.servics}>
                <span>Web Develoment</span>
                {/* <span>Co-working</span> */}
                <span>Agency</span>
                <span>Apps</span>
                <Link href="/services" className="link" style={{color: "#e48913"}}><span>More</span></Link>
            </div>
          </div>
          <div className={styles.two}>
            <h4>Pages</h4>
            <div className={styles.servics}>
                <span>About Us</span>
                <span>Services</span>
                <span>Contact Us</span>
            </div>
          </div>
          {/* <div className={styles.three}>
              <h4>Newsletter</h4>
              <p>
                Signup for our newsletter to get the 
                latest news, updates and special offers in your inbox.
              </p>
              <div>
                <input placeholder="enter your mail" />
                <button><BsArrowRight /></button>
              </div>
              <span>Your email is safe with us. We don&apos;t spam.</span>
          </div> */}
          {/* <Link className="link" href="/contact-us"><button className={styles.btn}>Contact Us</button></Link> */}
        </div>
        <div className={styles.bottom}>
          <p>&copy; Copyright 2023 - <span>Foreware</span></p>
          <span className={styles.infomail}>info@forewaretechnologies.com</span>
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