'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from '../encrypt/Encrypt.module.scss';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import encrypt from '../../../public/encrypt.png';

const Contact = () => {

  const [show, setShow] = useState(false);
  const location = typeof window !== "undefined" && window.location.pathname;
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


  useEffect(() => {
    
    const load = () => {
      if(location === "/contact-us"){ 
        setShow(false);
      } else{
        setShow(true);
      };
    }
    load();
  }, [show]);

  return (
    <div className={styles.encrypt}>
        <div className={styles.contactFrm}>
          <h3>CONTACT US</h3>
          <div className={styles.div}>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <div className={styles.formInput}>
                  <label>Enter Your Name *</label>
                  <input type="text" placeholder="Name *" name="name" />
                </div>
                <div className={styles.formInput}>
                  <label>Enter Your Email *</label>
                  <input type="email" placeholder="Email *" name="email" />
                </div >
                <div className={styles.formInput}>
                  <label>Type your Message Here *</label>
                  <textarea placeholder="Message" name="message" rows="5" cols="30"  className={styles.formInputMessage} />
                </div>
                <input className={styles.btn} type="submit" />
                <span className={styles.confirm}>{confirmText ? "Message Sent" : ""}</span>
            </form>
            
          </div>
        </div>
        <div></div>
        
       
    </div>
  )
}

export default Contact;