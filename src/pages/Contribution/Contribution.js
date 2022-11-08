import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CC/cc.css';

const Contribution = () => {
  return (
    <div>
 <img src="https://static.igem.wiki/teams/4272/wiki/com.png" 
            style={{width:"100%",height:"90vh"}} alt="impl1" />
   
   <br/><br/>
   <Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#0072F9" ,fontWeight:"bold"}}>Contribution</h1>
      </Col>
      </Row>

      <br/>
<p style={{width:"75vw",marginLeft:"8vw"}}>
We believe our project has been largely beneficial for synthetic biology, helping existing teams effectively in making presurgical judgments about substrate organisms and also providing them with a rapid and accurate tool for ACR protein recognition that subsequent iGEM teams can make more valuable attempts based on our work. Extensive attempts were made to learn more about our project and about synthetic biology itself.
</p>
<br/>
<Row>
      <Col md={{offset:1}}>
<h1 style={{color:"#0072F9" ,fontWeight:"bold"}}>Details</h1>
</Col>
      </Row>
      <br/>
<h5 style={{width:"75vw",marginLeft:"8vw",fontWeight:"bold"}}>Databases and software tools
</h5>
<p style={{width:"75vw",marginLeft:"8vw"}}>
Our project acrgps's machine learning based approach integrates information from anti crisprdb data, NCBI as well as other databases and constructs programs that can adjudicate ACR proteins from genomic features as well as physical feature recognition of the proteins themselves. This is a discovery aid for the current lack of data on ACR proteins.
</p>

<h5 style={{width:"75vw",marginLeft:"8vw",fontWeight:"bold"}}>For synthetic biology as well as synthetic biology researchers</h5>
<p style={{width:"75vw",marginLeft:"8vw"}}>
Through the efforts of our team, more mature references to tools and protocols will be made for follow-up teams when studying ACR proteins. They can draw some features from the course of our study that were used to identify genomic levels of ACR proteins to omit the distress of choosing methods from the multiple models we constructed for contrast. Meanwhile, we learned in early reviews of the literature that existing groups have optogenetically modified or chemically modified the corresponding ACR protein of cas9 to achieve controllable gene editing technology at timed points, or fused ACR proteins with CAS enzymes to obtain editing systems. Lower off target rate. Arguably, our contributions can facilitate further attempts by subsequent teams in the context of using other CAS proteins.
</p>
<h5 style={{width:"75vw",marginLeft:"8vw",fontWeight:"bold"}}>For the public and to the iGEM community</h5>

<p style={{width:"75vw",marginLeft:"8vw"}}>
During the public facing campaign, we produced a game to deepen their understanding of the mechanism of action of ACR proteins as well as their physiological significance.(<a href="https://2022.igem.wiki/tongji-software/communication">details</a>), and some educational brochures were written to travel local schools to disseminate relevant popular science knowledge to children. (<a href="https://2022.igem.wiki/tongji-software/human-practices">details</a>) in order to disseminate this new technology to more people, some introductory videos of our project have been uploaded by bilibilibili, one of the largest social video platforms in China
</p>
<p style={{width:"75vw",marginLeft:"8vw"}}>
To further enhance efforts for the iGEM community, we participated in the advocacy exchange, CCIC, held by numerous iGEMers within China. Besides, we have participated in writing a guidebook on how to prepare for the iGEM competition during the epidemic. In the manual, we wrote down what difficulties we encountered during the competition, such as difficulties in conducting offline experiments and collaboration, how our team overcame these difficulties and solved these problems, and what we thought and experienced during the preparation process.</p>
<p style={{width:"75vw",marginLeft:"8vw"}}>
We did this to facilitate the iGEM competition, bringing our young adults closer to the stage of iGEM. We sincerely hope to provide information and help to future igemers addressing their difficulties in conducting projects.
</p>
 </div>
  )
}

export default Contribution