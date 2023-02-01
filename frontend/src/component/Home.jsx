import React,{useState} from "react";
import Navbar from "./Navbar";
import style from "./Home.module.css";
import {ImPower} from "react-icons/im"
import {CgArrowLongRightC,CgArrowLongRight} from "react-icons/cg";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"


const Home = () => {
  const [data,setData]=useState([
    {
      distribution:50,
      transction:16.6,
      roomrent:375,
      img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRrW4H_I9BJZqLL9yoxpm7f7Ar3d2OamN9w&usqp=CAU",
      img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRrW4H_I9BJZqLL9yoxpm7f7Ar3d2OamN9w&usqp=CAU",
      img3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GCLlsnJWpN214aTwvRDa--EOMZQvdMGl00jAz8Zr1g&s",
      totalContacts:18,
      description1:"It is a long established fact that a reader will be distracted by the readalbe content of apage when looking at its layout"
      
    }
  ])
 
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.absoluteDiv}>
        <div ><img className={style.absoluteDiv1} src={data[0].img1} alt="" /></div>
        <div className={style.absoluteDiv2}>Pro House Collection</div>
      </div>
      <div className={style.flexDiv}>
        <div> 
        <div className={style.bigFont} >
        <h1>
          {" "}
          <span className={style.span1}>Dream</span>
          <span> Home Is</span>
          <span>   Right</span>
          <span className={style.span2}> Here</span>
        </h1>
      </div>
      <p>
        {data[0].description1}
      </p>
      <div className={style.flexDiv1}>
        <div className={style.contactDiv}>ContactUs</div>
        <div className={style.rupeeDiv}>
          <div><CgArrowLongRightC/>{`${data[0].totalContacts}k`}</div>
          <div className={style.smallFont}>It is a long fact that a reader</div>
        </div>
      </div>
        </div>
        <div><img src={data[0].img2} alt="" /></div>
      </div>
      <div className={style.arrowDiv}><div><CgArrowLongRight/></div></div>
      <div className={style.lastFlexDiv}>
        <div>
          <div className={style.circleDiv}></div>
          <div>
          <h3 className={style.h1Div}>Plenty of Room For Everyone <span className={style.span2}> Even for</span> Your Car</h3>
        </div>
        </div>
        <div>
          <div className={style.modernStyle}>
            <div>
              <div className={style.modernStyle1}>Modern style living Home</div>
              <div className={style.modernStyle2}>{`$${data[0].roomrent}`}</div>
              <div></div>
            </div>
            <div className={style.imageDiv}>
              <img src={data[0].img3} alt="" />
            </div>
           
          </div>
        </div>
        <div>
          <div>owned transcation value</div>
          <h1>{`${data[0].transction}%`}</h1>
        </div>
        <div  className={style.powerDiv}>
         <div  className={style.power}>< ImPower/></div>
          <div><div>Net Distribution to Investors</div>
          <h1>{`${data[0].distribution}.M+`}</h1></div>
         
        
        </div>
      </div>
      <div>
                    <a href="https://github.com/pintu8328" target="_blank">
                      <FaGithub className="headerIcon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/pintu-gouda-935231237/"
                      target="_blank"
                   
                    >
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </div>
    </div>
  );
};

export default Home;
