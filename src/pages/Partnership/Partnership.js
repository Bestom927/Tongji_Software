import React from 'react'
import './Partnership.css'

const Partnership = () => {
  return (
    <>
<div style={{textAlign:"center"}}>
        
     <img src="https://static.igem.wiki/teams/4272/wiki/team001.png" 
            style={{height:"100vh"}} alt="partner-page-bg" />
      <br/>
</div>

      <div className='title'>Partnership</div>
      <div className='content'>
        We met the team of Sun Yat-sen University at the 9th China Regional iGEM Exchange Conference (CCiC Conference), and during the discussion of the conference, we had a preliminary understanding of the projects of both sides and found that both projects were closely related to the resistance system of bacteria, so we carried out close cooperation and exchange.
      </div>
      <br /><br />
      <div className='content'>
        The purpose of the team of Sun Yat-sen University is to <span className='blueword'>establish a prokaryotic resistance system search platform</span>, and its theoretical basis is "resistance gene island": resistance genes have a cluster phenomenon in the distribution of the genome, that is, there are still a series of genes related to resistance in the upstream and downstream of resistance genes, and the known resistance genes can be used to determine the relevant gene clusters in the genome, other genes other than resistance genes are used as "seeds", and sequence comparisons are used to determine the gene clusters containing "seeds" at other locations in the genome. Proteins with unknown functions in the discovered gene clusters are then annotated to discover new resistance systems.
      </div>
      <br /><br />
      <div className='content'>
        Our project focuses on the <span className='blueword'>mining of the regulatory protein anti-CRISPR that regulates the CRISPR-Cas system</span>, because the anti-CRISPR protein is relatively short and the conservatism is low, it is difficult to achieve good results by means of sequence comparison, and it is difficult to achieve good results by using machine learning methods to collect important features of anti-CRISPR protein and establish a predictive model.
        Our projects have used machine learning methods, and we have conducted some exchanges on the problems in the process of model training, among which the more similar problem is the imbalance of the training data, and we have collected far fewer positive samples (anti-CRISPR proteins) than negative samples.
      </div>
      <br /><br />
      <div className='content'>
        In this case, we discuss several strategies:
      </div>
      <br /><br />
      <div className='content1' >
        &nbsp;&nbsp;&nbsp;&nbsp;1. under-sample the negative sample so that the number of samples of       both classes is the same;
      </div>
      <br /><br />
      <div className='content1'>
        &nbsp;&nbsp;&nbsp;&nbsp;2. oversample the positive sample;
      </div>
      <br /><br />
      <div className='content1'>
        &nbsp;&nbsp;&nbsp;&nbsp;3. randomly generate positive sample data.
      </div>
      <br /><br />
      <div className='content'>
        Given that the characteristics of the anti-CRISPR protein are not conservative enough and we want high accuracy, we have used under-sampling of existing negative samples.
      </div>
      <br /><br />
      <div className='content'>
        The anti-CRISPR protein belongs to one of the resistance systems, so we have reached a more in-depth cooperation with the Sun Yat-sen University team after discussion and exchange: we provide more corresponding "seed" data for the Sun Yat-sen University team to help them optimize and expand the prokaryotic resistance system search platform; At the same time, they also use their platform to verify our prediction results and further reveal their functions, complement each other, and expand the application scenarios of our software.
      </div>
      <br /><br />

      <div temImg2>
        <img className='img' src="https://static.igem.wiki/teams/4272/wiki/team002.png" alt="team002.png"></img>
        <br /><br />
        <div className='imgComment'>Picture 1. Tongji_Software communicating with SYSU_Software</div>
        <br /><br /><br /><br /><br /><br />
        <img className='img' src="https://static.igem.wiki/teams/4272/wiki/team03.png" alt="team03.png"></img>
        <br /><br />
        <div className='imgComment'>Picture 2. Tongji_Software introducing our own project</div>
        <br /><br /><br /><br /><br /><br />
      </div>

    </>
  )
}

export default Partnership