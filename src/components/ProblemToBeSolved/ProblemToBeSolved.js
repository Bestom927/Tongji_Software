
import React from 'react'
import './ProblemToBeSolved.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ProblemToBeSolved = () => {
  return (
    <div>
        <div id='problem_bg2'></div>
        <Container>
            <Row>
                <Col  md={{span:5,offset:0}} >
                    <h2  
                    style={{color: "white",
                    fontSize: "3vw",
                    fontWeight: "bolder",}}>
                        Problems of<br/> CRISPR/Cas system<br/> to be solved:
                    </h2>
                </Col>
                
                <Col md={{span:6,offset:0}} style={{marginTop:"5vh",fontSize:"larger"}}>
                <p>CRISPR Cas system is a set of commonly used gene editing tools, but in practical application, the lack of regulatory system will lead to a series of unpredictable problems:</p>
                </Col>

                <Col md={{span:3,offset:5}} style={{paddingLeft:"1vw",color:"grey"}}>
                    <h4 style={{fontWeight:"bolder"}}>  Off-target</h4>
                    <p>
                        It may cause the sequence outside the expected site to be edited.
                    </p>
                    <h4 style={{fontWeight:"bolder"}}>  Interruption</h4>
                    <p>
                    It interferes with other activities by combining with DNA for too long.
                    </p>
                </Col>
                <Col md={{span:3}} style={{background:"#EEF3F5",color:"#0176FF",height:"10vh",borderRadius:"2vh"}}>
                    <h4 style={{fontWeight:"bolder"}}> Not for every individual</h4>
                    <p>It may behave differently in different individual genomes</p>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default ProblemToBeSolved