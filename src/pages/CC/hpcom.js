import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hpcom(){
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
  After the initial determination of our design plan, we further communicated with Dr. Liu, hoping that he could evaluate the feasibility of our plan. Dr. Liu affirmed our idea and thought our project was innovative. He also pointed out some difficulties we might face, such as lack of data for our completion. This was a very great reference value for our project. With Dr. Liu's suggestion, we also changed part of our plans to make them more practical. At the same time, he also gave us guidance on the features and model selection in model training, which was very useful for our subsequent modeling process.
   </p>
  <img src="https://static.igem.wiki/teams/4272/wiki/hpcom1.jpg" 
  alt="hpc1" width="800vw" style={{ borderRadius:"10%"}}/>
<img src="https://static.igem.wiki/teams/4272/wiki/hpcom2.jpg" 
  alt="hpc2" width="700vw" style={{ borderRadius:"10%",marginLeft:"3vw"}}/>
  </Col>
</Row>




        </>

    );
}