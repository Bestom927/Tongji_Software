import React from 'react';
import { useState } from 'react';

import './Yangxin.css';
import { Col,Row } from 'react-bootstrap';

const PromotionVideo = () => {
    return (
        <>
        <Col md={{offset:0}}>
            <h1 className='title'>Promotion Video</h1>
            <br /></Col>
            <Col md={{offset:1,span:6}}>
            <div className='description'>Explain our project to the community and other audiences in an easy to understand way.</div>
        </Col>
            <br />

            <div className='videoInfo'>
                <div className='video'>
                    <iframe title="Tongji_Software: Anti-Protein: Make CRISPR System Great Again (2022) - Project Promotion [English]" width="560" height="315" src="https://video.igem.org/videos/embed/56a0d3e2-646b-42ed-8f53-dbb5c43678b0"
                        frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"
                        style={{ width: "80vw", height: "80vh" }}></iframe>
                </div>
            </div>

            <br />
            <Col md={{offset:1}}>
            <div className='detail'>
                <span className='detailTitle'><img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
                style={{ width: "3vw", marginTop: "-1vw" }} alt="model" /> Video concept</span>
                <br/><br/>
                <div className='detailText'>
                    This video starts with the basic characteristics of genes, the current difficulties faced by gene editing and the solutions. Finally, it introduces the anti crispr we choose and how to find and select, and explains our core drivers and why we think it is so important that it is worth exploring.
                </div>
            </div>
            </Col>
            <br /><br /><br/><br/>

        </>
    )
}

const GameEducation = () => {
    return (
        <>

        
    <Row>
      <Col md={{offset:1,span:8}}>
      <h1 className='head2' style={{
            color:"#2e77e5",
         }}
        >Game & Education</h1>
      </Col>
         
      <a style={{
                  textAlign:"center",
                  marginRight:"0",
                  background:"#2e77e5",
                  height:"4vh",
                  width:"8vw",
                  borderRadius:"5vw",
                  color:"white",
                  paddingTop:"0.5vh",
                  fontSize:"2vh",
                  textDecoration:"none",
                  marginTop:"6vh"
              }}href="https://2022.igem.wiki/tongji-software/communication">More Info
            </a>
      </Row>
      <Col md={{span:7,offset:1}}>
       <p style={{fontSize:"x-large"}}>An education game designed for 6-18 students to help them knowing the basic knowledge of synthetic biology and the relationship between the several roles.
                
       </p>
      </Col>


            <br /><br />
            <div className='videoInfo'>
                <div className='video'>
                        <iframe title="Tongji_Software: software game (2022) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/fe1f87b2-47a4-475f-98da-3eff4aa54737" 
                        frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"
                        style={{ width: "80vw", height: "80vh" }}></iframe>
                </div>
            </div>
            <br />

            <div className='GameDes'>
                <div className='concept'>
                    <span className='conceptTitle'>Game concept</span>
                    <div className='conceptText'>
                        This game is based on the project promoted by IGEM team tongji_Software.The project, the development of anti-CRISPR protein recognition and discovery tool, hopes to show the function and mechanism of ACR protein and its discovery significance to young audiences aged 6-18 years in a simple and popular way.
                        In terms of game implementation, through the simulation of CRISPR protein, ribosome, ACR protein and other elements, this game shows how the ribosome generates ACR protein in the face of CRISPR protein and antagonizes it, which reflects the biological characteristics of ACR protein and at the same time is interesting.
                    </div>
                </div>

                <div className="hori-line-div">
                    <div className="hori-line"></div>
                </div>

                <div className='logic'>
                    <span className='logicTitle'>Game logic</span>
                    <div className='logicText'>
                        This game is a transformation of the traditional tower defense game, including three main elements: CRISPR protein, ribosome, ACR protein. The CRISPR protein is the foreign "invasions", which take a fixed route to the destination and destroy a specific gene sequence (used for the player's HP), while the ribosome is constructed by the player and placed in a selected position to generate the ACR protein, which automatically listens for nearby CRISPR proteins and tracks them to cause damage. Its task is to prevent CRISPR proteins from damaging the gene sequence.
                        In the game, free ribosomes are randomly generated in the map. Players need to click to collect the randomly generated free ribosomes, and then deploy the ribosomes to specific locations according to the actual situation to block the invasion of CRISPR protein. The time for each deployed ribosome to generate ACR protein is only 15 seconds, and the deployed ribosome will disappear after 15 seconds. Therefore, players need to make rational use of resources and take appropriate strategies to complete the protection of gene sequences.
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}

const Brochure = () => {
    const [isHovering0, setIsHovering0] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);

    const handleMouseEnter0 = () => {
        setIsHovering0(true);
    };
    const handleMouseLeave0 = () => {
        setIsHovering0(false);
    };
    const handleMouseEnter1 = () => {
        setIsHovering1(true);
    };
    const handleMouseLeave1 = () => {
        setIsHovering1(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovering2(true);
    };
    const handleMouseLeave2 = () => {
        setIsHovering2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovering3(true);
    };
    const handleMouseLeave3 = () => {
        setIsHovering3(false);
    };

    return (
        <>
            <div className='Brochure'>
                <div className='BrochureRec'>
                    <div className='BrochureTitle'>Education tool kit: Brochure</div><br />
                    <div className='BrochureText'>We use the methods of visualizing knowledge and personifying biological knowledge to draw our knowledge and content into volumes, print, bind, and put them into the campus classroom as an educational tool for children aged 6-18 years to popularize science, and make speeches and classroom teaching on this basis.</div>
                    <br />

                    <div className='BroImgs'>
                        <div
                            className='BrochureDiv'
                            onMouseEnter={handleMouseEnter0}
                            onMouseLeave={handleMouseLeave0}>

                            <div className={isHovering0 ? 'BrochureImg1' : 'BrochureImg'}>
                                <img
                                    src={require('../../assets/Brochure01.png')}
                                    alt='Brochure01.png'
                                />
                            </div>
                        </div>
                        <div
                            className='BrochureDiv'
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <div className={isHovering1 ? 'BrochureImg1' : 'BrochureImg'}>
                                <img
                                    src={require('../../assets/Brochure02.png')}
                                    alt='Brochure02.png'
                                />
                            </div>
                        </div>
                        <div
                            className='BrochureDiv'
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <div className={isHovering2 ? 'BrochureImg1' : 'BrochureImg'}>
                                <img
                                    src={require('../../assets/Brochure03.png')}
                                    alt='Brochure03.png'
                                />
                            </div>
                        </div>
                        <div
                            className='BrochureDiv'
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <div className={isHovering3 ? 'BrochureImg1' : 'BrochureImg'}>
                                <img
                                    src={require('../../assets/Brochure04.png')}
                                    alt='Brochure04.png'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='imgWords'>
                        <div className='imgWord' style={{ opacity: isHovering0 ? '100%' : '0%' }}>What is gene?</div>
                        <div className='imgWord' style={{ opacity: isHovering1 ? '100%' : '0%' }}>Gene editing</div>
                        <div className='imgWord' style={{ opacity: isHovering2 ? '100%' : '0%' }}>Stimulate interest</div>
                        <div className='imgWord' style={{ opacity: isHovering3 ? '100%' : '0%' }}>Tool kit</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export { PromotionVideo, GameEducation, Brochure }
export default PromotionVideo