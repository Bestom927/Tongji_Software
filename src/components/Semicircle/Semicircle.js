import React  from "react";
import './Semicircle.css';

const Semicircle = () =>{
    //页面渲染
    return(

        <div className='backgroudDiv' >

        <div className="title-info" style={{color: "#0176FF"}}>
            Concept Generation
        </div>
        <div className="title-content" style={{	color: "#42597A"}}>
            <div> We looked for answers to this question through many different channels and approaches. We consulted </div>
            <div>our instructor and biology experts, reviewed literature, discussed within the team, collaborated with different teams, </div>
            <div>visited hospitals, companies and schools ...... and finally, our project was born.</div>
        
        </div>
        <div className="pure_bottom">
            <div id="jump-region">
                <div className="jump-box" id="jump-box1">  
                    <div id="jump-icon-3User"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-3user.png" alt="3User" /></div>
                    <div className="jump-instance">Peer review</div>
                </div>
                <div className="jump-box" id="jump-box2">  
                    <div id="jump-icon-Chat"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-chat.png" alt="Chat" /></div>
                    <div className="jump-instance">Brainstorming</div>
                </div>
                <div className="jump-box" id="jump-box3">  
                    <div id="jump-icon-Edit"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-edit.png" alt="Edit" /></div>
                    <div className="jump-instance">Teacher assistance</div>
                </div>
                <div className="jump-box" id="jump-box4">  
                    <div id="jump-icon-Search"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-search.png" alt="Search" /></div>
                    <div className="jump-instance">Literature review</div>
                </div>
                <div className="jump-box" id="jump-box5">  
                    <div id="jump-icon-AddUser"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-adduser.png" alt="AddUser" /></div>
                    <div className="jump-instance">Collaborations</div>
                </div>

                <div id="center-photo2"><img id="centerPho2" src="https://static.igem.wiki/teams/4272/wiki/discussion-photo2.png" alt="中间图片2" /></div>
                <div id="center-photo1"><img id="center1" src="https://static.igem.wiki/teams/4272/wiki/discussion-photo1.png" alt="中间图片1" /></div>
            </div>     

            {/* 内嵌文案区域 */}
            <div>
                <div className="title-info" style={{color: "white"}}>
                ANTI-CRISPR?
                </div>
                <div className="title-content" style={{color: "white"}}>
                    <div> In 2013, scientists were the first to discover the phenomenon of anti-CRISPR in the phage of  </div>
                    <div>Pseudomonas aeruginosa, and thus the anti-CRISPR protein was discovered. </div>
                </div>

                <div style={{width: "100%" ,height:"48vh"}}>
                    <div className="white-box" style={{width: "23vw",height:"45vh",left:"22vw",fontSize:"1.8vmin"}}>
                        <div className="white-box-content">
                            
                            <div style={{width:"19vw"}}>
                                    Anti-CRISPR has brought a breakthrough in
                                gene editing, as anti-CRISPR proteins are not  
                                only used to suppress off-target effects and
                                thus improve the safety of synthetic biology
                                experiments but also act as inhibitors of gene 
                                editing regulation, providing synthetic 
                                biologists with more optional tools for 
                                experimental design. 
                            </div>
                        </div>
                    </div>

                    <div className="white-box" style={{width: "15vw",height:"45vh",left:"47vw"}}>
                        <div className="white-box-content" >
                            <img src="https://static.igem.wiki/teams/4272/wiki/whitebox-photo1.png" alt="WBP1" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}>Genetically encodable</div>
                            <div className="box-content-detail">
                                <div style={{width:"11vw"}}>
                                    Anti-CRISPR genes can be encoded and
                                    delivered to cells in vivo via vectors
                                    or stop gene drive in situ. Because
                                    they are separate from the CRISPR-Cas
                                    system, they can be deployed as needed
                                    to turn off or maintain the desired
                                    dynamic range of Cas activity.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="white-box" style={{width: "15vw",height:"45vh",left:"64vw",fontSize:"1.6vmin"}}>
                        <div className="white-box-content" >
                                <img src="https://static.igem.wiki/teams/4272/wiki/whitebox-photo2.png" alt="WBP2" />
                                <div style={{fontWeight: "600",fontSize:"2vmin"}}>Easy to use</div>
                                <div className="box-content-detail">
                                    <div style={{width:"11vw"}}>
                                    Anti-CRISPR proteins can be easily integrated into a wide range of systems without the need for expensive ligands, equipment, or protein engineering. The direct mode of action of some anti-CRISPR proteins ensures their functions in heterologous hosts. They are also complementary to many existing regulatory strategies.
                                   </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "100%" ,height:"35vh"}}>
                    <div className="nobottom-box"  style={{	left:"22vw",width: "23vw",height:"32vh"}}>
                        <div className="white-box-content" >
                                <div style={{width:"19vw",fontSize:"1.4vmin"}}>
                                    There have been successful experiments using anti-CRISPR proteins to regulate gene editing [2] and there are also synthetic biologists 
                                    analyzing the potential applications of anti-CRISPR proteins [3], which could indicate that anti-CRISPR has a very high potential to become a new tool for gene editing. 
                                    Currently, with a large number of viral macro genomic discoveries and the rapidly growing prokaryotic genomic data, 
                                    which may contain a large number of novel anti-CRISPR proteins generated by the arms race, it suggests that there are still a large number of potential anti-CRISPR proteins waiting to be discovered.
                                </div>
                        </div>
                    </div>


                    <div className="white-box" style={{width: "32vw",height:"36vh",left:"47vw",float:"left"}}>
                       <div className="white-box-content" >
                            <img src="https://static.igem.wiki/teams/4272/wiki/whitebox-photo3.png" alt="WBP3" />
                            <div style={{fontWeight: "600",fontSize:"2vmin"}}>Broad-spectrum and Diversity</div>
                            <div className="box-content-detail">
                               <div style={{width:"28vw"}}>
                               Many anti-CRISPR proteins, such as AcrIIA5, AcrIIC1, and AcrVA1, 
                               have been found to inhibit multiple homologs of their targets. 
                               This broad-spectrum activity can be used to regulate multiple 
                               natural and engineered variants of the CRISPR-Cas system without 
                               the need to re-engineer each Cas protein. Moreover, multiple anti-CRISPR
                               proteins have been identified that can target the same nucleases, but with
                                widely varying sizes, inhibitory strengths, and mechanisms of action. 
                                Therefore, anti-CRISPR proteins can be selected and optimized according 
                                to the needs of the analysis.
                               </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nobottom-box"  style={{	left:"22vw",width: "56vw"}}>
                    <div className="white-box-content" >
                            <div style={{fontSize:"1vmin"}}>
                            <div style={{fontWeight:"600"}}>Reference:</div>
                            <div> [1] Knott GJ, Doudna JA. CRISPR-Cas guides the future of genetic engineering. Science. 2018 Aug 31;361(6405):866-869.
                            </div>
                            <div>[2] Jain, Surbhi et al. “Precise Regulation of Cas9-Mediated Genome Engineering by Anti-CRISPR-Based Inducible CRISPR Controllers.” ACS synthetic biology vol. 10,6 (2021): 1320-1327.</div>
                            <div> [3] Zhang, Yadan, and Mario Andrea Marchisio. “Type II anti-CRISPR proteins as a new tool for synthetic biology.” RNA biology vol. 18,8 (2021): 1085-1098.</div>
                           

                            </div>
                    </div>
                </div>
            </div>
        </div>
</div>

    )
}

//导出组件
export default Semicircle