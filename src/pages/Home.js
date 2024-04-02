import React, { useEffect, useState } from 'react'
import "./Home.css"
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

function Home() {
    const [windowDimension, setWindowDimension] = useState(null);
    const [project, setProject ] = useState(true);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        console.log(window.innerWidth)
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isSmallWindow = windowDimension <=1436;
    const isMobile = windowDimension <=852;

    useEffect(()=>{
        console.log(isMobile)
    },[windowDimension])

  return (
    <>
     {isMobile?<>
        <section id='hero'>
            <div className='row'>
                <div className='heroleftm'>
                    <h3>TRĒHOUSE</h3>
                    <h1>Discover Perpetual Growth with Trēhouse.</h1>
                    <p>At Trēhouse, we redefine business development through innovative collaboration. Our unique approach eliminates upfront costs, enabling us to analyze your business and unlock untapped revenue streams, territories, and opportunities, all while sharing in the success we help create.</p>
                    <div className='row'>
                        <div>
                            <p>Register using email address</p>
                            <input  placeholder='shakir260@gmail.com' />
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className='row ticks' >
                        <p><img src='./images/tick.png' style={{width:"clamp(0.8rem, 2.2vw, 1.4rem)"}}/> &nbsp; Free Register</p>
                        <p><img src='./images/tick.png' style={{width:"clamp(0.8rem, 2.2vw, 1.4rem)"}}/> &nbsp; Great Service</p>
                    </div>
                </div>
                
            </div>
            <div className='herorightm' style={{width:"100%"}}>
                    <img src='./images/heroimgm.png' style={{width:"100%"}}/>
                </div>
        </section>
        {/* <img src='./images/Companiesm.png' style={{width:'100%', backgroundColor:"white", marginBottom:"0px"}}/> */}
        <section id='ourmodel'>
            <div className='button-overlay'>
                <img src='./images/sec2mnotxt.png' style={{width:'100%', paddingTop:"32%", paddingBottom:"20%"}}/>
                <div className='sustainm'>
                    <p>GROWTH</p>
                    <h2>Sustainable Model</h2>
                    <p style={{textAlign:'justify'}}>We ensure a sustainable model built on long-term relationships. Backed by extensive expertise in organizational operations, sales, and development, TRĒhouse is your strategic partner in driving scalable growth. Join us in shaping the future of your enterprise.</p>
                    <button className='purpbtn btn1m'><a className='aw' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>

                <div className='pt1m'>
                    <h2>Discovery Session</h2>
                    <p style={{textAlign:'justify'}}>We engage in thorough discovery, either over a call or in person, to understand our potential partners' businesses.</p>
                </div>
                <div className='pt2m'>
                    <h2>Strategic Identification</h2>
                    <p style={{textAlign:'justify'}}>We pinpoint growth opportunities and tailor a partnership around the specifics.</p>
                </div>
                <div className='pt3m'>
                    <h2>Action-Oriented Partnership</h2>
                    <p style={{textAlign:'justify'}}>We work closely with partners, ensuring our success is directly tied to theirs through our shared revenue model.</p>
                </div>
            </div>
        </section>
        <section>
            <div className='button-overlay'>
                <img src='./images/midsecmnotxt.png' style={{width:'100%'}} />
                <div className='handshakem'>
                    <h2>Push your company to the next level.</h2>
                    <p>Embark on a path to success with TRĒhouse. Our handshake signifies a commitment to your growth. Leave the risk to us while you enjoy the rewards. Partner with confidence and let's elevate your business together.</p>
                    <button className='purpbtn orange btn2m'><a className='aw' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>
                <div id='Hww' className='absdivm'>
                <div className='sec3cardheadm'>
                        <h2>We help your business grow faster.</h2>
                        <p>Time is precious in the pursuit of growth. Schedule a consultation with our expert advisors to explore new avenues for your business. Let's make progress happen together.</p>
                    </div>
                    <div className='dc-containerm' >
                        <div className='darkcardm'>
                            <img src="./images/Vector.png" style={{marginTop:"10px", marginBottom:"0px", width:"15%"}}/>
                            <h4>Expertise-Driven Solutions</h4>
                            <p style={{color:"#9794A6", fontSize:"12px"}}>Crafting tailored strategies rooted in deep industry insights for your success.</p>
                            {/* <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p> */}
                        </div>
                        <div className='darkcardm'>
                            <img src="./images/flower.png" style={{marginTop:"10px", marginBottom:"0px", width:"15%"}}/>
                            <h4>Shared Success</h4>
                            <p style={{color:"#9794A6", fontSize:"12px"}}>Partnering for mutual growth, where your success is our triumph.</p>
                            {/* <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p> */}
                        </div>
                        <div className='darkcardm'>
                            <img src="./images/sun.png" style={{marginTop:"10px", marginBottom:"0px", width:"15%"}}/>
                            <h4>Innovative Collaboration</h4>
                            <p style={{color:"#9794A6", fontSize:"12px"}}>Unleashing creativity through dynamic partnerships for transformative outcomes.</p>
                            {/* <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p> */}
                        </div>
                    </div>
                    <button className='yellow btn3m'><a className='ab' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>
            </div>
            
        </section>
        <section>
            <div className='button-overlay' >

            <img src='./images/3ptm.png' style={{width:"70%", padding:"15%"}}/>
            <div className='sec4textm'>
                    <div>
                        <h2 style={{color:"#FFDC60"}}>Driving Growth Through Innovative Solutions</h2>
                    </div>
                    <div className='row' >
                        <p> <img src='./images/ptm1.png'  width={"80%"}/></p>
                        <p>Innovative Collaboration</p>
                    </div>
                    <div className='row'>
                        <p> <img src='./images/ptm2.png'  width={"80%"} /></p>
                        <p>Shared Success</p>
                    </div>
                    <div className='row'>
                        <p> <img src='./images/ptm3.png'  width={"80%"}/></p>
                        <p>Expertise-Driven Solutions</p>
                    </div>
                </div>

                
            </div>
        </section>
        {/* <section>
            <div className='casedivm'>
                <h1>Case Studies {windowDimension}</h1>
                {project?
                <img src='./images/project1m.png' style={{width:"100%", cursor:"pointer"}} />:
                <img src='./images/project2m.png' style={{width:"100%", cursor:"pointer"}} />
                }
               
            </div>
            <div className='row' style={{alignItems:"center", justifyContent:"center"}}>
                <div onClick={()=>setProject(true)}>

                <img src='./images/plm.png' />
                </div>
                <div onClick={()=>setProject(false)}>

                <img src='./images/prm.png' />
                </div>
            </div>
        </section> */}
        {/* <section id='testimonials'>
        <div className='button-overlay' style={{marginTop:"10%", paddingTop:"20%"}}>
                <img src='./images/testimnotxt.png' style={{width:'100%'}}/>
                <img src='./images/leftbtn.png' className='lbtn'/>
                <img src='./images/rightbtn.png' className='rbtn'/>

                <div className='sec5headm'> 
                    <p>TESTIMONIALS</p>
                    <h2>Check what our clients are saying</h2>
                </div>
                <h3 className='testitxt'>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.</h3>
                <div className='authorm'>
                    <h5>AR Shakir</h5>
                    <p>CEO GetNextDesign</p>
                </div>

            </div>
        </section> */}
        <section id='contact' style={{overflow:'hidden'}}>
        <div className='button-overlay' style={{marginTop:"10%", marginBottom:'0px'}}>
            <img src='./images/grayrecm.png' style={{width:'100%'}}/>
            <div className='absdiv2' style={{paddingLeft:"10vw", color:"white", paddingRight:"5vw"}}>
                <div style={{padding: "3vw"}}>
                    <p style={{margin:"0px", fontSize:"10px", marginTop:"10px", marginLeft:"5%"}}>Schedule a Strategy Session Today</p>
                    <h2 style={{fontSize:"24px", margin:"0px", marginLeft:"5%", marginRight:"5%"}}>Unlock Your Potential with Trēhouse</h2>
                    <p style={{fontSize:"14px", marginLeft:"5%", marginRight:"10%"}}>Discover how our expertise-driven solutions can elevate your business. Book a call now to explore innovative collaboration opportunities and pave the way for shared success. Let's shape the future of your enterprise together.</p>
                </div>
                <div className='formm'>
                    {/* <input className='forminpm' placeholder='Email Address'/>
                    <input className='forminpm' placeholder='Password'/> */}
                    <button className='yellow btn4m' style={{fontWeight:"700", margin:"15px"}}><a className='ab' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>
            </div>    
        </div>
            
        </section>
        <section style={{backgroundColor:"#2E2E2E", paddingBottom:"1rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
            {/* <img src="./images/footerm.png" style={{width:"100%"}} /> */}
            <img src="./images/logow.png" style={{width:"50%", marginBottom:"0px"}} />
        <ul className="footer" style={{marginTop:"0px"}} >
     
        <li>
            <ul className="nestedList2">
                <li className="flistItemm">
                    <p>About</p>
                    <p><a className='aw' href='#ourmodel'>Our Model</a></p> 
                    <p><a className='aw' href='#Hww'>How we work</a></p>
                    {/* <p><a className='aw' href='#testimonials'>Testimonials</a></p> */}
                    <p><a className='aw' href='#contact'>Contact Us</a></p>
                </li>
                
                <li className="flistItemm">
                    <p>Socials</p>
                   
                    <img src='./images/iconsm.png' style={{cursor:'pointer'}}/>
                </li>
                
            </ul>
        </li>
        
    </ul>
    <p style={{color:"white", marginBottom:"20px", fontSize:"12px"}}>© Copyright 2024. All rights reserved.</p>
        </section>
     </>:<>
        <section id='hero'>
            <div className='row'>
                <div className='heroleft'>
                    <h3>TRĒHOUSE</h3>
                    <h1>Discover Perpetual Growth with Trēhouse.</h1>
                    <p>At Trēhouse, we redefine business development through innovative collaboration. Our unique approach eliminates upfront costs, enabling us to analyze your business and unlock untapped revenue streams, territories, and opportunities, all while sharing in the success we help create.</p>
                    <div className='row'>
                        <div>
                            <p>Register using email address</p>
                            <input  placeholder='shakir260@gmail.com' />
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className='row ticks' >
                        <p><img src='./images/tick.png' style={{width:"clamp(0.5rem, 1.2vw, 1rem)"}}/> &nbsp; Free Register</p>
                        <p><img src='./images/tick.png' style={{width:"clamp(0.5rem, 1.2vw, 1rem)"}}/> &nbsp; Great Service</p>
                    </div>
                </div>
                <div className='heroright' style={{width:"100%", textAlign:"right"}}>
                    <img src='./images/heroimg.png' style={{width:"80%"}}/>
                </div>
            </div>
           
        </section>
        {/* <img src='./images/Companies4.png' style={{width:'100%', backgroundColor:"white", marginBottom:"0px"}}/> */}
        <section id='ourmodel'>
            <div className='button-overlay'>
                <img src='./images/section2notxt.png' style={{width:'100%'}}/>

                <div className='sustain'>
                    <p>GROWTH</p>
                    <h2>Sustainable Model</h2>
                    <p style={{textAlign:'justify'}}>We ensure a sustainable model built on long-term relationships. Backed by extensive expertise in organizational operations, sales, and development, TRĒhouse is your strategic partner in driving scalable growth. Join us in shaping the future of your enterprise.</p>
                    <button className='purpbtn btn1'><a className='aw' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>

                <div className='pt1'>
                    <h2>Discovery Session</h2>
                    <p style={{textAlign:'justify'}}>We engage in thorough discovery, either over a call or in person, to understand our potential partners' businesses.</p>
                </div>
                <div className='pt2'>
                    <h2>Strategic Identification</h2>
                    <p style={{textAlign:'justify'}}>We pinpoint growth opportunities and tailor a partnership around the specifics.</p>
                </div>
                <div className='pt3'>
                    <h2>Action-Oriented Partnership</h2>
                    <p style={{textAlign:'justify'}}>We work closely with partners, ensuring our success is directly tied to theirs through our shared revenue model.</p>
                </div>

            </div>
        </section>
        <section id='Hww'>
            <div className='button-overlay' >
                <img src='./images/section3notxt.png' style={{width:'100%'}} />
                <div className='handshake'>
                    <h2>Push your company to the next level.</h2>
                    <p>Embark on a path to success with TRĒhouse. Our handshake signifies a commitment to your growth. Leave the risk to us while you enjoy the rewards. Partner with confidence and let's elevate your business together.</p>
                    <button className='purpbtn orange btn2'><a className='aw' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>
                <div className='absdiv ' >
                    <div className='sec3cardhead'>
                        <h2>We help your business grow faster.</h2>
                        <p>Time is precious in the pursuit of growth. Schedule a consultation with our expert advisors to explore new avenues for your business. Let's make progress happen together.</p>
                    </div>
                    <div className='row dc-container'  >
                        <div className='darkcard'>
                            <img src="./images/Vector.png" style={{marginTop:"10px", marginBottom:"5px"}}/>
                            <h2>Expertise-Driven Solutions</h2>
                            <p style={{color:"#9794A6"}}>Crafting tailored strategies rooted in deep industry insights for your success.</p>
                            {/* <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p> */}
                        </div>
                        <div className='darkcard'>
                            <img src="./images/flower.png" style={{marginTop:"10px", marginBottom:"5px"}}/>
                            <h2>Shared Success</h2>
                            <p style={{color:"#9794A6", marginBottom:"30px"}}>Partnering for mutual growth, where your success is our triumph.</p>
                            {/* <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p> */}
                        </div>
                        <div className='darkcard'>
                            <img src="./images/sun.png" style={{marginTop:"10px", marginBottom:"5px"}}/>
                            <h2>Innovative Collaboration</h2>
                            <p style={{color:"#9794A6"}}>Unleashing creativity through dynamic partnerships for transformative outcomes.</p>
                            {/* <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p> */}
                        </div>
                    </div>
                    <button className='yellow btn3' > <a className='ab' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a>  </button>
                </div>
            </div>
            
        </section>
        <section style={{overflow:'hidden'}}>
            <div className='button-overlay' style={{padding:"5% 10%"}}>
                <img src='./images/sec4notxt.png' style={{width:"80%"}}/>
                <div className='row sec4text'>
                    <div>
                        <h2>Driving Growth Through Innovative Solutions</h2>
                    </div>
                    <div className='row' style={{marginLeft:"20px"}}>
                        <p> <img src='./images/s41.png' /></p>
                        <p>Innovative Collaboration</p>
                    </div>
                    <div className='row'>
                        <p> <img src='./images/s42.png' /></p>
                        <p>Shared Success</p>
                    </div>
                    <div className='row'>
                        <p> <img src='./images/s43.png' /></p>
                        <p>Expertise-Driven Solutions</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <section>
            <div className='casediv'>
                <h1>Case Studies</h1>
                <img src='./images/project.png' style={{width:"100%", cursor:"pointer"}} />
                <button className='purpbtn'>View All &nbsp;<BsArrowRight style={{fontSize:"24px", position:'relative', top:'4px'}} /></button>
            </div>
            
        </section> */}
        {/* <section id='testimonials'>
        <div className='button-overlay' style={{marginTop:"2%"}}>
                <img src='./images/section5notxt.png' style={{width:'100%'}}/>
                <img src='./images/leftbtn.png' className='lbtn'/>
                <img src='./images/rightbtn.png' className='rbtn'/>
                <div className='sec5head'>
                    <p>TESTIMONIALS</p>
                    <h2>Check what our clients are saying</h2>
                </div>
                <h4>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.</h4>
                <div className='author'>
                    <h5>AR Shakir</h5>
                    <p>CEO GetNextDesign</p>
                </div>
            </div>
        </section> */}
        {/* <section>
            <div style={{padding:"1vw 7vw",marginTop:"10%"}}>
                <div className='button-overlay'>
                    <img src='./images/Blogs.png' style={{width:'100%'}}/>
                    <button className='purpbtn blogbtn'>See All Blog Posts</button>
                </div>
            </div>
       
        </section> */}
        <section id='contact' style={{overflow:'hidden'}}>
        <div className='button-overlay' style={{marginTop:"4%", marginBottom:'0px'}}>
            {/* <img src='./images/r179.png' style={{width:'100%'}}/> */}
            <img src='./images/grayrec.png' style={{width:'100%'}}/>
            <div className='row absdiv2' style={{paddingLeft:"7vw", color:"white", paddingRight:"2vw"}}>
                <div style={{padding: "3vw", width:'50%'}}>
                    <p style={{margin:"0px"}}>Schedule a Strategy Session Today</p>
                    <h2 style={{fontSize:"43px", margin:"0px"}}>Unlock Your Potential with Trēhouse</h2>
                    <p style={{fontSize:"22px"}}>Discover how our expertise-driven solutions can elevate your business. Book a call now to explore innovative collaboration opportunities and pave the way for shared success. Let's shape the future of your enterprise together.</p>
                </div>
                <div className='form'>
                    {/* <input className='forminp' placeholder='Email Address'/>
                    <input className='forminp' placeholder='Password'/> */}
                    <button className='yellow btn4' style={{fontWeight:"700", margin:"15px"}}><a className='ab' href='https://calendly.com/trehouse-bd/30min?month=2024-04'>Book a Call</a></button>
                </div>
            </div>    
        </div>
            
        </section>
        <section style={{backgroundColor:"#2E2E2E", paddingBottom:"1rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <ul className="footer" >
        <li className="Logo">
            <img src="./images/logow.png" style={{width:"120%"}} />
        </li>
        <li>
            <ul className="nestedList2">
                <li className="flistItem">
                    <p>About</p>
                    <p><a className='aw' href='#ourmodel'>Our Model</a></p> 
                    <p><a className='aw' href='#Hww'>How we work</a></p>
                    {/* <p><a className='aw' href='#testimonials'>Testimonials</a></p> */}
                    <p><a className='aw' href='#contact'>Contact Us</a></p>
                </li>
                
                <li className="flistItem">
                    <p>Socials</p>
                    <img src='./images/icons.png' style={{cursor:'pointer'}}/>
                </li>
                
            </ul>
        </li>
        
    </ul>
    <p style={{color:"white", marginBottom:"20px"}}>© Copyright 2024. All rights reserved.</p>
        </section>
    </>}
    </>
  )
}

export default Home;