import React from 'react'
import style from './Navbar.module.css'
import { AiOutlineSearch} from "react-icons/ai";
import {HiBars2} from "react-icons/hi2"
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"


const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.abStudio}>
        <div> <span className={style.span1}>AB</span> <span>-Studi</span></div>
        <div><div></div></div>
      </div>
      <div className={style.about}>
        <div>PROJECT</div>
        <div>ABOUTUS</div>
        <div>CONTACTS</div>
        <div>
                    <a href="https://github.com/pintu8328" target="_blank">
                      <FaGithub className="headerIcon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/pintu-gouda-935231237/"
                      target="_blank"
                   
                    >
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </div>
      </div>
      <div className={style.search}>
        <div><AiOutlineSearch/></div>
        <div><HiBars2/></div>
      </div>
    </div>
  )
}

export default Navbar