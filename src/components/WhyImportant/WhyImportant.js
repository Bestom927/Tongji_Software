import React from 'react'
import Col from 'react-bootstrap/Col';
const WhyImportant = () => {

    return (
        <div id="support" >
      <Col md={{offset:0}} style={{textAlign:"center",}}>
      <h1 className='head2' style={{
            color:"#0072F9",
         }}
        >Why this question is important?</h1>
    <br/>
         <p>We collected some data that can reflect the probability of crispr miss, as well as the number of literature data on<br/> crispr miss research in recent years, to prove that our research is a hot issue at present and worth studying.</p>
         <br/><br/>
        <p>
        In <span style={{color:"#0072F9",fontSize:"x-large",fontWeight:"bolder"}}>2017</span>, Korean scientist Jin-Soo Kim demonstrated the off-target effect of </p>
        <p>
        <span style={{fontSize:"x-large",fontWeight:"bolder"}}><b>the BE3 system</b></span>
        </p>
        <p>

        in an article published in the journal Nature Biotechnolosy, followed by another demonstration of the</p> <p>
        <span style={{fontSize:"x-large",fontWeight:"bolder"}}><b>off-target effect of ABE7.10 in 2019.</b></span></p>
        <p>
        In <span style={{color:"#0072F9",fontSize:"x-large",fontWeight:"bolder"}}>2019</span>, Chinese scientist Yang Hui published a new method to detect 
        </p>
        <p>
            <span style={{fontSize:"x-large",fontWeight:"bolder"}}><b>BE3 off-target effects </b></span>
            </p>
            <p>

        in mouse embryos in Science, and Gao Caixia published an article in Science that also demonstrated </p>
        <p>
        <span style={{fontSize:"x-large",fontWeight:"bolder"}}><b>single-base off-target effects in plants.</b></span><p></p>

        In <span style={{color:"#0072F9",fontSize:"x-large",fontWeight:"bolder"}}>2020</span>, it was found that other sequences in the genome may also be cleaved nonspecifically by <p></p>
        <span style={{fontSize:"x-large",fontWeight:"bolder"}}><b>CRISPR-Cas12a system,</b></span><p></p>
        resulting in unavoidable off-target effects.
        <p></p>
        In <span style={{color:"#0072F9",fontSize:"x-large",fontWeight:"bolder"}}>2022</span>, Study results indicate that in addition to considering off-target effects caused by base mismatches, <p></p>
        <span style={{fontSize:"x-large",fontWeight:"bolder"}}><b>a comprehensive off-target analysis</b></span><p></p>
        of the insertion and deletion of the target dsDNA sequence is required.<p></p>

                </p>


        <img src="https://static.igem.wiki/teams/4272/wiki/home-why.png"
        style={{width:"80vw",marginLeft:"0vw"}}alt="model"/>


        <br/><br/>
                <div style={{textAlign:"center",fontSize:"small"}}>Picture 1. Search query: crispr off target Year Count
        </div>
        <br/><br/>

      </Col>
<br/><br/><br/>
        </div>
    )
} 

export default WhyImportant