import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Interview1(){
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
  <div class="sxit"></div>
  </Col>
  <Col md={{span:7}}>
  To gain insight into the specific views on gene editing and Acr proteins, we selected individual questionnaire completers for in-depth interviews. During the communication with them, we also found some possible problems in the application of Acr proteins. For example, it occurred to us that Acr applications are not yet widely developed probably because the number of discovered Acr proteins is too small, and more types of Acr proteins are needed to increase diversity. Moreover, the research on the application of Acr proteins in translation has just started, and although there is literature on its use, it is only an isolated case and has not yet been fully promoted, and it is not yet perfectly regulated in terms of really using Acr proteins to regulate and solve the problem of off-target effects of gene editing. In other words, Acr proteins have not been used in synthetic biology. This also makes us more interested in developing software that can mine Acr proteins in large quantities and thus expand their protein family, thus contributing to the rapid shaping of this research direction.
 </Col>
</Row>

        </>

    );
}