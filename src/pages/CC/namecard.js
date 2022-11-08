function NameCard(props){
    if(props.name==="biology")
    return(
        <>
    <p style={{fontWeight:"bold" ,fontSize:"17px"}}> Our team composed by 5 people, we were mainly responsed for the whole synthetic biology part, including concept generated, contact partnership, data analysis, and etc. 
      </p>
      <br/>
      <img src="https://static.igem.wiki/teams/4272/wiki/bio1.png" alt="bio1" className="portrait"/>
      &nbsp;&nbsp;
      <img src="https://static.igem.wiki/teams/4272/wiki/bio2.png" alt="bio2" className="portrait"/>
      &nbsp;&nbsp;
      <img src="https://static.igem.wiki/teams/4272/wiki/bio3.png" alt="bio3" className="portrait"/>
      &nbsp;&nbsp; &nbsp;&nbsp;····
        </>
    )

    else if (props.name==="software")
    return(
        <>
        <p style={{fontWeight:"bold" ,fontSize:"17px"}}> 
        Our team composed by 4 people, we were mainly responsed for the software construction, game logic design, wiki support, and etc.
      </p>
      <br/>
      <img src="https://static.igem.wiki/teams/4272/wiki/zzh.png" alt="sof1" className="portrait"/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src="https://static.igem.wiki/teams/4272/wiki/cc.png" alt="sof2" className="portrait"/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src="https://static.igem.wiki/teams/4272/wiki/yx.png" alt="sof3" className="portrait"/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src="https://static.igem.wiki/teams/4272/wiki/yfy.png" alt="sof4" className="portrait"/>
       &nbsp;&nbsp;
      </>
    )
   
    else
    return(
    <>
       <p style={{fontWeight:"bold" ,fontSize:"17px"}}> 
       The last part of our project is art design, mainly responsed for the graphic part, presentation poster, wiki design, game UI design, and etc.
     </p>
      <br/>
      <img src="https://static.igem.wiki/teams/4272/wiki/lxc.png" alt="des" className="portrait"/>
       &nbsp;&nbsp;
    </>
    )
}

export default NameCard;