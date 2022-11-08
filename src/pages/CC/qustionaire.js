import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Questionaire1(){
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
  <div class="sxqs"></div>
  </Col>
  <Col md={{span:7}}>
  To understand the current level of awareness of gene editing and the level of knowledge of Anti-CRISPR protein among current biological researchers as well as the use of related software, we designed a questionnaire and distributed and collected it on the internet. 154 questionnaires were obtained in total, most of which were from people with some biological research background, and the specific distribution can be seen in the figure below.
 
<br/><br/>
<img src="https://static.igem.wiki/teams/4272/wiki/qs1.png" 
  alt="qs1" width="800vw" style={{ borderRadius:"10%"}}/>
<br/><br/>
  <p>
  Among them, we found that almost all of them had experience with gene editing technology, but close to 60% of them had not heard of Anti-CRISPR protein at all, which made us realize that Anti-CRISPR may have a long way to go for popularization and further discovery. In addition, among those researchers who were aware of Anti-CRISPR, we further asked them about their use of Anti-CRISPR-related databases and software and found that it overlaps with our team's expectation that the ease of use of existing software is still insufficient and requires a higher knowledge base for users.

<br/><br/>
<img src="https://static.igem.wiki/teams/4272/wiki/qs2.png" 
  alt="qs2" width="800vw" style={{ borderRadius:"10%"}}/>
  </p>

<br/><br/>
  <p>
  For those who did not know about the Acr protein, we briefly introduced the function of Acr in the questionnaire and asked them whether this protein would be helpful for their experiments. The result was that more than 90% believed that it would be helpful, and nearly 50% of them believed that the protein would improve their experiments, which indicates that Acr protein has great potential and is a protein that deserves to be explored and utilized further.
  </p>
  <br/>

<img src="https://static.igem.wiki/teams/4272/wiki/qs3.png" 
  alt="qs3" width="800vw" style={{ borderRadius:"10%"}}/>
    <br/><br/>
 </Col>
</Row>

        </>

    );
}