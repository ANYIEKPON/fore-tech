'use client'

import BackImg from '@/components/backImg/backImg';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RiMailSendLine } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { MdPhoneCallback } from "react-icons/md";
import styles from "../contact/contact.module.scss";

const page = () => {

  const form = useRef();
  const [confirmText, setConfirmText] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_aegynk8', 'template_3k4e2rp', form.current, {
      publicKey: '9n28nshroMNRka-HJ',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setConfirmText(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name *" name="name" />
                        <input type="email" placeholder="Email *" name="email" />
                        <input type="number" placeholder="Phone *" name="phone" />
                        <input type="text" placeholder="Company" name="company" />
                      <textarea placeholder="Message *" name="message" id="" cols="30" rows="5" />
                      <input type="submit" value="Send"  className={styles.btn} />
                    </form>
                    <span className={styles.confirm}>{confirmText ? "Message Sent" : ""}</span>
                  </div>
              </div>
            </div>
          
        </div>
    </div>
  )
}

export default page


{/* <span>OUR MISSION IS TO BRING YOU THE BEST SERVICES POSSIBLE</span> */}