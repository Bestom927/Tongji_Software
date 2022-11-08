import React ,{ useState }from 'react'
import './Communication.css'
import Carousel from 'react-material-ui-carousel'

function LecturePhotoPlayer(){
  const [photoList] = useState([
    'https://static.igem.wiki/teams/4272/wiki/education-lecture3.jpg',
    'https://static.igem.wiki/teams/4272/wiki/education-lecture4.jpg',
    'https://static.igem.wiki/teams/4272/wiki/education-lecture5.jpg',
  ]);
  return (
    <Carousel
      autoplay
      infinite
      autoplayInterval={2000}
      className='edu-lecture-swipper'
    >
      {photoList.map(val => (
        <img
          key={val}
          src={val}
          alt=""
          style={{ width: '81vmin', verticalAlign: 'right' ,height:"63vmin",borderRadius:"2vmin 2vmin 2vmin 2vmin"}}
        />
      ))}
    </Carousel>
  )
}

function GamePhotoPlayer(){
  const [photoList] = useState([
    'https://static.igem.wiki/teams/4272/wiki/game-1.png',
    'https://static.igem.wiki/teams/4272/wiki/game-2.png',
    'https://static.igem.wiki/teams/4272/wiki/game-3.png',
    'https://static.igem.wiki/teams/4272/wiki/game-4.png',
  ]);
  return (
    <Carousel
      autoplay
      infinite
      autoplayInterval={2000}
      className='edu-game-swipper'
    >
      {photoList.map(val => (
        <img
          key={val}
          src={val}
          alt=""
          style={{ width: '120vmin', verticalAlign: 'right' ,height:"55vmin",borderRadius:"2vmin 2vmin 2vmin 2vmin"}}
        />
      ))}
    </Carousel>
  )
}

const EduTitle = () => {
  return (
      <div className='edu-title'>
          <div id='edu-bigtitle'>Communication&Education</div>
          <div id='edu-normaltitle'>Anti-CRISPR Genome-based Predicting Software</div>
      </div>
  )
}

const EduCommunication=()=>{
    return(
      <div className='edu-page-box'>
          <div className='edu-communication'>

            <div id='edu-communication-title'>Communication</div>

            <div className="edu-Img" id="education-picture1" style={{paddingLeft:"81vw",marginTop:"-10vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education1.png" alt="education1.png" /></div>
            <div className="edu-Img" id="education-picture2" style={{paddingLeft:"76vw",marginTop:"-1vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education2.png" alt="education2.png" /></div>

            <div className='edu-content-box' style={{width:"50vw",height:"22vh"}}>
              <div className='edu-content' style={{top:"2vh"}}>
                We have always believed in education and communication as an important plank of our program.
                It is our way to communicate with the world and to pass on what we do and what we learn to every type of person in society.
                It may be difficult for people to fully understand the inextricable link between biological research and real life,
                but we believe that it is necessary to do what we can to provide an easy and understandable way to make synthetic biology accessible to all.
              </div>
            </div>


            <div className="edu-Img" id="education-picture3" style={{paddingLeft:"70vw",marginTop:"2vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education3.png" alt="education3.png" /></div>
            <div className="edu-Img" id="education-picture4" style={{paddingLeft:"76vw",marginTop:"18vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education4.png" alt="education4.png" /></div>
            <div className="edu-Img" id="education-picture5" style={{paddingLeft:"20vw",marginTop:"48vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education5.png" alt="education5.png" /></div>
            <div className="edu-Img" id="education-picture6" style={{paddingLeft:"66vw",marginTop:"50vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education6.png" alt="education6.png" /></div>
            <div className="edu-Img" id="education-picture7" style={{paddingLeft:"74vw",marginTop:"65vh"}}> <img src="https://static.igem.wiki/teams/4272/wiki/education7.png" alt="education7.png" /></div>

            <div className="edu-white-box" style={{width: "70vw",height:"50vh",left:"13vw"}}>
                <div className="edu-white-box-content" >
                    
                    <div id='edu-whitebox-tit'>
                        <div>4 ways to make</div>
                        <div>synthetic biology accessible.</div>
                    </div>

                    <br />
                    <div className='edu-box-detail'>
                        <div className="edu-content-detail edu-box-detail1" >

                            <div className='edu-circle-white-box' style={{left:"3vw",top:"10vh"}}>
                                <img src="https://static.igem.wiki/teams/4272/wiki/education-communication-icon1.png" alt="icon1" />
                            </div>
                            <div className='whitebox-detail-title' style={{marginLeft: "5vw"}}>Science Lectures for Kids</div>
                            <div className="whitebox-detail-text" style={{marginLeft:"5vw",marginTop:"1vh"}}>
                            We came to Erlian Primary School in September and brought this science course to the purples from Class 3 Grade 5.
                            </div>
                        </div>
                        
                        <div className="edu-content-detail edu-box-detail2" >
                            <div className='edu-circle-white-box' style={{left:"38vw",top:"10vh"}}>
                              <img src="https://static.igem.wiki/teams/4272/wiki/education-communication-icon2.png" alt="icon2" />
                            </div>
                            <div className='whitebox-detail-title' style={{marginLeft: "12vw"}}>Game program</div>
                            <div className="whitebox-detail-text" style={{marginLeft:"12vw",marginTop:"1vh"}}>
                            To show the function and mechanism of ACR protein and its discovery significance to young audiences aged 6-18 years in a simple and popular way. 
                            </div>
                        </div>

                        <div className="edu-content-detail edu-box-detail3" >
                            <div className='edu-circle-white-box' style={{left:"3vw",top:"30vh"}}>
                                <img src="https://static.igem.wiki/teams/4272/wiki/education-communication-icon3.png" alt="icon3" />
                            </div>
                            <div className='whitebox-detail-title' style={{marginLeft: "5vw",marginTop:"4vh"}}>Video Publication</div>
                            <div className="whitebox-detail-text" style={{marginLeft:"5vw",marginTop:"1vh"}}>
                            We introduced the story of the Anti-CRISPR protein and the important elements of our project on Chinese Youtube ”Bilibili”
                            </div>
                        </div>

                        <div className="edu-content-detail edu-box-detail4" >
                            <div className='edu-circle-white-box' style={{left:"38vw",top:"30vh"}}>
                              <img src="https://static.igem.wiki/teams/4272/wiki/education-communication-icon4.png" alt="icon4" />
                            </div>
                            <div className='whitebox-detail-title' style={{marginLeft: "12vw",marginTop:"4vh"}}>Brochure Delivery</div>
                            <div className="whitebox-detail-text" style={{marginLeft:"12vw",marginTop:"1vh"}}>
                            In order to let more people understand synthetic biology and gene editing, we designed cartoon characters and made brochures to be distributed in society. 
                            </div>
                        </div>
                    </div>

                </div>
            </div>


          </div>
      </div>
    )
}


const EduQuestionaire=()=>{
  return(
    <div className='edu-page-box' style={{ height: "95vh"}}>
        <div className='common-title'>Questionnaire</div>

        <div className='edu-content' style={{top:"2vh",width:"24vw",marginLeft:"15vw"}}>
        Before conducting our educational activities, we used a questionnaire 
        to understand the current level of public knowledge about gene editing 
        and Acr proteins. In addition to targeting biological researchers who are 
        aware of Acr proteins to determine our project topic (see Human Practices), we 
        also wanted to understand the general public's awareness of the safety of gene 
        editing. We asked people who had never used gene editing technology about their 
        knowledge of safety risk issues in CRISPR/Cas gene editing technology. The results 
        showed that 60% of people had no or little knowledge, which made us realize that 
        the general public may not be aware of the risks of gene safety, which reinforced 
        our desire to raise awareness of the safety of gene editing.
        </div>
        <div className="edu-Img" id='edu-questionaire1'><img src="https://static.igem.wiki/teams/4272/wiki/education-questionnaire1.png" alt="questionnaire1" /></div>
        <div className='edu-picture-remark' id='edu-picture1-remark'>Picture 1. Data from wenjuanxing: Your knowledge of safety risk issues in CRISPR/Cas gene editing technology</div>
        
        <div className='edu-content' style={{marginTop:"10vh",width:"60vw",marginLeft:"15vw"}}>
        We also cross-analyzed the questionnaire questions to see how much people who have not been involved in biological research know 
        about synthetic biology and found that all those have little to no knowledge. This also revealed that there is a conceptual gap 
        between synthetic biology research and public life and that people are not aware of synthetic biology products even though they 
        exist everywhere in their lives. This also reinforces the need for us to spread the word.
        </div>

        <div className="edu-Img" id='edu-questionaire2'><img src="https://static.igem.wiki/teams/4272/wiki/education-questionnaire2.png" alt="questionnaire2" /></div>
        <div className='edu-picture-remark' id='edu-picture2-remark'>Picture 2. Data from wenjuanxing: Have you had or are you involved in biological research?</div>

    </div>
  )
}

const EduLecture=()=>{
  return(
    <div className='edu-page-box' style={{height:"160vh"}}>
          <div className='common-title'>Science Lectures for Kids</div>

          <div className='edu-content' style={{marginTop:"4vh",width:"60vw",marginLeft:"15vw"}}>
          Due to the epidemic restrictions, we were unable to conduct many of our activities offline this year, 
          which did create a lot of difficulties for us. Although there are various online communication channels 
          due to the development of the Internet, we believe that "real communication" between people face to face cannot be replaced.
        </div>

        <div className='edu-content' style={{marginTop:"4vh",width:"60vw",marginLeft:"15vw"}}>
        In July of this year, we contacted Mr. Xia of Erlian Elementary School and introduced our project and the plan for the science 
        curriculum to him. He was very supportive of what we were doing and thought that what we were doing would help children understand 
        biology and develop a research interest. He also told us that this course would be a great enhancement for both of us, because children
         are more inquisitive and enthusiastic, and know more than we think, so maybe we can also gain and change a lot from our contact with them.
          Because of the epidemic, this offline science activity was also subject to many restrictions and policies, but finally, we successfully came 
          to Erlian Primary School in September and brought this science course to the purples from Class 3 Grade 5.
        </div>

        <div className="edu-Img" id='edu-lecture1'><img src="https://static.igem.wiki/teams/4272/wiki/education-lecture1.png" alt="lecture1" /></div>
        <div className="edu-Img" id='edu-lecture2'><img src="https://static.igem.wiki/teams/4272/wiki/education-lecture2.png" alt="lecture2" /></div>
        <div className='edu-picture-remark' id='edu-picture3-remark'>Picture 3. Li Shiyu represented our team providing synthetic biology knowledge to children</div>
        <div className='edu-picture-remark' id='edu-picture4-remark'>Picture 4. Lecture materials on synthetic biology that only retain key contents</div>
        <LecturePhotoPlayer/>
        <div className='edu-picture-remark' id='edu-picture5-remark'>Picture 5. The students listened to the lecture very carefully</div>

        <div className='edu-content' style={{marginTop:"-60vh",width:"15vw",marginLeft:"65%"}}>
        We were surprised by how well the children interacted with us and how much knowledge they had about gene editing.
         We were happy to see that the children understood a large part of what we thought was difficult to understand after talking to them. 
         The enthusiasm and feedback we felt from this offline teaching method were far beyond what we could have gotten from the online interaction.
          After this event, we also rethought the meaning of our project and the contribution we can make to humanity.
        </div>
    </div>
  )
}

const EduGame=()=>{
  return(
    <div className='edu-page-box'>
          <div className='common-title'>Game program</div>
          <GamePhotoPlayer/>

          <div className='edu-content' style={{marginTop:"2vh",width:"120vmin",marginLeft:"16vw"}}>
          This game is based on the project promoted by IGEM team tongji_Software.The project, the development of anti-CRISPR protein
           recognition and discovery tool, hopes to show the function and mechanism of ACR protein and its discovery significance to 
           young audiences aged 6-18 years in a simple and popular way. <br/>
          In terms of game implementation, through the simulation of CRISPR protein, ribosome, ACR protein and other elements, this game 
          shows how the ribosome generates ACR protein in the face of CRISPR protein and antagonizes it, which reflects the biological 
          characteristics of ACR protein and at the same time is interesting.
        </div>

        <div className='edu-content' style={{marginTop:"2vh",width:"120vmin",marginLeft:"16vw"}}>
        This game is a transformation of the traditional tower defense game, including three main elements: CRISPR protein, ribosome, 
        ACR protein. The CRISPR protein is the foreign "invasions", which take a fixed route to the destination and destroy a specific 
        gene sequence (used for the player's HP), while the ribosome is constructed by the player and placed in a selected position to 
        generate the ACR protein, which automatically listens for nearby CRISPR proteins and tracks them to cause damage. Its task is to 
        prevent CRISPR proteins from damaging the gene sequence.<br/>
        In the game, free ribosomes are randomly generated in the map. Players need to click to collect the randomly generated free ribosomes, 
        and then deploy the ribosomes to specific locations according to the actual situation to block the invasion of CRISPR protein. 
        The time for each deployed ribosome to generate ACR protein is only 15 seconds, and the deployed ribosome will disappear after 15 seconds. 
        Therefore, players need to make rational use of resources and take appropriate strategies to complete the protection of gene sequences.
        </div>
    </div>
  )
}

const EduVideo=()=>{
  return(
      <div className='edu-page-box' style={{height:"80vh"}}>
        <div className='common-title'>Video Publication</div>

            <div className='edu-content' style={{marginTop:"4vh",width:"120vmin",marginLeft:"15vw"}}>
            The growth of social media has made it easy to communicate online, and this has given us the idea to create 
            videos to educate and inform. The bilibili website, known as the "Youtube" of China, has a large number of users, 
            so we chose to put our video on the site. In the video, we introduced the story of the Anti-CRISPR protein and the 
            important elements of our project. The video has received almost 500 views and 183 likes, which is a very good spread.
            </div>

            <div className='edu-content' style={{marginTop:"26vh",width:"24vw",marginLeft:"15vw",float:"left",fontSize:"2.5vmin",fontWeight:"700"}}>
            iGEM-Tongji_ Introduction to Software2022 Anti CRISPR Protein Discovery Tool Project
            </div>
          <div className="edu-Img" id='edu-video'><img src="https://static.igem.wiki/teams/4272/wiki/education-video.png" alt="video" /></div>
          <br />
          <div className='edu-content' style={{marginTop:"40vh",width:"24vw",marginLeft:"15vw"}} >Bilibili:</div>

      </div>
  )
}

const EduBrochure=()=>{
  return(
    <div className='edu-page-box' style={{height:"135vh"}}>
        <div className='common-title'>Brochure Delivery</div>
        <div className='edu-content' style={{marginTop:"4vh",width:"120vmin",marginLeft:"15vw"}}>
        In order to let more people understand synthetic biology and gene editing, we designed cartoon characters and made brochures
         to be distributed in society. People found the pamphlets very cute when they received them, and some of the difficult points 
         were better understood in the form of drawings. We also explained the safety of gene editing in the brochure and explained our
          project to those who expressed a strong interest in synthetic biology.
        </div>

        <div className="edu-Img" id='edu-brochure1'><img src="https://static.igem.wiki/teams/4272/wiki/education-brochure1.png" alt="brochure1" /></div>
        <div className="edu-Img" id='edu-brochure2'><img src="https://static.igem.wiki/teams/4272/wiki/education-brochure2.png" alt="brochure2" /></div>
        <div className="edu-Img" id='edu-brochure3'><img src="https://static.igem.wiki/teams/4272/wiki/education-brochure3.png" alt="brochure3" /></div>
        <div className="edu-Img" id='edu-brochure4'><img src="https://static.igem.wiki/teams/4272/wiki/education-brochure4.png" alt="brochure4" /></div>
        <div className='edu-picture-remark' id='edu-picture7-remark'>Picture 7. We draw the basic contents of synthetic biology into a book</div>

        <div style={{width:"100vw",height:"55vh",marginTop:"60vh"}}>
            <div className="edu-Img" id='edu-bk1'><img src="https://static.igem.wiki/teams/4272/wiki/education-bk1.png" alt="edu-bk1" /></div>
            <div className="edu-Img" id='edu-bk2'><img src="https://static.igem.wiki/teams/4272/wiki/education-bk2.png" alt="edu-bk12" /></div>
        </div>
        
    </div>
  )
}

const Communication = () => {
  return (
    <div className='-communication'>
      <EduTitle/>
      <EduCommunication/>
      <EduQuestionaire/>
      <EduLecture/>
      <EduGame/>
      <EduVideo/>
      <EduBrochure/>
    </div>
  )
}

export default Communication