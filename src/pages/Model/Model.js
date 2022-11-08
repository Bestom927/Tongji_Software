import React from 'react'
import Col from 'react-bootstrap/Col';

const Model = () => {
  return (
    <div>      
      <img src="https://static.igem.wiki/teams/4272/wiki/model-bg.png"style={{
                height: "100%",
                width: "100%",
                
            }} alt="proof-page-img1" />


          <h1 className='head1' style={{
          color:"#0072F9",
          marginTop:"2vw",
          marginBottom:"2vw",
          }}
          >Project Modeling</h1>

      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Data Collecting</h2>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p style={{fontSize:"larger"}}>
      <b>Data source</b>
      </p>
      <p>
      Anti-CRISPRdb [1]
      </p>
      <p>
      The database was manually collected for Anti-Crispr proteins by screening the data against the literature. Then, the online resource was constructed for the efficient organization of these proteins. It contains available protein sequences, DNA sequences, coding regions, source organisms, taxonomy, virulence, protein interactors and their corresponding 3D structures.The database collects 136 validated Acr , 1253 Acrs from PLitature, and 2304 predicted potential Acr. Acr proteins span 91 families. These families can repress a wide range of CRISPR-Cas systems, including I-A~I-F, II-A, II-C, VIA, VAB, and III.
      </p>
      <img src="https://static.igem.wiki/teams/4272/wiki/model-4.png"
          style={{width:"90%",marginLeft:"5%"}}alt="model"/>

      <p>
      We focused on the 136 experimentally validated Anti-Crispr proteins in the literature included in this database and collected their protein sequences, coding regions and source organisms, etc. For the subsequent collection of protein features and genomic sequence features.
       </p>
       
       <p>For unknown genomic FASTA format files without gene annotation, we performed gene annotation by Prokka[5] software to generate GB format files for subsequent extraction of protein features and genomic sequence features.
        <br/><br/>
        <b>Prokka</b><br/>
        Whole genome annotation is the process of identifying features of interest in a set of genomic DNA sequences, and labelling them with useful information. Prokka is a software tool to annotate bacterial, archaeal and viral genomes quickly and produce standards-compliant output files.
        </p>


      </Col>



      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Feature Processing</h2>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p style={{fontSize:"larger"}}>
      <b><span style={{color:"#0072F9"}}>1</span> Protein Properties</b>
      </p>
      <p>
      With the .gb format file of the genome we downloaded, we extracted the protein sequence of the CDs from it as well as other important information, including gene ID, gene name, product, protein product ID, and gene start and stop positions.

      </p>
      
      <img src="https://static.igem.wiki/teams/4272/wiki/model-5.png"
          style={{width:"60%",marginLeft:"20%"}}alt="model"/>
      <div style={{display:"flex"}}>
      <p style={{width:"80%"}}>
      In addition, the protein sequence enables us to calculate the properties of the protein itself as features for subsequent prediction models. We calculate six protein properties: protein length, isoelectric point, hydrophobicity, stability, molecular weight, and proline frequency. Among them, isoelectric point, hydrophobicity, stability, and molecular weight are calculated based on the Bio.SeqUtils package in Biopython.
      
      </p>
        <img src="https://static.igem.wiki/teams/4272/wiki/model-6.png"
          style={{width:"20%"}}alt="model"/>
      </div>
          <br/>
      <p>
      The choice of the feature Proline frequency was mainly thought of during our preliminary research on AcRanker [2], an anti-CRISPR software prediction software. This model is a machine learning prediction model based entirely on the amino acid composition and frequency of sequences, and the Proline frequency is precisely the most influential feature in the AcRanker model and is much higher than the second one. Therefore, we tried to add this feature to our model.
      </p>
      <div style={{display:"flex"}}>
      <img src="https://static.igem.wiki/teams/4272/wiki/model-7.png"
          style={{width:"20%",height:"10%",marginTop:"10%",marginLeft:"10%"}}alt="model"/>
        <img src="https://static.igem.wiki/teams/4272/wiki/model-8.png"
          style={{width:"60%"}}alt="model"/>
      </div>

      </Col>



      <Col md={{offset:1}}>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p style={{fontSize:"larger"}}>
      <b><span style={{color:"#0072F9"}}>2</span>Protein Annotation<br/>Database<br/></b>
      </p>
      
      <div style={{display:"flex"}}>
      <p style={{width:"60%"}}>
      CONVERSED DOMAIN DATABASE(CDD) [3]
      <br/>
      <br/>
      CDD is a protein annotation resource consisting of a series of fully annotated multiple sequence alignment models for ancient structural domains and full-length proteins.
      We selected the cddmasters.fa.gz dataset. This dataset contains sequences in FASTA format, showing representative sequences for each conserved structural domain in the set.

      </p>
        <img src="https://static.igem.wiki/teams/4272/wiki/model-9.png"
          style={{width:"40%",marginTop:"0"}}alt="model"/>
      </div>
      <br/>
      <p>
      PROKARYOTIC VIRUS ORTHOLOGOUS GROUPS(pVOG) [4]
      <br/>
      <br/>
      The database contains 9,518 orthologous groups shared among nearly 3,000 thousand complete genomes of viruses that infect bacteria and archaea.
      We downloaded the 192,119 viral protein sequences and their annotations included in this database. We created the dataset in FASTA format after de-duplication.</p>

        <img src="https://static.igem.wiki/teams/4272/wiki/model-10.png"
          style={{width:"100%"}}alt="model"/>

      </Col>

      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p style={{fontSize:"larger"}}>
      <b>Protein Annotation<br/></b>
      </p>
      
      <p >
      To obtain a high confidence Acr set, if a protein has a clear function or a conserved structural domain, we tend to consider that the protein performs other functions as a non-Acr protein. We therefore include the feature of whether a candidate protein is annotated or not in our model. We determine whether a protein in the dataset is annotated by applying PSI-BLAST to CDD and pVOG with an e value cutoff of 10e-4.
      </p>
      
      <br/>
      <p style={{fontSize:"larger"}}>
      <b>HTH Downstream<br/></b>
      </p>
      
      <p >
      Guilt association is one of the common methods for Acr mining. Acr proteins are characterized by small size and are not conserved. Downstream of Acr usually encodes a homolog of an HTH-containing protein called Anti-CRISPR-associated protein (Aca), which is significantly more conserved in the virus than Acrs itself, and this greatly facilitates the detection of Acr proteins. We therefore added the feature of whether the candidate protein downstream encodes an HTH homologue to our model.
      We defined the following criteria to determine the feature: Whether there is an HTH-domain-containing protein encoded downstream of and adjacent to (within three genes) the Acr candidate within the same directon. We subjected the candidate proteins to a PSI-BLAST search against the PVOG and CDD datasets with an e-value cutoff of 5e-3. This feature was analyzed by the presence of HTH or helix-turn-helix terms in the annotation of the hit protein entries.
      </p>

      </Col>

      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p style={{fontSize:"larger"}}>
      <b><span style={{color:"#2e77e5"}}>3 </span>Genome-based features</b>
      </p>

         <p>
         After annotating the proteins, we introduced the concept of "directon", inspired by the literature[6]. The definition of directon in the literature is shown below, where the Acr gene is shown in gold and the surrounding proteins are indicated in blue. One of the characteristics of Acr proteins is that they are often located upstream of an HTH domain-containing gene. The Guilt-by-association approach commonly used in current Acr prediction models is based on the anti-CRISPR-associated protein (Aca), an HTH-containing protein usually encoded downstream of Acrs. Because Aca is significantly more conserved in the virus than Acrs itself, it is more easily detected. So, we can search the genomic neighborhoods encoding Aca homologs for potential Acrs. In terms of feature calculation, we refer to contiguous proteins on the same strand of up to 100 bp between adjacent proteins as a set of directons, and Acrs may fall in a directon along with small, indeterminate proteins.
         </p>
        <img src="https://static.igem.wiki/teams/4272/wiki/model-11.png"
          style={{width:"100%"}}alt="model"/>
         <p>
         Based on this concept we calculated four directon-based features, which are: the directon size, the number of proteins in the directon; the average length of proteins in the directon; the average spacer length of proteins in the directon; and the presence or absence of hth within the three genes downstream of the direction, expressed as T/F.
        <br/>Finally, we obtained the 12-dimensional feature matrix of the proteins, which was used for our construction of the prediction model.

         </p>
      </Col>

      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#2e77e5",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Data Pre-processing          </h2>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      
      <p>
         
      In total, there were 73 positive and 31,428 negative data from all the genomes obtained. We first preprocessed the data, mainly for processing the negative data to reduce the number. Firstly, we restricted the length between &gt;=30 and &lt;=400, which mainly considered the length characteristics of Acr proteins; then we used cd-hit to de-redundant the data, setting the similarity greater than or equal to 40% as a class, and finally obtained 13725 negative data.
      </p>
      <p>
      <b>cd-hit [7]</b><br/>
      It is a tool for clustering protein sequences or nucleic acid sequences to remove redundant sequences based on sequence similarity and is generally used to construct non-redundant data sets for subsequent experimental analysis.
      cd-hit is a greedy incremental clustering method that first sorts the input sequences according to their length and processes them in order from longest to shortest. The longest sequence is automatically classified into the first class and becomes the representative sequence of the first class. And then, the remaining sequences are compared with the representative sequences found before them. They are classified into one of the classes or become the representative sequence of a new cluster according to the sequence similarity. In the default mode, the sequences are compared only with the representative sequences in each cluster (the longest sequence in this class) and not with the other sequences in this class. 


      </p>
      </Col>





      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Data Processing</h2>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p>There are mainly two types of original data. </p>

      <p>Here, 0 represents non ACR protein, with a total of 13725 pieces of data, and 1 represents ACR protein, with 73 pieces of data, which are two types of imbalance problems. The default threshold of most models is the median of the output value. For example, the output range of logical regression is [0,1]. When the output of a sample is greater than 0.5, it will be divided into positive examples, and vice versa. When the categories of data are unbalanced, the default classification threshold adopted may cause the output to be all counter examples, resulting in false high accuracy and classification failure. Therefore, it is necessary to adjust the imbalance of data through sampling.
      </p>
      <p>
      Under sampling is a method to alleviate class imbalance. It is realized by discarding samples, which can be understood as less sampling for the classes with more samples in the training set. After undersampling the two kinds of data, the number of non acr protein and acr protein was 73.
      </p>
      </Col>
          

      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
        style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Model Establishment</h2>
      </Col>
      <Col md={{span:10,offset:1}} style={{marginBottom:"2vh"}}>
      <p>In this problem, we mainly use the Support Vector Machine (SVM) algorithm in supervised learning, the na?ve Bayes algorithm, and the random forest algorithm.

</p>

      <p>The decision boundary of SVM is the maximum margin hyperplane for learning samples. SVM uses hinge loss function to calculate empirical risk and adds regularization term to the solution system to optimize structural risk. It is a sparse and robust classifier.
    </p>
      <p> 
Naive Bayesian algorithm is a classification method based on Bayesian theorem and independent assumption of feature conditions. For a given training set, firstly, learn the joint probability distribution of input and output based on the independent hypothesis of characteristic conditions (Naive Bayesian method, which is a mechanism to obtain the model through learning, obviously belongs to the generation model); Then, based on this model, for a given input x, the output y with the maximum a posteriori probability is obtained by using bayesian theorem.
 </p>
 <img src="https://static.igem.wiki/teams/4272/wiki/proof-equation.png"
        style={{width:"40vw",marginLeft:"15vw"}}alt="model"/>
 <p>In the model, the main algorithm is random forest algorithm (Figure 1):</p>
 <img src="https://static.igem.wiki/teams/4272/wiki/model-1.png"
        style={{width:"80vw",marginLeft:"0vw"}} alt="model"/>
<br/><br/>
        <div style={{textAlign:"center",fontSize:"small"}}>Figure 1 random forest algorithm</div>
<br/><br/>
<p>
First, build each tree in the random forest according to the following rules:
</p>
<p>
N represents the number of training cases (samples), and M represents the number of features. Input feature number m to determine the decision result of a node on the decision tree; Where m should be much less than M. Take N samples from N training cases (samples) in the way of put back sampling to form a training set (bootstrap sampling), and use the unexampled cases (samples) for prediction to evaluate the error. For each node, m features are selected randomly, and the decision of each node in the decision tree is determined based on these features. According to these m characteristics, the optimal splitting mode is calculated. Each tree will grow completely without pruning, which may be adopted after building a normal tree classifier).
In this model, we mainly select the following features:<b>Annotation, hth, protein_length, directon, directon_size, directon_protein_lengths_mean, directon_spacing, hth_downstream, protein_annotated, isoelectric_point, hydrophobicity, instability, weight, p_frequent.</b> 
</p>
<p>
After completing the construction of the decision tree, the random forest is constructed(Figure 2), and the data and features to be selected are randomly selected. On the random selection of data: First, we take the sampling with returns from the original dataset to construct a sub dataset. The data volume of the sub dataset is the same as that of the original dataset. Elements in different sub data sets can be repeated, and elements in the same sub data set can also be repeated. Second, use the sub data set to build a sub decision tree, put this data into each sub decision tree, and each sub decision tree outputs a result. Finally, if new data need to be classified through the random forest, the output of the random forest can be obtained by voting the judgment results of the sub decision tree. As for the random selection of features to be selected, similar to the random selection of data sets, each splitting process of subtrees in a random forest does not use all the features to be selected, but randomly selects a certain feature from all the features to be selected, and then selects the best feature from the randomly selected features. This can make the decision trees in the random forest different from each other, improve the diversity of the system, and thus improve the classification performance.

</p>


<img src="https://static.igem.wiki/teams/4272/wiki/model-2.png"
        style={{width:"80vw",marginLeft:"0vw"}}alt="model"/>

<br/><br/>
        <div style={{textAlign:"center",fontSize:"small"}}>Figure 2 Construction of random forest</div>
<br/><br/>


<p><b>Advantages of the random forest algorithm:</b><span style={{color:"#0072F9"}}> high accuracy, can effectively run on large data sets, introduces randomness, and is not easy to over fit.</span> The random forest has a good ability to resist noise, can process very high dimensional data, and does not need to reduce dimensions. It can not only process discrete data, but also process continuous data, and does not need to standardize the data set, and the training speed is fast. It can obtain the ranking of variable importance It is easy to realize parallelization, get good results even for the default value problem, and the number of super parameters is not very large. In addition, we can intuitively understand their meanings.
</p>
<p><b>
Disadvantages of random forest algorithm:</b><span style={{color:"#0072F9"}}> Although the random forest algorithm is fast enough, when the number of decision trees in the random forest is large, the space and time required for training will be large, which will lead to slower models.</span> Therefore, in practical application, if the real-time requirement is very high, it is better to choose other algorithms.

</p>




      </Col>

      
      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Model Optimization</h2>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p>Here, we use the grid search method, which is an exhaustive search method for specifying parameter values. The optimal learning algorithm is obtained by optimizing the parameters of the estimation function through cross validation.
</p>

      <p>
That is, arrange and combine the possible values of each parameter, and list all possible combination results to generate a "grid". Each combination is then used for SVM training, and performance is evaluated using cross validation. Cross validation(Figure 3) refers to taking most of the given modeling samples to build a model, leaving a small part of the samples to predict with the just established model, calculating the prediction error of the small part of the samples, and recording their sum of squares. This process continues until all samples are predicted once and only once, and then the square sum of the prediction error of each sample is added. 
  </p>
  
  <img src="https://static.igem.wiki/teams/4272/wiki/model-3.png"
        style={{width:"80vw",marginLeft:"0vw"}}alt="model"/>


<br/><br/>
        <div style={{textAlign:"center",fontSize:"small"}}>Figure 3 Cross validation</div>
<br/><br/>


  <p>After the fitting function has tried all the parameter combinations, it returns a suitable classifier and automatically adjusts to the best parameter combination. You can use clf.best_ params_ Get parameter values.</p>
      
      
      <p>[1] Chuan Dong, Ge-Fei Hao, Hong-Li Hua, Shuo Liu, Abraham Alemayehu Labena, Guoshi Chai, Jian Huang, Nini Rao, Feng-Biao Guo; Anti-CRISPRdb: a comprehensive online resource for anti-CRISPR proteins, Nucleic Acids Research, gkx835, https://doi.org/10.1093/nar/gkx835
<br/>[2] Eitzinger S, Asif A, Watters KE, Iavarone AT, Knott GJ, Doudna JA, Minhas FUAA. Machine learning predicts new anti-CRISPR proteins. Nucleic Acids Res. 2020 May 21;48(9):4698-4708. doi: 10.1093/nar/gkaa219. PMID: 32286628; PMCID: PMC7229843.
<br/>[3] Marchler-Bauer, A. et al. Cdd/sparcle: Functional classification of proteins via subfamily domain architectures. Nucleic Acids Res. 45, D200-D203 (2017)
<br/>[4] Grazziotin, A. L., Koonin, E. V. & Kristensen, D. M. Prokaryotic virus orthologous groups (pvogs): a resource for comparative genomics and protein family annotation. Nucleic Acids Res. 45, D491-D498 (2017)
<br/>[5] SeemannT. Prokka: rapid prokaryotic genome annotation. Bioinformatics 2014 Jul 15;30(14):2068-9. PMID:24642063
<br/>[6] Gussow, A.B., Park, A.E., Borges, A.L. et al. Machine-learning approach expands the repertoire of anti-CRISPR protein families. Nat Commun 11, 3784 (2020). https://doi.org/10.1038/s41467-020-17652-0
<br/>[7] Fu, Limin et al. "CD-HIT: accelerated for clustering the next-generation sequencing data." Bioinformatics (Oxford, England) vol. 28,23 (2012): 3150-2. doi:10.1093/bioinformatics/bts565
</p>
      
      </Col>






      <br/>
          <br/>
          <br/>

          <br/>
   </div>
  )
}

export default Model