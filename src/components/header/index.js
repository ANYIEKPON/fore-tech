'use client'
import { React, useState, useEffect } from 'react';
import styles from '../header/header.module.scss';
import Image from 'next/image';
import pic from "../../../public/nobgColor.png";
import { CiMenuFries } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from 'next/link';

const Header = () => {
const [openNav, setOpenNav] = useState(false);
const [openSubMnu, setSubMenu] = useState(false);
// const [active, setActive] = useState(false);

const handleClose = () => {
  setOpenNav(!openNAv);
}

// useEffect(() => {
//   const close = () => {
//     window.addEventListener("click", handleClose)
//   }
//   close();
// })

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
          <div className={styles.nav_logo}>
              <Link href="/" className="link"><Image src={pic} alt="logo" className={styles.img} /></Link>
          </div>
          <div className={openNav ? styles.showMenu : styles.nav_menu}>
            <Link href="/" className="link" onClick={handleClose} ><span>Home</span></Link>
            <Link href="/about-us" className="link" onClick={handleClose}><span>About Us</span></Link>
            <Link href="/services" className="link" onClick={handleClose}><span>Services</span></Link>
            {/* <div className={styles.submenu}>
              <span className={styles.menuHover} onClick={() => setSubMenu(!openSubMnu)}>Services {openSubMnu ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              <div className={openSubMnu ? styles.subnav : styles.noSubnav}>
                <Link href="/services" className="link"><span>Web Development</span></Link>
                <Link href="/services" className="link"><span>ERP Solutions</span></Link>
                <Link href="/services" className="link"><span>Cloud Operations</span></Link>
              </div>
            </div> */}
            <Link href="/" className="link" onClick={handleClose}><span>Industries</span></Link>
            {/* <Link href="/" className="link"><span>Why Choose Us</span></Link> */}
            <Link href="/contact-us" className="link" onClick={handleClose}><span>Contact Us</span></Link>
            {
              openNav && <div className={styles.socialMedia}>
              <div className={styles.socialIcon}><LuFacebook /></div>
              <div className={styles.socialIcon}><RiTwitterXFill /></div>
              <div className={styles.socialIcon}><FaLinkedinIn /></div>
              <div className={styles.socialIcon}><FaGooglePlusG /></div>
              <span className={styles.info}>info@forewaretechnologies.com</span>
            </div>
            }
          </div>
          <div onClick={() => setOpenNav(!openNav)}  className={styles.breadMenu}>{openNav ? <MdClose size={25} /> : <CiMenuFries size={25} />}</div>
      </div>

    </div>
  )
}

export default Header;