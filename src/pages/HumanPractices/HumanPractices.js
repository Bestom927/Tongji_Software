import React, { useState }  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarLg from '../CC/starlg';
import Slider from '@mui/material/Slider';
import Card from 'react-bootstrap/Card';
import '../CC/cc.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from '@mui/system';
import CheckboxIcon from '../CC/checkbox';
import Email1 from '../CC/email';
import Testing1 from '../CC/testing';
import Questionaire1 from '../CC/qustionaire';
import Interview1 from '../CC/intereview';
import Hpcom from '../CC/hpcom';
import HpcomTest from '../CC/hpcomtest';
// import Hpcom3 from '../CC/hpcom3';
import Hpcom4 from '../CC/hpcom4';
import Hpcom2 from '../CC/hpcom2';


function HumanPractices ()  {
   const [value,setValue]=useState(1);
   const [value2,setValue2]=useState(1);
   const [ color,setColor]=useState(["cardhp" ,"card" ,"card" ,"card"]);
   const [ color2,setColor2]=useState(["cardhp" ,"card" ,"card" ,"card"]);
  const handleChange=(event,newValue)=>{
   
    let temp=["card" ,"card" ,"cardhp" ,"card"];
    for(let i =0;i<=3;i++){
      if(i===newValue-1) temp[i]="cardhp";
      else temp[i]="card";
  }
   setValue(newValue);
   setColor(temp);
  }

  const handleChange2=(event,newValue)=>{
   
    let temp=["card" ,"card" ,"cardhp" ,"card"];
    for(let i =0;i<=3;i++){
      if(i===newValue-1) temp[i]="cardhp";
      else temp[i]="card";
  }
   setValue2(newValue);
   setColor2(temp);
  }

  const valuetext=(value)=>{
    if(value===1)  return "2022.3-5";
    else if(value===2) return "2022.5";
    else if(value===3) return "2022.5-7";
    else return "2022.6";
  }

  const valuetext2=(value2)=>{
    if(value2===1)  return "2022.5-7";
    else if(value2===2) return "2022.8-10";
    else if(value2===3) return "2022.9";
    else return "2022.9-10";
  }

  return (
    <div>
      <img src="https://static.igem.wiki/teams/4272/wiki/hp-img1.png" alt="hp-page-img1" 
      width={"100%"}/>
      <br/><br/>
      <br/><br/>
     <Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#0072F9" ,fontWeight:"bold"}}>Human Practices</h1>
      </Col>
      </Row>
     
<Row>

  <Col md={{span:5,offset:1}}><br/>
  Throughout the project, we constantly communication with the general public and biological researchers, providing guidance for us to improve our content and discover the social significance of our project. The advancement of our project is inseparable from human practices, and in the interaction, we also try to make more people understand what synthetic biology is and the concept of iGEM. We believe that what we are doing is not only simple software but also something beneficial to the future of human. Thank you very much to all the people who have helped us. Our human practice can be described in three main areas: Inspiration & Problems, Design & Improvement, and Meaning & Applications.
  </Col>

  <Col>
  <img src="https://static.igem.wiki/teams/4272/wiki/hp-img2.png" alt="hp-page-img2" 
      width="650px"/>
  </Col>
</Row>

<br/><br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#0072F9"}}> <StarLg/> &nbsp;Inspiration & Problems</h1>
</Col>

</Row>

<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<p>Because of the ubiquity of gene editing in synthetic biology research, we initially focused on this area with the hope that our project would improve existing problems from this perspective. In this regard, we chose various channels to determine our research topic and the problem we want to solve.</p>
</Col>

</Row>

<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#0072F9",fontSize:"38px"}}>Photo</h2>
</Col>

</Row>

<div style={{textAlign:"center"}}>
<img src="https://static.igem.wiki/teams/4272/wiki/hp-img3.png" alt="hp-page-img3" 
      width="1250px"/>
</div>
<br/><br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#2e77e5",fontSize:"38px"}}>Timeline(Drag me and roll down!)</h2>
</Col>
</Row>

<br/>

<Row>
  <Col md={{offset:1}}>
<Slider
   sx={{width:1150}}
    color="secondary"
    value={value}
    min={1}
    max={4} 
    step={1}
    // getAriaValueText={valuetext}
    valueLabelFormat={valuetext}
    onChange={handleChange}
    valueLabelDisplay="on"
    />
   </Col>
   </Row>

<br/>

<Container>
<CardGroup >
<Card border="light" style={{ width: '10rem'}} className={color[0]} >
     <Card.Body>
    <h5 style={{textAlign:"center"}}>Email exchange with Dr. Liu</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.3-5 </p>
    <p style={{color:"#adadad"}}> At this stage, we talked with our advisor, Dr. Liu, about our needs and what we wanted to do since he has some attainments in the field of gene editing.</p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Brainstorming</p>
    <p><CheckboxIcon/>&nbsp; Confirm the topic</p>
<br/>   <br/>
     </Card.Body>
   </Card>
<Card border="light" style={{ width: '10rem'}} className={color[1]}>
     <Card.Body>
     <h5 style={{textAlign:"center"}}>Software Testing</h5>
    <br/>   <p style={{color:"#adadad" ,textAlign:"center"}}>2022.5 </p>
    <p style={{color:"#adadad"}}>At this stage, we focus on collecting all kinds of information, acquiring all kinds of software design knowledge and their basic logic, and carrying out our own software design.</p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Literature Review</p>
    <p><CheckboxIcon/>&nbsp; Test different softwares</p>
    <p><CheckboxIcon/>&nbsp; Design our strategies</p>
<br/>   <br/>
     </Card.Body> 
     </Card>
     
     <Card border="light" style={{ width: '10rem'}} className={color[2]} >
     <Card.Body>
     <h5 style={{textAlign:"center"}}>Questionaire</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.5-7 </p>
    <p style={{color:"#adadad"}}>
 Understand the current level of awareness of gene editing and the level of knowledge of Anti-CRISPR protein among current biological researchers as well as the use of related software</p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Questionnaire for insiders</p>
    <p><CheckboxIcon/>&nbsp; Background knowledge test</p>
    <p><CheckboxIcon/>&nbsp; Recognized</p>
<br/>   <br/>
     </Card.Body>
   </Card>
   
   <Card border="light" style={{ width: '10rem'}} className={color[3]} >
   <Card.Body>
     <h5 style={{textAlign:"center"}}>Interview</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.6</p>
    <p style={{color:"#adadad"}}>
To gain insight into the specific views on gene editing and Acr proteins, we selected individual questionnaire completers for in-depth interviews. </p>
    <br/>  <br/>
    <p><CheckboxIcon/>&nbsp; In depth interview</p>
    <p><CheckboxIcon/>&nbsp; Insights</p>
    <p><CheckboxIcon/>&nbsp; Deepening direction</p>
<br/>   <br/>
     </Card.Body> 
   </Card>
</CardGroup>
</Container>

{value===1&&<Email1/>}
{value===2&&<Testing1/>}
{value===3&&<Questionaire1/>}
{value===4&&<Interview1/>}
<br/><br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#0072F9"}}> <StarLg/> &nbsp;Design & Improvement</h1>
</Col>

</Row>

<br/>
<Container>
<img src="https://static.igem.wiki/teams/4272/wiki/d-i1.png" 
  alt="di1" width="550vw" style={{ borderRadius:"5%",marginLeft:0}}/>
&nbsp;&nbsp;&nbsp;
<img src="https://static.igem.wiki/teams/4272/wiki/d-i2.png" 
  alt="di2" width="550vw" style={{ borderRadius:"5%",marginLeft:0}}/>
</Container>

<br/><br/><br/>
<p style={{marginLeft:"9vw",marginRight:"7vw"}}>
  Due to the current rapid development of macroeconomics, many potential Acr proteins are waiting to be mined, thus expanding the ranks of the Acr protein family, and providing more available tools for synthetic biology. Therefore, to enhance the people’s knowledge about Acr proteins and encourage their participation in Acr protein discovery, which contribute to the mining of the value of Acr protein applications in synthetic biology, we hope to design an Acr mining software AcrGPS that is easily usable, high-throughput-compatible and available to users with inferior professional background. We try to keep improving our design by constantly communicating with our teachers and students to make it meet people's needs more.
</p>

<br/><br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#2e77e5",fontSize:"38px"}}>Timeline(Drag me and roll down!)</h2>
</Col>
</Row>
<br/>

<p style={{textAlign:"center",width:"90vw"}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This stage lasted for about 5 months. We deeply integrated several parts of it and carried out it in multiple directions at the same time.
</p>
<br/>

<Row>
  <Col md={{offset:1}}>
<Slider
   sx={{width:1150}}
    color="secondary"
    value={value2}
    min={1}
    max={4} 
    step={1}
    valueLabelFormat={valuetext2}
    onChange={handleChange2}
    valueLabelDisplay="on"
    />
   </Col>
   </Row>

<br/>

<Container>
<CardGroup >
<Card border="light" style={{ width: '10rem'}} className={color2[0]} >
     <Card.Body>
    <h5 style={{textAlign:"center"}}>Communication with Dr.Liu</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.5-7 </p>
    <p style={{color:"#adadad"}}> 
After the initial determination of our design plan, we further communicated with Dr. Liu, hoping that he could evaluate the feasibility of our plan. Dr. Liu affirmed our idea and thought our project was innovative.<br/>
    </p>
    <p><CheckboxIcon/>&nbsp; Evaluate the feasibility</p>
    <p><CheckboxIcon/>&nbsp; Guidance</p>
<br/>   <br/>
     </Card.Body>
   </Card>
<Card border="light" style={{ width: '10rem'}} className={color2[1]}>
     <Card.Body>
     <h5 style={{textAlign:"center"}}>Communication with SYSU-Software </h5>
    <br/>   <p style={{color:"#adadad" ,textAlign:"center"}}>  2022.8-10 </p>
    <p style={{color:"#adadad"}}>
  
In our communication with other iGEM teams, other teams also gave us suggestions to improve our project and indicated ways to solve some difficulties we encountered. 
    </p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Peer review round 1</p>
    <p><CheckboxIcon/>&nbsp; Collaborate on difficulties</p>
<br/>   <br/>
     </Card.Body> 
     </Card>
     
     <Card border="light" style={{ width: '10rem'}} className={color2[2]} >
     <Card.Body>
     <h5 style={{textAlign:"center"}}>Communication with Professors</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.9 </p>
    <p style={{color:"#adadad"}}>
   
We also introduced our project to Prof. Guo, Prof. Du, Prof. Zhang, and Prof. Lv from the School of Life Sciences and Technology of Tongji University who recognized our project completion and gave valuable suggestions. 
      </p>
        <br/>
    <p><CheckboxIcon/>&nbsp; Multi party sharing</p>
    <p><CheckboxIcon/>&nbsp; Explore future development</p>
<br/>   <br/>
     </Card.Body>
   </Card>
   
   <Card border="light" style={{ width: '10rem'}} className={color2[3]} >
   <Card.Body>
     <h5 style={{textAlign:"center"}}>User Feedback</h5>
     <br/>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>    2022.9-10</p>
    <p style={{color:"#adadad"}}>

When our software was initially built, we invited some bioinformatics students to help us test it and collect feedback from them. 
    </p>
    <br/>  <br/>
    <p><CheckboxIcon/>&nbsp; Inspiration</p>
    <p><CheckboxIcon/>&nbsp; Insights</p>
    <p><CheckboxIcon/>&nbsp; Iteration final version</p>
<br/>   <br/>
     </Card.Body> 
   </Card>
</CardGroup>
</Container>

{value2===1&&<Hpcom/>}
{value2===2&&<Hpcom2/>}
{value2===3&&<HpcomTest/>}
{value2===4&&<Hpcom4/>}
<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#0072F9"}}> <StarLg/> &nbsp;Meaning & Applications</h1>
</Col>

</Row>
<br/>
<p style={{width:"80vw",marginLeft:"10vw"}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
We are constantly searching for the practical meaning of our project, hoping to find answers by visiting workers from various professional field. It is such a continuous communication process that help us not only gain a lot of different experiences, but also overturn some inherent ideas. This definitely is the importance of the human practice process, many facts are far from simply knowledge learning from books and the Internet.
</p>
<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#0072F9"}}>The Obstetrics & Gynecology Hospital of Fudan University  (September) </h1>
</Col>

</Row>

<Row>
  <Col md={{offset:1 ,span:5}}>
  <img src="https://static.igem.wiki/teams/4272/wiki/hpl.png" 
  alt="di2" width="550vw" style={{ borderRadius:"5%",marginLeft:0}}/>
  </Col>

  <Col md={{span:5}}>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <p style={{marginLeft:"0vw"}}>
  In September 2022 our team went to The Obstetrics & Gynecology Hospital of Fudan University to talk to the doctors and introduce the iGEM competition and our project to them. They were excited when we talked about the Acr protein to improve the safety of gene editing. Probably, when we use gene editing in our usual biological experiments, the gene editing technology has been more mature because of the standardized and process-oriented operation to avoid the off-target effect of gene editing. However, in the medical field, it is very crucial to address off-target effects, and the safety of gene editing is at the first rank in research fields such as gene therapy. They believe that the Acr protein that we have mined is very useful and look forward to the day when this protein can bring great benefits to human beings.
  </p>
  </Col>
</Row>

<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#0072F9"}}>Erlian Primary School  (September)</h1>
</Col>

</Row>
<br/>
<p style={{width:"85vw",marginLeft:"8vw"}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
When we preparing for the communication with Erlian Elementary School, we shared with Mr. Xia, the teacher of the elementary school's science and technology class, and introduced synthetic biology and the iGEM competition to him. We also asked him if a project like ours could do anything for younger children like elementary school students. He said, "Actually, elementary school students are more knowledgeable than we think, probably because of the advanced internet. There is a lot of knowledge that we think children won't know, but that just comes from our subjective assumption." This also inspired us to go into elementary schools to conduct a gene editing science curriculum (see <a href="https://2022.igem.wiki/tongji-software/communication" >Communication.</a>) to bring more attention to gene editing in our lives. The successful completion of our course was supported and endorsed by him, and he also helped us with many formalities.
</p>
<br/>
<Container>
  <img src="https://static.igem.wiki/teams/4272/wiki/hpl2.png" 
  alt="di2" width="550vw" style={{ borderRadius:"5%",marginLeft:"20vw"}}></img>
</Container>
<br/>
<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#0072F9"}}>Shanghai Fudan-Zhangjiang Bio-Pharmaceutical Co., Ltd.  (July)</h1>
</Col>
</Row>
<br/>
<p style={{width:"85vw",marginLeft:"8vw"}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
We also had an online meeting with Mr. Xu, an employee of a biopharmaceutical company, who wanted to understand the possibility of the practical use of Acr protein in bioengineering. He thought that the regulation of gene editing in production is very important and that a gene-editing inhibitor like Acr is of great interest if it can be well developed and utilized. He also appreciated our project and gave us some great ideas.
</p>
<br/>
<Container>
  <img src="https://static.igem.wiki/teams/4272/wiki/hpl3.png" 
  alt="di2" width="650vw" style={{ borderRadius:"5%",marginLeft:"15vw"}}></img>
</Container>
<br/>
<Row>
  <Col md={{offset:1}} >
<h1 style={{color:"#0072F9"}}>Communication with DUT_China  (August)</h1>
</Col>
</Row>
<br/>
<p style={{width:"85vw",marginLeft:"8vw"}}>
In our exchange with the DUT_China team, we also discussed the current state of research on the off-target effects of gene editing and whether Acr proteins have advantages in avoiding off-target effects. (See <a href="https://2022.igem.wiki/tongji-software/collaborations" >Collaborations</a>) By sharing the information we collected and the content of the project, we concluded that Acr protein has an irreplaceable advantage to deal with off-target effects and it is broad spectrum and easy usability make it a convenient tool.
</p>
<br/>
<p style={{width:"85vw",marginLeft:"8vw",fontWeight:"bold"}}>
All in all, we continued to improve our project and clarify the meaning of our project during the process of integrated human practice. The future development and application of Acr are more extensive and powerful than we imagined and make us more confident and motivated to keep improving what we are doing, and even hope to continuously devote to the research in this field and refine our software after we finished this project. Some of our perceptions change as we continue to interact with people, and the exclamation, "So that's what it is!" often occurred in our communication process. If we don't communicate with the world, we won't be constantly updating our ideas, keeping up with the current, and bringing our projects closer to humanity itself. These are significances we learned from human practice process.
</p>
<br/>

    </div>
  )
}

export default HumanPractices
