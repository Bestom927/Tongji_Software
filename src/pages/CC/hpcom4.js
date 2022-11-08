import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hpcom4(){
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
  When our software was initially built, we invited some bioinformatics students to help us test it and collect feedback from them. To our great surprise, we collected  a lot of sincere and useful suggestions that gave us more inspiration to improve the software experience and apply more optimization. For example, we used NCBI's Accession Number as input according to user feedback. Click on <a href="https://2022.igem.wiki/tongji-software/engineering">Engineering Success</a> for details. We have read and responded to each suggestion carefully, hoping to change the perspective by communicating with users, and optimizing our software from their point of view. Sincerely thanks to those who helped us with testing, we would not have the final version of our software without them.

<img src="https://static.igem.wiki/teams/4272/wiki/hpcomtest2.png" 
  alt="chat1" width="800vw" style={{ borderRadius:"10%"}}/>

<img src="https://static.igem.wiki/teams/4272/wiki/hpcomtest3.png" 
  alt="chat1" width="800vw" style={{ borderRadius:"10%"}}/>
  </Col>
</Row>
        </>

    );
}
