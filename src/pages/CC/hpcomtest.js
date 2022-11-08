import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HpcomTest(){
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
 
<p>
  In our communication with other iGEM teams, other teams also gave us suggestions to improve our project and indicated ways to solve some difficulties we encountered. Since we and SYSU-Software are both teams on the same track, we face similar problems in model construction and data processing, and some project experiences provided inspirations for both of us. And it was their SMOTE approach for data processing that gave us very great insight and solved a very confused issue for us. The details are described in detail in Collaborations.
 </p>
  <p>
  We also introduced our project to Prof. Guo, Prof. Du, Prof. Zhang, and Prof. Lv from the School of Life Sciences and Technology of Tongji University who recognized our project completion and gave valuable suggestions. They thought that there was still a long way between our software and the practical application of Acr proteins in synthetic biology, which gave us a clearer direction for the further extension of the iGEM project, and we also hoped that our project could make a contribution to the research of Acr.
</p>

<img src="https://static.igem.wiki/teams/4272/wiki/hpcomtest1.png" 
  alt="chat1" width="800vw" style={{ borderRadius:"10%"}}/>

 </Col>
</Row>

        </>

    );
}