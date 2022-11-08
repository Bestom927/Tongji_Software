import React from 'react'

import Col from 'react-bootstrap/Col';
const Safety = () => {
  return (
    <>
      <Col md={{offset:1}} >
      <h1 className='head2' style={{
          color:"#2e77e5",
        }}
      >Safety</h1>
      </Col>
    <Col md={{offset:1,span:9}}>
    <p><b>Q1: Will installing AcrGPS be harmful to me or my computer?</b></p>
    <p>AcrGPS is safe enough for your computer. You don't need to worry about any security problems. Besides, our software does not violate your personal information or privacy, and all codes and packages are ensured that there is no danger to you and your computer.</p>

    <p><b>Q2: Does AcrGPS infringe on the copyright of a database or computing tool?</b></p>
    <p>The data sources of our software are described in the wiki, and the tools we use are free and open source, so there are no copyright issues. In addition, all references in the wiki are also stated. You can use our data and software with confidence.</p>

    <p><b>Q3: Is your project research safe enough? Are there any experiments?</b></p>
    <p>We have done a software project that does not involve experiments with organisms or parts. We use public data to build a model to identify Anti-CRISPR Proteins which are candidate tools for synthetic biology, it is safe and secure.</p>    

    <br/>
    <br/>
    <p><b>Statement</b></p>
    <p>We provide AcrGPS as a public service. 
      <br/>We do not collect any personal information. 
      <br/>We use it only for academic research and not for any commercial purposes.</p>  
    
    
    </Col>
    </>
  )
}

export default Safety