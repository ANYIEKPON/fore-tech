import BackImg from '@/components/backImg/backImg';
import React from 'react';
import styles from "../contact/contact.module.scss";

const page = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.wrapper}>
          <BackImg />
          <div  className={styles.headText}><h1>CONTACT US <br /> <span>OUR MISSION IS TO BRING YOU THE BEST SERVICES POSSIBLE</span></h1></div>
            <div className={styles.forContact}>
              <div className={styles.contat}>
                  <div className={styles.first}>
                    <h2>Contact Information</h2>
                    <ul>
                      <li>24 Mabinuori Street, Shangisha-Magodo, Lagos, Nigeria</li>
                      <li>info@forewaretechnologies.com</li>
                      <li>+234 816 0075 209</li>
                      <li>+234 818 0147 7980 </li>
                    </ul>
                  </div>
                  <div className={styles.second}>
                    <form>
                      <input type="text" placeholder="Name *" />
                      <input type="email" placeholder="Email *" />
                      <input type="number" placeholder="Phone" />
                      <input type="text" placeholder="Company" />
                      <textarea name="" id="" cols="30" rows="5">Message *</textarea>
                      <input type="submit" className={styles.btn} placeholder="SEND MESSAGE"/>
                    </form>
                  </div>
              </div>
            </div>
          
        </div>
    </div>
  )
}

export default page
