import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Email1(){
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
    <img src="https://static.igem.wiki/teams/4272/wiki/liuqi.png" 
    style={{width:200,height:200,borderRadius:"10%"}}
    alt="liuqi"/>
    <br/>
    <br/>
    <p style={{fontSize:"1.5vw"}}>Dr. Liu Qi</p>
    <p>Professor of Bioinformatics, School of Life Science and Technology, Tongji University (2013 -) Professor Liu Qi's main research direction is bioinformatics. The research fields are as follows: · Based on artificial intelligence, develop new theories, new models and new algorithms for the analysis of omic data, such as single-cell genomics, pharmacogenomics, immunology, and functional genomics, and improve the reuse value of public bioemics analysis. · Based on artificial intelligence and bionomics mining, it conducts application and transformation research in the fields of complex disease (tumor) target recognition, drug discovery, precise medication and precise immunotherapy. · Based on artificial intelligence and biomics mining, the optimization design of CRISPR gene editing system and the application and transformation research in precise gene therapy and other fields are carried out.</p>
  </Col>
  <Col md={{span:1}}>
  <div class="sx"></div>
  </Col>
  <Col md={{span:7}}>
  <p>
  After determining our initial idea, we talked with our advisor, Dr. Liu, about our needs and what we wanted to do since he had some attainments in the field of gene editing. During this process, our teacher also introduced us to many nice frontier directions at current, including PRIME editing, Cas modification, etc. Finally, the anti-CRISPR protein caught our attention. We also had a lively discussion by email on the current state of research in Anti-CRISPR and our research proposal, which led to the initial determination of our research topic.
  </p>
  <img src="https://static.igem.wiki/teams/4272/wiki/chat1.jpg" 
  alt="chat1" width="800vw" style={{ borderRadius:"10%"}}/>
  </Col>
</Row>

<Row>
  <Col >
<img src="https://static.igem.wiki/teams/4272/wiki/chat2.jpg" 
  alt="chat2" width="700vw" style={{ borderRadius:"10%",marginLeft:"3vw"}}/></Col>

  <Col>
  <img src="https://static.igem.wiki/teams/4272/wiki/chat3.jpg" 
  alt="chat2" width="550vw" style={{ borderRadius:"10%",marginLeft:0}}/>
  <br/><br/>
  <p style={{color:"#0072F9",width:"30vw",marginLeft:"1vw"}}>Here we share some of the contents of our correspondence. It can be seen that Professor Liu Qi has fully communicated and guided our entire project. We communicate in Chinese, and here we have a complete translation and explanation.</p>
  </Col>
</Row>

        </>

    );
}