'use client'
import { React, useState, useEffect } from 'react';
import styles from '../header/header.module.scss';
import Image from 'next/image';
import pic from "../../../public/latest_Logobg.png";
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
const [active, setActive] = useState({
  id : 'One'
});

const [screenSize, setScreenSize] = useState(100);





const handleClose = () => {
  setOpenNav(!openNAv);
}
const handleClosesub = () => {
  setSubMenu(!openSubMnu)
}

const handleOpen = (e) => {
    setActive({
      id: e.currentTarget.id
    })
  setSubMenu(!openSubMnu)
}

const sizeEvent = () => {
  setScreenSize(window.innerWidth);
}

useEffect(() => {

  window.addEventListener('resize', sizeEvent);

  return () => {
    window.removeEventListener('resize', sizeEvent);
  }

}, [screenSize]);

useEffect(() => {
  if(screenSize > 1024) return setOpenNav(false);
}, [screenSize])

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
          <div className={styles.nav_logo}>
              <Link href="/" className="link"><Image src={pic} alt="logo" className={styles.img} /></Link>
          </div>
          <div className={openNav ? styles.showMenu : styles.nav_menu}>
            <Link href="/" className="link" onClick={handleClose} ><span>Home</span></Link>
            <Link href="/about-us" className="link" onClick={handleClose}><span>About Us</span></Link>
            {/* <Link href="/services" className="link" onClick={handleClose}><span>Services</span></Link> */}
            <div className={styles.submenu}>
              <span id="One" className={styles.menuHover} onClick={(e) => handleOpen(e)}>Services { active.id === "One" && openSubMnu ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              <div className={active.id === "One" && openSubMnu ? styles.subnav : styles.noSubnav}>
                <Link href="/services/softwaredev" className="link" onClick={handleClosesub}><span>Software Development</span></Link>
                <Link href="/services/cloudservices" className="link" onClick={handleClosesub}><span>Cloud Services</span></Link>
                {/* <Link href="/services/business" className="link" onClick={handleClosesub}><span>Bussiness Application</span></Link> */}
                <Link href="/services/business" className="link" onClick={handleClosesub}><span>Business Solutions</span></Link>
                <Link href="/services/dataservices" className="link" onClick={handleClosesub}><span>Data Services and AI</span></Link>
                <Link href="/services/digitaltraining" className="link" onClick={handleClosesub}><span>Digital Advisory and Training</span></Link>
                {/* <Link href="/services/digitaltraining" className="link" onClick={handleClosesub}><span>Training</span></Link> */}
              </div>
            </div>
            {/* <Link href="/" className="link" onClick={handleClosesub} onClick={handleClosesub}><span>Industries</span></Link> */}
            <div className={styles.submenu}>
              <span id="Two" className={styles.menuHover} onClick={(e) => handleOpen(e)}>Industries { active.id === "Two" && openSubMnu ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              <div className={active.id === "Two" && openSubMnu ? styles.subnav : styles.noSubnav}>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Manufacturing</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Retail and FMCG</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Financial Services</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Health Care</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Oil and Gas</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Automotive</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Aviation</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Engineering</span></Link>
                <Link href="/services" className="link" onClick={handleClosesub} ><span>Logistics and Maritime</span></Link>
              </div>
            </div>
            <Link href="/contact" className="link" onClick={handleClose}><span>Contact Us</span></Link>
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