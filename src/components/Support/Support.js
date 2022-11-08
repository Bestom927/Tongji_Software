import React from 'react'

import Col from 'react-bootstrap/Col';

const Support = () => {

    return (
        <div id="support" >
      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        >Support</h2>
      </Col>
      <Col md={{span:8,offset:1}}>
        
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-tj.jpg"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-sysu.png"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-fd.png"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-fdzj.png"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-shjt.png"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-dut.jpeg"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-zgkxjs.png"style={{width:"8vw"}} alt="support" />
      <img src="https://static.igem.wiki/teams/4272/wiki/sup-erlian.jpg"style={{width:"8vw"}} alt="support" />
      
      </Col>
      <br/>
      <Col md={{span:8,offset:1}}>
        <a style={{
            background:"#0072F9",
            height:"30px",
            width:"50px",
            borderRadius:"30px",
            color:"white",
            padding:"10px",
            textDecoration:"none",
        }}href="https://2022.igem.wiki/tongji-software/human-practices">More Info
       </a>
      </Col>
      <br/><br/><br/>
        </div>
    )
} 

export default Support