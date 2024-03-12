import BackImg from '@/components/backImg/backImg';
import React from 'react';
import { RiMailSendLine } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { MdPhoneCallback } from "react-icons/md";
import styles from "../contact/contact.module.scss";

const page = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.wrapper}>
          <BackImg />
          
            <div className={styles.forContact}><div  className={styles.headText}><h1>CONTACT US <br /> </h1></div>
              <div className={styles.contat}>
                  <div className={styles.first}>
                    <h2>Contact Information</h2>
                    <ul>
                      <li><div className={styles.list}><RiMailSendLine /><span>Nurudeen Street, Anifowoshe, Ikeja, Lagos, Nigeria</span></div></li>
                      <li><div className={styles.list}><ImLocation2 /><span>info@forewaretechnologies.com</span></div></li>
                      <li><div className={styles.list}><MdPhoneCallback /><span>+234 806 6964 385</span></div></li>
                    </ul>
                  </div>
                  <div className={styles.second}>
                    <form>
                      <input type="text" placeholder="Name *" />
                      <input type="email" placeholder="Email *" />
                      <input type="number" placeholder="Phone *" />
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


{/* <span>OUR MISSION IS TO BRING YOU THE BEST SERVICES POSSIBLE</span> */}