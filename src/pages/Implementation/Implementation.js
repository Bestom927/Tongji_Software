import React  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CC/cc.css';
import '../Engineering/Engineering.css'
const Implementation = () => {
  return (
 <div>
 <img src="https://static.igem.wiki/teams/4272/wiki/impl1.png" 
            style={{width:"100%",height:"90vh"}} alt="impl1" />
   
   <br/><br/>
   <Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#0072F9" ,fontWeight:"bold"}}>Proposed Implementation</h1>
      </Col>
      </Row>

      <br/>
<p style={{width:"75vw",marginLeft:"8vw"}}>
We propose some speculations for future users based on the developed software, and further make it clear from the feedback from existing users what we should do next and how security risks will arise to consider.
</p>

<br/>
<p style={{width:"75vw",marginLeft:"8vw"}}>
For our project, we provide tools to obtain from genome FASTA / from NCBI number whether the analysis has a corresponding ACR protein or not.

</p>
<br/>
   <Row>
      <Col md={{offset:1}}>
      <h2 style={{color:"#0072F9" ,fontWeight:"bold"}}>Potential users of use</h2>
      </Col>
      </Row>

      <br/>
<p style={{width:"75vw",marginLeft:"8vw"}}>
<img src={require("../../../src/assets/arrow-right.png")} alt="a" style={{height:"50px"}} />
· some research teams that use phages and require CRISPR for gene editing can judge in advance whether the introduction of an ACR protein will have an effect on the outcome of the experiment through our tool.
</p>


<p style={{width:"75vw",marginLeft:"8vw"}}>
<img src={require("../../../src/assets/arrow-right.png")} alt="a" style={{height:"50px"}} />
· some research teams attempting CRISPR gene editing on an unconventional chassis organism can judge whether an experiment is feasible based on our tools.

</p>

<p style={{width:"75vw",marginLeft:"8vw"}}>
<img src={require("../../../src/assets/arrow-right.png")} alt="a" style={{height:"50px"}} />
· several research teams working on designing ACR proteins or trying to reduce the negative effects of reduced CRISPR activity have quick access to the sequences of large numbers of potential ACR proteins for subsequent studies using our tool.

</p>

<p style={{width:"75vw",marginLeft:"8vw"}}>
<img src={require("../../../src/assets/arrow-right.png")} alt="a" style={{height:"50px"}} />
· several groups who need access to safe and reliable and potent inhibitors of protein CAS enzymes can access ACR proteins using our tool.
</p>
<br/>
   <Row>
      <Col md={{offset:1}}>
      <h2 style={{color:"#0072F9" ,fontWeight:"bold"}}>
Challenges and how to implement our project in reality</h2>
      </Col>
      </Row>
<br/>
      <p style={{width:"75vw",marginLeft:"8vw"}}>
In fact, it is a pleasure to see that our project may be helpful in the work of other research teams. We can also take some inspiration for software improvements from feedback from other teams. 
</p>

<br/>
      <p style={{width:"75vw",marginLeft:"8vw"}}>

Having interacted with Sun Yat sen University team when they suggested that perhaps ACR protein counterparts could be identified with outputs as well as inhibitory activity strengths, we planned to identify the acquired ACR protein counterparts by starting with features such as higher order structure of the protein, but this made it difficult to generate sufficiently accurate determinations in a short time due to the diversity of structures as well as mechanisms of action. </p>
<br/>
      <p style={{width:"75vw",marginLeft:"8vw"}}>


      In addition we plan to explore whether it might be possible to migrate approaches to ACR proteins that target other CAS proteins, based on existing studies that have engineered cas9 targeted ACR proteins for optogenetics, among others.

</p>
<br/>
<Row>
      <Col md={{offset:1}}>
      <h2 style={{color:"#0072F9" ,fontWeight:"bold"}}>Safety considerations
</h2>
      </Col>
      </Row>

      <br/>
<p style={{width:"75vw",marginLeft:"8vw"}}>
The proteins identified by this tool belong to a class of genetically encoded biological elements of biological origin that require subsequent engineering or editing efforts to avoid the outflow of the encoded gene from the laboratory causing biological
Material safety events (e.g. acquisition of proteins by certain phages, thus better infection of host bacteria)</p>

<br/>
 </div>

  )
}

export default Implementation
