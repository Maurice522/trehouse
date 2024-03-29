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
        <section>
        <img src='./images/Companiesm.png' style={{width:'100%', backgroundColor:"white", marginBottom:"0px"}}/>
            <div className='button-overlay'>
                <img src='./images/section2m.png' style={{width:'100%'}}/>
                <button className='purpbtn btn1m'>Get Started</button>
            </div>
        </section>
        <section>
            <div className='button-overlay'>
                <img src='./images/midsectionm.png' style={{width:'100%'}} />
                {/* <button className='purpbtn orange btn2m'>Get Started</button>
                <div className='absdivm'>
                    <div className='dc-containerm' >
                        <div className='darkcardm'>
                            <img src="./images/Vector.png" style={{marginTop:"10px", marginBottom:"5px", width:"48px"}}/>
                            <h4>Lorem ipsum</h4>
                            <p style={{color:"#9794A6", fontSize:"16px"}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p>
                        </div>
                        <div className='darkcardm'>
                            <img src="./images/flower.png" style={{marginTop:"10px", marginBottom:"5px", width:"48px"}}/>
                            <h4>Lorem ipsum</h4>
                            <p style={{color:"#9794A6", fontSize:"16px"}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p>
                        </div>
                        <div className='darkcardm'>
                            <img src="./images/sun.png" style={{marginTop:"10px", marginBottom:"5px", width:"48px"}}/>
                            <h4>Lorem ipsum</h4>
                            <p style={{color:"#9794A6", fontSize:"16px"}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p>
                        </div>
                    </div>
                    <button className='yellow btn3m'>More About Platform</button>
                </div> */}
            </div>
            
        </section>
        <section>
            <img src='./images/3point.png' style={{width:"70%", padding:"15%"}}/>
        </section>
        <section>
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
        </section>
        <section>
        <div className='button-overlay' style={{marginTop:"10%"}}>
                <img src='./images/testim.png' style={{width:'100%'}}/>
                {/* <img src='./images/leftbtn.png' className='lbtn'/>
                <img src='./images/rightbtn.png' className='rbtn'/> */}
            </div>
        </section>
        <section style={{overflow:'hidden'}}>
        <div className='button-overlay' style={{marginTop:"10%", marginBottom:'0px'}}>
            <img src='./images/recm.png' style={{width:'100%'}}/>
            <div className='absdiv2' style={{paddingLeft:"10vw", color:"white", paddingRight:"5vw"}}>
                <div style={{padding: "3vw"}}>
                    <p style={{margin:"0px", fontSize:"10px", marginTop:"10px", marginLeft:"5%"}}>WHY CHOOSE US</p>
                    <h2 style={{fontSize:"clamp(0.8rem, 2vw, 1.4rem);", margin:"0px", marginLeft:"5%", marginRight:"5%"}}>Lorem ipsu mlorem ip Lorem ipsum lroe</h2>
                    <p style={{fontSize:"clamp(0.8rem, 2vw, 1.3rem);", marginLeft:"5%", marginRight:"10%"}}>Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.</p>
                </div>
                <div className='formm'>
                    <input className='forminpm' placeholder='Email Address'/>
                    <input className='forminpm' placeholder='Password'/>
                    <button className='yellow btn4m' style={{fontWeight:"400", margin:"15px"}}>GET STARTED</button>
                </div>
            </div>    
        </div>
            
        </section>
        <section style={{backgroundColor:"#2E2E2E", paddingBottom:"1rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img src="./images/footerm.png" style={{width:"100%"}} />
            {/* <img src="./images/logow.png" style={{width:"50%"}} /> */}
        {/* <ul className="footer" >
     
        <li>
            <ul className="nestedList2">
                <li className="flistItemm">
                    <p>About</p>
                    <p>Company</p>
                    <p>Teams</p>
                    <p>Profile</p>
                    <p>Careers</p>
                </li>
                <li className="flistItemm">
                    <p>Resources</p>
                    <p>Contact</p>
                    <p>Application</p>
                    <p>FQA Feature</p>
                </li>
                <li className="flistItemm">
                    <p>Legals</p>
                    <p>Copyright Privacy</p>
                    <p>Policy Disclamer</p>
                    <p>Terms</p>
                    <img src='./images/icons.png' style={{cursor:'pointer'}}/>
                </li>
                
            </ul>
        </li>
        
    </ul> */}
    {/* <p style={{color:"white", marginBottom:"20px"}}>© Copyright 2024. All rights reserved.</p> */}
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
                        <p><img src='./images/tick.png' style={{width:"clamp(0.8rem, 2.2vw, 1.4rem)"}}/> &nbsp; Free Register</p>
                        <p><img src='./images/tick.png' style={{width:"clamp(0.8rem, 2.2vw, 1.4rem)"}}/> &nbsp; Great Service</p>
                    </div>
                </div>
                <div className='heroright' style={{width:"110%"}}>
                    <img src='./images/heroimg.png' style={{width:"100%"}}/>
                </div>
            </div>
           
        </section>
        <section>
        <img src='./images/Companies1.png' style={{width:'100%', backgroundColor:"white", marginBottom:"0px"}}/>
            <div className='button-overlay'>
                <img src='./images/section2nobtn2.png' style={{width:'100%'}}/>
                <button className='purpbtn btn1'>Get Started</button>
            </div>
        </section>
        <section>
            <div className='button-overlay'>
                <img src='./images/section32.png' style={{width:'100%'}} />
                <button className='purpbtn orange btn2'>Get Started</button>
                <div className='absdiv'>
                    <div className='row dc-container' >
                        <div className='darkcard'>
                            <img src="./images/Vector.png" style={{marginTop:"10px", marginBottom:"5px"}}/>
                            <h2>Lorem ipsum</h2>
                            <p style={{color:"#9794A6"}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p>
                        </div>
                        <div className='darkcard'>
                            <img src="./images/flower.png" style={{marginTop:"10px", marginBottom:"5px"}}/>
                            <h2>Lorem ipsum</h2>
                            <p style={{color:"#9794A6"}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p>
                        </div>
                        <div className='darkcard'>
                            <img src="./images/sun.png" style={{marginTop:"10px", marginBottom:"5px"}}/>
                            <h2>Lorem ipsum</h2>
                            <p style={{color:"#9794A6"}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <p style={{color:"#01966B", fontSize:"18px"}}>Read More <LiaLongArrowAltRightSolid style={{position:'relative', top:"3px"}} /></p>
                        </div>
                    </div>
                    <button className='yellow btn3'>More About Platform</button>
                </div>
            </div>
            
        </section>
        <section>
            <img src='./images/section42.png' style={{width:"100%"}}/>
        </section>
        <section>
            <div className='casediv'>
                <h1>Case Studies</h1>
                <img src='./images/project.png' style={{width:"100%", cursor:"pointer"}} />
                {/* <button className='purpbtn'>View All &nbsp;<BsArrowRight style={{fontSize:"24px", position:'relative', top:'4px'}} /></button> */}
            </div>
            
        </section>
        <section>
        <div className='button-overlay' style={{marginTop:"2%"}}>
                <img src='./images/section5.png' style={{width:'100%'}}/>
                <img src='./images/leftbtn.png' className='lbtn'/>
                <img src='./images/rightbtn.png' className='rbtn'/>
            </div>
        </section>
        {/* <section>
            <div style={{padding:"1vw 7vw",marginTop:"10%"}}>
                <div className='button-overlay'>
                    <img src='./images/Blogs.png' style={{width:'100%'}}/>
                    <button className='purpbtn blogbtn'>See All Blog Posts</button>
                </div>
            </div>
       
        </section> */}
        <section style={{overflow:'hidden'}}>
        <div className='button-overlay' style={{marginTop:"10%", marginBottom:'0px'}}>
            <img src='./images/r179.png' style={{width:'100%'}}/>
            <div className='row absdiv2' style={{paddingLeft:"7vw", color:"white", paddingRight:"2vw"}}>
                <div style={{padding: "3vw"}}>
                    <p style={{margin:"0px"}}>WHY CHOOSE US</p>
                    <h2 style={{fontSize:"60px", margin:"0px"}}>Lorem ipsu mlorem ip Lorem ipsum lroe</h2>
                    <p style={{fontSize:"25px"}}>Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.</p>
                </div>
                <div className='form'>
                    <input className='forminp' placeholder='Email Address'/>
                    <input className='forminp' placeholder='Password'/>
                    <button className='yellow btn4' style={{fontWeight:"400", margin:"15px"}}>GET STARTED</button>
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
                    <p>Company</p>
                    <p>Teams</p>
                    <p>Profile</p>
                    <p>Careers</p>
                </li>
                <li className="flistItem">
                    <p>Resources</p>
                    <p>Contact</p>
                    <p>Application</p>
                    <p>FQA Feature</p>
                </li>
                <li className="flistItem">
                    <p>Legals</p>
                    <p>Copyright Privacy</p>
                    <p>Policy Disclamer</p>
                    <p>Terms</p>
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