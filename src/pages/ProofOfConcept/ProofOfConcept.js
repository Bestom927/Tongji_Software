import React from 'react'
import './ProofOfConcept.css'
import Col from 'react-bootstrap/Col';


const ProofOfConcept = () => {
  return (
    <div>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof-logo.png"style={{
                    
                    width: "100%",
                }} alt="proof-page-img1"></img>
      
      
      <h1 className='head1' style={{
            color:"#0072F9",
            fontSize:"50px",
         }}
        >Proof of concept</h1>
      <br/>
      
      
      <img src="https://static.igem.wiki/teams/4272/wiki/proof1.png" 
        style={{   width:"35vw",marginLeft:"10vw"}} alt="proof"/>
         
         <span style={{borderLeft:"1px solid black",left:"50%",position:"absolute",width:"0px",height:"50vh"}}></span>

         
      <img src="https://static.igem.wiki/teams/4272/wiki/proof2.png" 
        style={{   width:"35vw",marginLeft:"10vw"}} alt="proof"/> 
        
         
        <hr></hr>
         
        
      <img src="https://static.igem.wiki/teams/4272/wiki/proof3.png"
        style={{   width:"35vw",marginLeft:"10vw"}}  alt="proof"/> 
        
        <span style={{borderLeft:"1px solid black",left:"50%",position:"absolute",width:"0px",height:"50vh"}}></span>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof4.png" 
        style={{   width:"35vw",marginLeft:"10vw"}} alt="proof"/>  
        <hr></hr>
        
         
      <img src="https://static.igem.wiki/teams/4272/wiki/proof5.png" 
        style={{   width:"35vw",marginLeft:"10vw"}} alt="proof"/> 
        <span style={{borderLeft:"1px solid black",left:"50%",position:"absolute",width:"0px",height:"35vh"}}></span>
         
      <img src="https://static.igem.wiki/teams/4272/wiki/proof6.png" 
        style={{   width:"35vw",marginLeft:"10vw"}} alt="proof"/>  
      
      

      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
            marginTop:"5vh",
            marginBottom:"3vh",
         }}
        >Theoretical Support 
        </h2>
      </Col>
      <Col md={{span:10,offset:1}}>
       <p>
        Existing studies have used several strategies to identify anti CRISPR (2, 4), including bioinformatic analyses such as ""guilt by association " (5) or self targeting approaches (8), and functional assays or screens (1, 6, 7). While these approaches have been successful in identifying anti crisprs, these studies have identified only a few subsets of anti crisprs and are highly dependent on prior knowledge of the functional characteristics of individual phage host relationships.
        </p>
        <br/>
        <p>
        Initially, blast based searches to retrieve anti CRISPR homologs from related phages helped to define the breadth of certain anti crisprs (5). However, considering that some recently discovered anti crisprs have no identifiable sequence similarity to those currently known, homology based approaches alone cannot be relied on to identify novel anti CRISPR types.
        </p>
        <br/>
        <p>
        To address this, we introduce machine learning approaches to obtain more accurate anti CRISPR predictions. Gussow et al developed a random forest based model with features including protein length, whether it was annotated, and its average hydrophobicity. However, our review revealed that there is a stretch of structural features associated with ACR proteins that are relatively conserved. ACR encoding genes often form operons (3,4) with HTH (helix turn helix) domains encoding ACA (ACR associated) proteins containing transcriptional repressor genes (1,2). These short ACR proteins (lower than 200 AA) are made from phage / viruses and other mobile genetic elements to suppress the CRISPR CAS (clustered regularly interspersed short palindromic repeats [CRISPR] - CRISPR associated genes) system of their prokaryotic hosts for successful invasion and survival.
        </p>
       </Col>

       
      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
            marginTop:"5vh",
            marginBottom:"3vh",
         }}
        >Procedural Testing 
        </h2>
      </Col>
      <Col md={{span:8,offset:1}}>
       <p>
        First step download genebank files
        <br/>choice 1. NCBI id example:
        <br/>NC_ 004086.1(in example.txt):python3 1_ get_ ncbi_ gb. py -i example.txt
        <br/>One NCBI number for each behavior
        <br/>choice 2. FASTA file example:
        <br/>NC_ 004086.1(in example.fasta):python3 1_ fasta_ to_ gb. py -i example.fasta
        <br/>FASTA files for the whole genome sequence of the species
        <br/>Any one that selects to run properly generates a genome under that directory_ Folder of GB where text files of (NCBI number). TXT or (FASTA file name). GB are deposited
        <br/>Steps two through four are performed sequentially
        <br/>python3 2_ get_ cds.py
        <br/>python3 3_ annotation_ hth.py
        <br/>python3 4_ directon.py
        </p>
        <br/>
        <p>
        Can be under this directory once the run is successful genome_ Feature files corresponding to names are found under feature / folder and need to be opened to determine if features are extracted (if not, there is no corresponding ACR protein in the species that might be entered or if the protein information is too missing)
        </p>
        <br/>
        <p>
        Then switch to under the model folder under the parent directory to make the fifth step prediction
        Step five perform the python 3 test py -i ../coding/genome_ Feature / (ncbiid or FASTA name). CSV the prediction results can be viewed in preture.csv under this directory.

        </p>
        <a href="/tongji-software/software">
        <img src="https://static.igem.wiki/teams/4272/wiki/proof-data.png" 
        style={{ }} alt="proof"/>  </a>
       </Col>
    
       <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
            marginTop:"5vh",
            marginBottom:"3vh",
         }}
        >Method
        </h2>
      </Col>
      <Col md={{span:10,offset:1}}>
       <p>
       Due to the small number of positive samples in our data, using the conventional training test verification set division will lead to too little positive data training during the actual training of the model, which will affect the final model fitting effect. Therefore, we adopted a five fold cross validation method, that is, we divided the samples into five on average, and took one of them as the validation set and the rest as the training set to train the model. After five rounds of repetition, all the data can be used to build the model. Finally, the average method is used to reasonably represent the model performance. As follows:

</p>
<img src="https://static.igem.wiki/teams/4272/wiki/proof7.png" 
        style={{ width:"60%",marginLeft:"20%"}} alt="proof"/> 
<p>After this, we tried a comparison with the existing tool acrdb, trying the genomes (Archaea) that they provided as well as the genomic data of several phages that we tested for use, and evaluated our results by taking the intersection of the identification results of the two. A considerable number of potential ACR proteins were identified by both in archaeal genomes, and there was a large degree of intersection between our and their identification results (the number of intersections increased when the acrdb confidence threshold was downregulated and incorporated into longer protein analyses), and when we tested phages we found that we could find several potential ACR proteins none of them could find (potentially related to their inclusion in the analysis of guilt by association), It can be further illustrated that our algorithm achieved better results.</p>
       </Col>

       <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
            marginTop:"5vh",
            marginBottom:"3vh",
         }}
        >Validation results 
        </h2>
      </Col>
      <Col md={{span:10,offset:1}}>
       <p>
        
Taking data from a sample dataset for cross validation, the correct rate can be maintained above 80%, after aligning the same sequence with existing query tools, the intersection rate can be above 81% (22 predicted positive results), and we can identify many sequences missed by other algorithms (we can identify more than 70% of sequences under equal accuracy limits). It can be argued that our algorithm better solves the limitations that ACR proteins are hard to discover, by allowing more ACR proteins to be identified for use in expansion databases under conditions that can provide genome-wide signatures.

</p>
       </Col>


       <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
            marginTop:"5vh",
            marginBottom:"3vh",
         }}
        >Reference 
        </h2>
      </Col>
      <Col md={{span:10,offset:1}}>
       <p>
1. Birkholz N., Fagerlund R.D., Smith L.M., Jackson S.A., Fineran P.C.. The autoregulator Aca2 mediates anti-CRISPR repression. Nucleic Acids Res. 2019; 47:9658-9665. 
</p><p>
2. Stanley S.Y., Borges A.L., Chen K.H., Swaney D.L., Krogan N.J., Bondy-Denomy J., Davidson A.R.. Anti-CRISPR-Associated proteins are crucial repressors of Anti-CRISPR transcription. Cell. 2019; 178:1452-1464. 
</p><p>
3. Borges A.L., Davidson A.R., Bondy-Denomy J.. The discovery, mechanisms, and evolutionary impact of Anti-CRISPRs. Ann. Rev. Virol. 2017; 4:37-59. 
</p><p>
4. Bondy-Denomy J. Protein inhibitors of CRISPR-Cas9. ACS Chem. Biol. 2018; 13:417-423.
</p><p>
5. Pawluk A., Staals R.H., Taylor C., Watson B.N., Saha S., Fineran P.C., Maxwell K.L., Davidson A.R.. Inactivation of CRISPR-Cas systems by anti-CRISPR proteins in diverse bacterial species. Nat Microbiol. 2016; 1:16085. 
</p><p>
6. Uribe R.V., van der Helm E., Misiakou M.A., Lee S.W., Kol S., Sommer M.O.A.. Discovery and characterization of Cas9 inhibitors disseminated across seven bacterial Phyla. Cell Host Microbe. 2019; 25:233-241.
</p><p>
7. Hynes A.P., Rousseau G.M., Lemay M.L., Horvath P., Romero D.A., Fremaux C., Moineau S.. An anti-CRISPR from a virulent streptococcal phage inhibits Streptococcus pyogenes Cas9. Nat. Microbiol. 2017; 2:1374-1380.
</p><p>
8. Rauch B.J., Silvis M.R., Hultquist J.F., Waters C.S., McGregor M.J., Krogan N.J., Bondy-Denomy J.. Inhibition of CRISPR-Cas9 with bacteriophage proteins. Cell. 2017; 168:150-158.
</p><p>

</p>
       </Col>
    
    </div>
  )
}

export default ProofOfConcept