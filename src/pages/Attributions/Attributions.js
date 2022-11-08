import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import '../CC/cc.css';
import CheckboxIcon from '../CC/checkbox';
import Star from '../CC/star';
import NameCard from '../CC/namecard';
import QuotUp from '../CC/syh';
import QuotDown from '../CC/xyh';


function Attributions (props)  {

const [card,setCard]=useState("biology");
console.log(card);
    return (
        <div className='attributions-container'>
       
      <h1 style={{color:"white" ,
                fontSize:"80px",
                fontWeight:"bold",
                marginTop:"50vh",
                marginLeft:"60vw",
                position:"absolute",
                textShadow:"0px 0px 10px #0072F9"}}> Attributions</h1>
     
     <img src="https://static.igem.wiki/teams/4272/wiki/bg-attri.jpg" 
            style={{width:"100%",height:"90vh"}} alt="attr-page-img1" />
      <br/>

      <Row>
      <Col md={{span:8,offset:1}}><br/>
       <p style={{fontSize:'18px'}}>Our team members come from the Academy of Life Sciences and Technology, the Academy of Design and Innovation, the Academy of Software and the Academy of Mathematical Sciences. All of them assisted each other throughout the project and actively participated in all parts of the work. At the same time, we were able to exchange ideas and do some brainstorming with new inspirations. Each member was very important, and a indivisible part of our team family.</p>
      <br/>
       <Row>
        <Col xs={3}>
        <br/>
        {
        card==="biology"&&
        <Button size="lg"   className="chosenButton"  variant="outline-light">
          <Star/>&nbsp;&nbsp; Biology&nbsp;&nbsp; </Button>
        }  

        {
        card!=="biology"&&
        <Button size="lg" className="defaultButton" variant="outline-light"
        onClick={()=>{if(card!=="biology")setCard("biology");}}><Star/>&nbsp;&nbsp; Biology&nbsp;&nbsp; </Button>
        }  

        <br/>  <br/>

        {
          card==="software"&&<Button size="lg" className="chosenButton" variant="outline-light">
            <Star/>&nbsp;&nbsp; Software</Button>
         }

        {
          card!=="software"&&<Button size="lg" className="defaultButton" variant="outline-light"
          onClick={()=>{if(card!=="software")setCard("software");}}><Star/>&nbsp;&nbsp; Software</Button>
         }


        <br/>  <br/>
        {
          card==="design"&&<Button size="lg" className="chosenButton" variant="outline-light"
          ><Star/>&nbsp;&nbsp; Design&nbsp;&nbsp;&nbsp;</Button>
         }
        {
          card!=="design"&&<Button size="lg" className="defaultButton" variant="outline-light"
          onClick={()=>{if(card!=="design")setCard("design")}}><Star/>&nbsp;&nbsp; Design&nbsp;&nbsp;&nbsp;</Button>
         }

    </Col>
       <Col xs={6}>
        <Card border="light"  style={{ width: '40rem' ,padding:"20 20 20 20"}} className='card'> 
      <Card.Body>
     <NameCard name={card}/>
      </Card.Body>
        </Card>
        </Col>
        </Row>
      </Col>
      <Col md={{span:3 ,offset:0}}>
        <div >
      <Card border="light" style={{ width: '18rem'}} className='card' >
      <Card.Body>
     <h5 style={{color:"#0072F9"}}>What we</h5>
     <h5 style={{color:"#0072F9"}}> have accomplished?</h5>
    
     <br/><br/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Software</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Video</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Brochure</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Communication with other agency</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Game</p>
     <hr/>
      </Card.Body>
    </Card>
    </div>
      </Col>
      </Row>

<br/><br/><br/>

      <Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#0072F9" ,fontWeight:"bold"}}>Details</h1>
      </Col>
      </Row>
<br/><br/>

<div className="detailInfo">
      <Row>
      <Col md={{span:3,offset:2}}>
        <br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Zhang Shiyue</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p style={{fontWeight:"bold",fontSize:'18px'}}>
      Team Leader: Academic Group Leader 
      </p>
      <p>Participating HP </p>
      <p>Contact with collaboration and partnership</p>
      <p> Model determination and final construction</p>
     
      </Col>
      </Row>

      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
        <br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Zheng Yulong</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p style={{fontWeight:"bold",fontSize:'18px'}}>
      Team Leader: Coordination Leader 
      </p>
      <p> Preliminary Research  </p>
      <p> Wiki writing </p>
      <p>Data collection</p>
      <p>Model Validation</p>
     
      </Col>
      </Row>

      <br/> <br/>

      <Row>
      <Col md={{span:3,offset:2}}>
        <br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Zhang Zihan</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p style={{fontWeight:"bold",fontSize:'18px'}}>
        Team Leader: Software Leader
      </p>
      <p> Wiki construction and writing </p>
      <p> Tool environment configuration </p>
      <p>In charge of education and public engagement</p>
      
      </Col>
      </Row>

      <br/> <br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Li Xuechen</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>  Art design (Brochure, video, and poster design) </p>
      <p> Wiki design and writing </p>
      <p>Participating HP</p>
      
      </Col>
      </Row>

      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/><br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Li Shiyu</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>  Wiki writing</p>
      <p>  Participating HP </p>
      <p>  Participating in education and public engagement </p>
      <p> Financial management </p>
      <p>  Data feature extraction</p>
      
      </Col>
      </Row>

      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/><br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Zhou Shixuan</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>In charge of human practice (content planning) </p>
      <p>Contact with collaboration and partnership </p>
      <p> Data collection and feature extraction</p>
      <p> Code Programming </p>
      <p>Presentation</p>
      
      </Col>
      </Row>


      
      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/>
      <h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Zhang Jiani</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>Preliminary Research </p>
      <p>Wiki writing </p>
      <p>Model selection and optimization</p>
      
      </Col>
      </Row>

      <br/><br/>

<Row>
<Col md={{span:3,offset:2}}>
<br/>
<h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Yang Xin</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>Educational game design </p>
<p>Wiki construction Database </p>
<p>Management </p>
<p>Participating HP</p>

</Col>
</Row>

<br/><br/>

<Row>
<Col md={{span:3,offset:2}}>
<br/>
<h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Yuan Fengye</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>Wiki construction</p>
<p> Participating HP </p>
<p>Code Programming </p>
<p>Educational game design and construction</p>

</Col>
</Row>

<br/><br/>

<Row>
<Col md={{span:3,offset:2}}>
<br/>
<h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Chen Chen</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>Code Programming </p>
<p>Wiki construction and writing </p>
<p>Educational game design</p>

</Col>
</Row>
<br/><br/><br/>
      </div>


      <div className="hightDiscuss">
      <h1 style={{color:"#0072F9" ,fontWeight:"bold",textAlign:"center"}}>Hightlight discussion</h1>
       <p style={{textAlign:"center" ,fontSize:'18px'}}>Here to share some highlight discussion while we generate our concept and software.</p>
     
      <Row>
        <Col md={{offset:2,span:2}}>
        <br/> <br/> <br/> <br/>
        <img src="https://static.igem.wiki/teams/4272/wiki/bio2.png" alt="bio2" className="portrait"/>
        </Col>
        <Col>
        <div className="talk-bubble tri-right left-top">
  <div className="talktext">
    <QuotUp />
    <p>
    The Crispr-Cas system has been used to develop powerful gene editing and engineering tools. However, the unexpected off-target effects of the Crispr-Cas system can lead to reduced editing efficiency and may raise serious biosafety concerns. In order to make the Crispr-Cas system more useful, especially in the field of gene therapy, we can use Anti-Crispr proteins to regulate the Crispr-Cas system. Therefore, it is a valuable task to explore the potential Anti-Crispr proteins.
    &nbsp;<QuotDown/></p>
  </div>
</div>
        </Col>
      </Row>


      <Row>
      <Col md={{offset:2}}>
        <div class="talk-bubble tri-right round right-in" style={{backgroundColor:"#0072F9",color:"white"}}>
  <div class="talktext">
  <QuotUp />
    <p>
      Guilt-By-Assosiation and Self-Targeting, two commonly used methods for Anti-Crispr protein mining, both consider other factors associated with Anti-Crispr proteins without focusing on the protein itself, and both fail to provide an integrated approach. In addition to small size and lack of conservation, other characteristics of Acr proteins are unknown. Therefore, we can choose a machine learning approach to mine potential Anti-Crispr proteins from the genome.
      <QuotDown/>
    </p>
  </div>
</div>
        </Col>
        <Col md={{offset:1}}>
          <br/><br/><br/>
        <img src="https://static.igem.wiki/teams/4272/wiki/bio3.png" alt="bio3" className="portrait"/></Col>
        
      </Row>

      <Row>
        <Col md={{offset:2,span:2}}>
        <br/> <br/> <br/> <br/>
        <img src="https://static.igem.wiki/teams/4272/wiki/bio1.png" alt="bio1" className="portrait"/>
        </Col>
        <Col>
        <div className="talk-bubble tri-right left-top">
  <div className="talktext">
    <QuotUp />
    <p>
    Since the research on Anti-Crispr protein is not yet thorough and relevant research and literature resources are scarce, we obtained a small volume of positive training set data. The problem of imbalance between positive and negative datasets leads to poor model training. Due to the sufficient amount of negative data, we can optimize the model by undersampling to improve the model prediction accuracy.
    &nbsp;</p>
    <p style={{marginLeft:500}}><QuotDown/></p>
  </div>
</div>
        </Col>
      </Row>

      </div>

<br/><br/>
<div className="acknowledgements">
<Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#0072F9" ,fontWeight:"bold"}}>Acknowledgements</h1>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col md={{offset:1}}>
      <p>Thank you to all the teachers, students, and others who have supported and helped us.</p>
      </Col>
      </Row>

      <br/>

<Row>
<Col md={{span:3,offset:2}}>

<h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Dr. Qi Liu</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>provided initial project ideas and optimization solutions.</p>

</Col>
</Row>


<br/>
<br/>
<br/>

<Row>
<Col md={{span:3,offset:2}}>

<h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Dr. Jing Zhang</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>offered us various support for the project.</p>

</Col>
</Row>




<br/>
<br/>
<br/>

<Row>
<Col md={{span:3,offset:2}}>

<h3 style={{color:"#0072F9" ,fontWeight:"bold"}}>Dr. Ye Leng</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>gave us advice and communication support.</p>

</Col>
</Row>
<br/>
<br/>
<br/>
</div>
<p style={{fontWeight:"bold",fontSize:"2vw",marginLeft:"10vw",width:"60vw"}}>
We also thank all the teachers, doctors, researchers, students, etc. Our project could not have been possible without your advice and help.
</p>

<br/>
<br/>
<br/>

        </div>
        
    )
}


export default Attributions;
