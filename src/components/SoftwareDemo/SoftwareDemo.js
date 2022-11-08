import React from 'react'
import FadeInAnimation from "./FadeInAnimation";
import './SoftwareDemo.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '@mui/material/Button';

const SoftwareFun1=()=>{
  return(
      <>
       <div style={{fontWeight: "700",fontSize:"2.5vmin"}}>Easy  Use</div>
       <div style={{fontWeight: "500",fontSize:"2vmin",width:"25vw",marginTop:"2vh"}}>No need to install the configuration environment &#38; No complex operations</div>
      <div style={{width:"36vw",marginTop:"2vh",fontSize:"1.2vmin"}}>
      Coot operation throughout. Our software can be directly executed by command lines, users do not need to go through 
      a lengthy software installation process and complex environment configuration efforts, we pack the required environments
       and packages all together as a docker mirror image, users can achieve the immediate, ready to use goal and start running 
       by switching to a working directory after the Docker container is activated. Complete feature table files can be generated
        after sequentially executing scripts from 1-4, and then performing test.py under the model folder specifies that the input
         feature table run generates the corresponding prediction result as well as corresponding features.
      </div>
      </>
  )
}

const SoftwareFun2=()=>{
  return(
      <>
            <div style={{fontWeight: "700",fontSize:"2.5vmin"}}>Flexible and efficient</div>
            <div style={{fontWeight: "500",fontSize:"2vmin",width:"25vw",marginTop:"2vh"}}>Run faster and better with more options</div>
            <div style={{width:"36vw",marginTop:"2vh",fontSize:"1.2vmin"}}>
            Two methods are provided to download the original Genebank files: batch download through NCBI numbered list files;
             The complete genome sequence provided by users is constructed based on prokka to extract relevant protein information, giving users more choice space.
             <br/> <br/>
             And our prediction performance is better, and the running speed is faster. When encountering a long genome, you can also complete all annotation work 
             in a short time (and processes are separated and independent from each other. Users can achieve parallel processes by submitting them to the background in batches to speed up operations.)
            </div>
      </>
  )
}


function ChangeContent(props) {
  const pageNum = props.pageNum;
  if (pageNum===1) {
      return <SoftwareFun1 />;
  }
  else{
      return <SoftwareFun2 />;
  }
}

var canChange=true;
class Software extends React.Component{
  state={
    showMode:1,
    page:1,
  }
  checkBtn=()=>{
     if(canChange===true){
        if(this.state.page===2){
            this.setState({
                showMode:1,
                page:1
            })
            
        }
        else{
            this.setState({
                showMode:2,
                page:2
            })
        }
        canChange=false;
        setTimeout(()=>{
            canChange=true;
        },800)
    }
  }

  render(){
      return (
        <div>
        <FadeInAnimation > 
          <div id="software-demo" style={{backgroundImage:this.state.page===1? "url(https://static.igem.wiki/teams/4272/wiki/softwaredemo-bk1.png)":"url(https://static.igem.wiki/teams/4272/wiki/softwaredemo-bk2.png)"}}>
            <Row>
            <Col md={{offset:1,span:8}}>
            <h1 className='head2' style={{
                  color:"#0072F9",marginTop:"5vh"
              }}
              >Software Demo</h1>
            </Col>
              
              <a style={{
                  textAlign:"center",
                  marginRight:"0",
                  background:"#0072F9",
                  height:"4vh",
                  width:"8vw",
                  borderRadius:"5vw",
                  color:"white",
                  paddingTop:"0.5vh",
                  fontSize:"1vw",
                  textDecoration:"none",
                  marginTop:"6vh"
              }}href="https://2022.igem.wiki/tongji-software/software">More Info
            </a>
            </Row>
            <Col md={{span:6,offset:1}}>
            <p style={{fontSize:"x-large"}}>Anti-CRISPR Genome-based Predicting Software
            </p>
            </Col>

            <div className="software-content-box">
                  <div className="software-blue-box"> 
                  <iframe title="Tongji_software" width="90%" height="90%" src="https://video.igem.org/videos/embed/023da8a3-b67a-4217-8c3d-ce2381c86610" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"
                  style={{marginTop:"5%",marginLeft:"5%",borderRadius:"2vmin"}}
                  ></iframe>
                  </div>
                  <div className="software-white-box">
                          <div className="software-white-box-content" >
                                      <div className="box-content-detail">
                                        <ChangeContent pageNum={this.state.page}/>
                                      </div>
                          </div>
                  </div>

                  <div className="software-button-box">
                      <Button id="btn-changeLast" variant="contained" color="primary"  onClick={this.checkBtn}>&#60;</Button>
                      <Button id="btn-changeNext" variant="contained" color="primary"  onClick={this.checkBtn}>&#62;</Button>
                  </div>
            </div>


          </div>
          </FadeInAnimation>
          </div>
      )
  }
} 

export default Software