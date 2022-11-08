import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2021.12
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Team set up
            </Typography>
            <Typography>We set up our team at this time. 
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.01
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            The First Meeting
            </Typography>
            <Typography>We had our first meeting! </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
             Biology team paper research
            </Typography>
            <Typography>We start our Biology team paper research. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Software team front-end learning
            </Typography>
            <Typography>We start our Software team front-end learning</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.03-2022.07
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Inspiration & Problems 
            </Typography>
            <Typography>Because of the ubiquity of gene editing in synthetic biology research, we initially focused on this area with the hope that our project would improve existing problems from this perspective. In this regard, we chose various channels to determine our research topic and the problem we want to solve.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.03-2022.05
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/email-with-liu.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Email exchange with Dr. Liu
            </Typography>
            <Typography>After determining our initial idea, we talked with our advisor, Dr. Liu, about our needs and what we wanted to do since he had some attainments in the field of gene editing. During this process, our teacher also introduced us to many nice frontier directions at current, including PRIME editing, Cas modification, etc. Finally, the anti-CRISPR protein caught our attention. We also had a lively discussion by email on the current state of research in Anti-CRISPR and our research proposal, which led to the initial determination of our research topic. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
       <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.05
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/software-test.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Software testing
            </Typography>
            <Typography>After reviewing the relevant literatures, we found that there are some existing Acr-related databases and softwares, such as Anti- CRISPRdb, AcRanker, and ACRFINDER, and we wanted to gain insight into their strengths and weaknesses, so we conducted evaluation tests for different software. Finally, we found that most of the existing prediction software is based on protein sequences, and there is still room for improvement of usability, so we believe that it is feasible to develop software for easy and efficient mining of novel Acr proteins from the genome.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.05-2022.07
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/wechat-with-liu.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Communication with Dr.Liu
            </Typography>
            <Typography>After the initial determination of our design plan, we further communicated with Dr. Liu, hoping that he could evaluate the feasibility of our plan. Dr. Liu affirmed our idea and thought our project was innovative. He also pointed out some difficulties we might face, such as lack of data for our completion. This was a very great reference value for our project. With Dr. Liu's suggestion, we also changed part of our plans to make them more practical. At the same time, he also gave us guidance on the features and model selection in model training, which was very useful for our subsequent modeling process.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
       <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.05-2022.10
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
             Design & Improvement
            </Typography>
            <Typography>Due to the current rapid development of macroeconomics, many potential Acr proteins are waiting to be mined, thus expanding the ranks of the Acr protein family, and providing more available tools for synthetic biology. Therefore, to enhance the people's knowledge about Acr proteins and encourage their participation in Acr protein discovery, which contribute to the mining of the value of Acr protein applications in synthetic biology, we hope to design an Acr mining software AcrGPS that is easily usable, high-throughput-compatible and available to users with inferior professional background. We try to keep improving our design by constantly communicating with our teachers and students to make it meet people's needs more. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
       <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.05-2022.07
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Questionnaire 
            </Typography>
            <Typography> To realize the awareness of gene editing, the knowledge of Anti-CRISPR protein and application of related software among current biological researchers, we designed a questionnaire, then distributing and collecting it on the internet. 154 questionnaires were collected in total, most of which were from people with biological research background, and the specific distribution can be seen in the figure below.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.06
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Interviews  
            </Typography>
            <Typography>To gain insight into the specific views on gene editing and Acr proteins, we selected individual questionnaire completers for in-depth interviews. During the communication with them, we also found some possible problems in the application of Acr proteins.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.07-2022.09
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Meaning & Applications
            </Typography>
            <Typography>We are constantly searching for the practical meaning of our project, hoping to find answers by visiting workers from various professional field. It is such a continuous communication process that help us not only gain a lot of different experiences, but also overturn some inherent ideas. This definitely is the importance of the human practice process, many facts are far from simply knowledge learning from books and the Internet.</Typography>
            </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.07
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Shanghai Fudan-Zhangjiang Bio-Pharmaceutical Co., Ltd.
            </Typography>
            <Typography>We also had an online meeting with Mr. Xu, an employee of a biopharmaceutical company, who wanted to understand the possibility of the practical use of Acr protein in bioengineering. He thought that the regulation of gene editing in production is very important and that a gene-editing inhibitor like Acr is of great interest if it can be well developed and utilized. He also appreciated our project and gave us some great ideas.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.08
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/ccic.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            CCIC
            </Typography>
            <Typography>CCiC (China iGEMer Community Conference) was successfully held at Shanghai University of Science and Technology from August 18-22, 2021. We attended the conference online and presented our project to other Chinese iGEM teams, while our presentation was broadcasted to the public on the bilibili platform. We got many suggestions and questions from experts and other teams about our project, which led us to do further literature review and research on the application of Anti-Crispr protein.</Typography>
         </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.08-2022.10
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/sysu.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Communication with SYSU-Software
            </Typography>
            <Typography>After the CCiC conference, we got in touch with SYSU_Software's students. Through the communication, we learned that SYSU_Software's project was about mining Crispr-Cas-like defense systems, which was partly related to our team's topic.SYSU_Software's suggestions helped us to optimize our model. In addition, later in the project, we provided SYSU_Software with data results to test and validate their project as well as our project.
                In fact, the collaboration between the two teams went far beyond the scope of "Collaboration". For more information, please see <a href="https://2022.igem.wiki/tongji-software/partnership">Partnership.</a></Typography>
            </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
       <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.08
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/dut.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Communication with DUT_China
            </Typography>
            <Typography>In our exchange with the DUT_China team, we also discussed the current state of research on the off-target effects of gene editing and whether Acr proteins have advantages in avoiding off-target effects. (See Partnership) By sharing the information we collected and the content of the project, we concluded that Acr protein has an irreplaceable advantage to deal with off-target effects and it is broad spectrum and easy usability make it a convenient tool.</Typography>
            </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.09
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/communicat-professor.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Communication with Professors 
            </Typography>
            <Typography>We also introduced our project to Prof. Guo, Prof. Du, Prof. Zhang, and Prof. Lv from the School of Life Sciences and Technology of Tongji University who recognized our project completion and gave valuable suggestions. They thought that there was still a long way between our software and the practical application of Acr proteins in synthetic biology, which gave us a clearer direction for the further extension of the iGEM project, and we also hoped that our project could make a contribution to the research of Acr.</Typography>
         </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.09
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/in-fudan-hospital.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            The Obstetrics & Gynecology Hospital of Fudan University
            </Typography>
            <Typography>In September 2022 our team went to The Obstetrics & Gynecology Hospital of Fudan University to talk to the doctors and introduce the iGEM competition and our project to them. They were excited when we talked about the Acr protein to improve the safety of gene editing. Probably, when we use gene editing in our usual biological experiments, the gene editing technology has been more mature because of the standardized and process-oriented operation to avoid the off-target effect of gene editing. However, in the medical field, it is very crucial to address off-target effects, and the safety of gene editing is at the first rank in research fields such as gene therapy. They believe that the Acr protein that we have mined is very useful and look forward to the day when this protein can bring great benefits to human beings.</Typography>
            </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
       <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.09
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/in-erlin.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
             Erlian Primary School
            </Typography>
            <Typography>When we preparing for the communication with Erlian Elementary School, we shared with Mr. Xia, the teacher of the elementary school's science and technology class, and introduced synthetic biology and the iGEM competition to him. We also asked him if a project like ours could do anything for younger children like elementary school students. He said, "Actually, elementary school students are more knowledgeable than we think, probably because of the advanced internet. There is a lot of knowledge that we think children won't know, but that just comes from our subjective assumption." This also inspired us to go into elementary schools to conduct a gene editing science curriculum (see <a href="https://2022.igem.wiki/tongji-software/communication">Communication</a>) to bring more attention to gene editing in our lives. The successful completion of our course was supported and endorsed by him, and he alse helped us with many formalities.</Typography>
            </Paper>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.10
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/ustc.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Communication with USTC_Software 
            </Typography>
            <Typography>On October 3, 2022, we had an online communication of projects with USTC_Software students. This year, USTC_Software focused on predicting enzymes with higher single-step reaction activity by reaction type based on existing databases, which has similarity to the work of our project.
                During the discussion, we suggested that USTC_Software's project could take interactions and docking between reactants into account for enzyme selection. USTC_Software students suggested that we validate our project with examples such as experiments, rather than data from databases. We all gained very good suggestions.</Typography>
         </Paper>
        </TimelineContent>
      </TimelineItem>


  
      <TimelineItem>
       <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.10
          </Typography>
          <img src="https://static.igem.wiki/teams/4272/wiki/sjtu.png" alt="process" id="process"
             style={{height:'20vh'}}>
          </img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Communication with SJTU_Software
            </Typography>
            <Typography>On October 4, 2022, we met and exchanged ideas with SJTU_Software students online. After having a preliminary understanding of each other's projects, the pair had some discussions and reflections on both projects. 
                They questioned whether we could train a higher quality model with a small positive dataset when training the model, and we introduced them to the undersampling approach. We doubted the specific application of their project and learned more about the value of the actinomycete allogeneic metabolism model. 
                Through the collision of thoughts with SJTU_Software students, both sides reviewed their projects again and helped the further improve.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2022.10
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            The end of our work 
            </Typography>
            <Typography>The end.</Typography>
         </Paper>
        </TimelineContent>
      </TimelineItem>

      
    </Timeline>
  );
}
