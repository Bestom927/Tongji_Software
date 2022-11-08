import React from 'react'
import { PromotionVideo, GameEducation, Brochure } from '../YX/Yangxin';
import Semicircle from '../../components/Semicircle/Semicircle';
import Support from '../../../src/components/Support/Support.js'
import WhatToDo from '../../components/WhatToDo/WhatToDo';
import CpisprSystem from '../../components/CpisprSystem/CpisprSystem';
import ProblemToBeSolved from '../../components/ProblemToBeSolved/ProblemToBeSolved';
import WhyImportant from '../../components/WhyImportant/WhyImportant';
import Software from '../../components/SoftwareDemo/SoftwareDemo';
const Home = () => {
    return (
        <>

            <h1 style={{
                color:"white",
                marginTop:"30vh",
                marginLeft:"10vw",
                position:"absolute",
                fontSize:"100px",
                textShadow:"0px 0px 10px"
            }}>AcrGPS
            <div style={{
                color:"white",
                fontSize:"60px",
            }}>Anti-CRISPR Genome-<br/>based Predicting <br/>Software</div>

            </h1>
            
            <img src="https://static.igem.wiki/teams/4272/wiki/bg-home.jpg"
            style={{width:"100%",
            height:"90vh"}} alt="home-bg"></img>
            <CpisprSystem/>
            <ProblemToBeSolved/>
            <WhatToDo />
            
            <Semicircle />
            
            
            <WhyImportant />
            <Software />

            <PromotionVideo /><br /><br />
            <GameEducation />
            <Brochure />

            <Support/>
        </>
    )
}

export default Home;