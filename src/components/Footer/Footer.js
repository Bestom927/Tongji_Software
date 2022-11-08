import React from 'react'
import './Footer.css'
import { FaGitlab } from "react-icons/fa";
const Footer = () => {

    return (
        <div id="footer" >
            <div id="title">
                Contact us
            </div>
            
            <div id="contact_info">
                <div style={{paddingTop:"20px"}}>


                    
                  <a href="https://gitlab.igem.org/2022/tongji-software">
                    <img src="https://static.igem.wiki/teams/4272/wiki/igem.png"
                    style={{width:"80px"}} alt="logo"></img>
                    </a>
                    <a href="https://gitlab.igem.org/2022/tongji-software" style={{color:"white",}}>
                      <FaGitlab style={{width:"20px"}}/>https://gitlab.igem.org/2022/tongji-software
                    </a>
                    <br/>
                    <div style={{color:"white"}}>tongjisoftware2022@163.com</div>
                </div>
            </div>
        </div>
    )
} 

export default Footer