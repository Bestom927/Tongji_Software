
import React from 'react'
import './CpisprSystem.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const CpisprSystem = () => {
  return (
    <div>
    <div id='problem_bg1'></div>
     <Col  md={{span:10,offset:1}} style={{marginTop:"10vh",marginBottom:"10vh"}} >
        <h1  
        style={{color: "#0176FF",
        fontSize: "5vmin",
        fontWeight: "bolder",}}>
            CRISPR/Cas system
        </h1>
        <div  style={{color: "#42597A",marginLeft:"3%",fontSize:"large"}}>
            An existing gene therapy method.
        </div>
        <br/>
        <Container id="greyGround" style={{width: "100vw",height:"50vw"}}>
            <Row>
                <Col md={{span:3}} className='col_cas_system'>
                <div className="white-box" style={{width: "20vw",height:"20vw"}}>
                        
                        <img src="https://static.igem.wiki/teams/4272/wiki/programmability.png"
                            style={{height:"8vw"}} alt="WBP1" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}>Programmability</div>
                        <div className="white-box-content" >
                            <div className="box-content-detail-sys">
                                <div style={{width:"15vw"}}>
                                Cas has switchable nuclease activity and can also easily redirect the enzyme by changing the sgRNA targeting region or spacer sequence.
                                </div>
                            </div>
                        </div>
                </div>
                </Col>
                <Col md={{span:3}} className='col_cas_system'>
                <div className="white-box" style={{width: "20vw",height:"20vw"}}>
                        
                        <img src="https://static.igem.wiki/teams/4272/wiki/diversity.png"
                            style={{height:"8vw"}} alt="WBP1" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}>Diversity</div>
                        <div className="white-box-content" >
                            <div className="box-content-detail-sys">
                                <div style={{width:"15vw"}}>
                                Bacteria and archaea have evolved many functionally distinct CRISPR-Cas systems that have become a variety of gene editing tools in synthetic biology.
                                </div>
                            </div>
                        </div>
                </div>
                </Col>
                <Col md={{span:4}} className='col_cas_system'>
                    <div className="white-box" style={{width: "32.5vw",height:"44vw"}}>
                        <div  >
                            <img src="https://static.igem.wiki/teams/4272/wiki/home-thing1.png"
                            style={{height:"30vw"}} alt="WBP1" />
                        </div>
                        <Col md={{span:4,offset:8}}>
                             <p style={{fontSize:"small"}}>
                           </p>
                        </Col>
                    </div>
                </Col>
                <Col className='col_cas_system'></Col>
            </Row>
            <Row style={{marginTop:"20vw"}}>
            <Col md={{span:3}} className='col_cas_system'>
                <div className="white-box" style={{width: "20vw",height:"20vw"}}>
                        
                        <img src="https://static.igem.wiki/teams/4272/wiki/precision.png"
                            style={{height:"8vw"}} alt="WBP1" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}>Precision</div>
                        <div className="white-box-content" >
                            <div className="box-content-detail-sys">
                                <div style={{width:"15vw"}}>
                                Cas9 and Cas12a are RNA-guided nucleases that can induce genome editing by triggering dsDNA break repair at a specific site.
                                </div>
                            </div>
                        </div>
                </div>
                </Col>
                <Col md={{span:3}} className='col_cas_system'>
                <div className="white-box" style={{width: "20vw",height:"20vw"}}>
                        
                        <img src="https://static.igem.wiki/teams/4272/wiki/efficacy.png"
                            style={{height:"8vw"}} alt="WBP1" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}> Efficacy</div>
                        <div className="white-box-content" >
                            <div className="box-content-detail-sys">
                                <div style={{width:"15vw"}}>
                                Cas assembles the expected guide RNA only through specific recognition of crRNA and its interaction with tracrRNA.
                                </div>
                            </div>
                        </div>
                </div>
                </Col>
                <Col md={{span:3}} className='col_cas_system'>
                <div className="white-box" style={{width: "20vw",height:"20vw"}}>
                        
                        <img src="https://static.igem.wiki/teams/4272/wiki/wideness.png"
                            style={{height:"8vw"}} alt="WBP1" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}>Wideness</div>
                        <div className="white-box-content"  >
                            <div className="box-content-detail-sys">
                                <div style={{width:"15vw"}}>
                                Cas9 and Cas12a work in a wide range of cell types and organisms.
                                </div>
                            </div>
                        </div>
                </div>
                </Col>
                <Col className='col_cas_system'>13</Col>

            </Row>
        </Container>
     </Col>
    </div>
  )
}

export default CpisprSystem