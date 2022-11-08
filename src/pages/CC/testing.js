import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Testing1(){
    return(
        <>
        <br/>
<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#0072F9",fontSize:"38px"}}>Difficulties & Solutions & Details</h2>
</Col>
</Row>
<br/>
<Row>
  <Col md={{offset:1,span:2}}>
     </Col>
  <Col md={{span:1}}>
  <div class="sxtest"></div>
  </Col>
  <Col md={{span:7}}>
 
After reviewing the relevant literature, we found that there are some existing Acr-related databases and software, such as Anti- CRISPRdb, AcRanker, and ACRFINDER, and we wanted to gain insight into their strengths and weaknesses, so we conducted test runs for different software. Finally, we found that most of the existing prediction software is based on protein sequences, and there is still room for improvement in ease of use, so we believe that it is feasible to develop software for easy and efficient mining of novel Acr proteins from the genome.
<br/><br/>
<img src="https://static.igem.wiki/teams/4272/wiki/test1.png" 
  alt="chat1" width="800vw" style={{ borderRadius:"10%"}}/>
 </Col>
</Row>

        </>

    );
}