import React from 'react'
import "./Home.css"
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

function home() {
  return (
    <>
        <section id='hero'>
            <div className='row'>
                <div className='heroleft'>
                    <h3>Lorem ipsum Lorem ipsims</h3>
                    <h1>Lorem Ipsum Lorem Ipsum as Ipsum.</h1>
                    <p>Dummy text Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>
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
                        <p><img src='./images/tick.png'/> &nbsp; Free Register</p>
                        <p><img src='./images/tick.png'/> &nbsp; Great Service</p>
                    </div>
                </div>
                <div className='heroright' style={{width:"110%"}}>
                    <img src='./images/heroimg.png' style={{width:"100%"}}/>
                </div>
            </div>
            <img src='./images/Companies.png' style={{width:'100%'}}/>
        </section>
        <section>
            <div className='button-overlay'>
                <img src='./images/section2nobtn.png' style={{width:'100%'}}/>
                <button className='purpbtn btn1'>Get Started</button>
            </div>
        </section>
        <section>
            <div className='button-overlay'>
                <img src='./images/section3.png' style={{width:'100%'}} />
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
            <img src='./images/section4.png' style={{width:"100%"}}/>
        </section>
        <section>
            <div className='casediv'>
                <h1>Case Studies</h1>
                <img src='./images/project.png' style={{width:"100%", cursor:"pointer"}} />
                <button className='purpbtn'>View All &nbsp;<BsArrowRight style={{fontSize:"24px", position:'relative', top:'4px'}} /></button>
            </div>
            
        </section>
        <section>
        <div className='button-overlay' style={{marginTop:"2%"}}>
                <img src='./images/section5.png' style={{width:'100%'}}/>
                <img src='./images/leftbtn.png' className='lbtn'/>
                <img src='./images/rightbtn.png' className='rbtn'/>
            </div>
        </section>
        <section>
            <div style={{padding:"1vw 7vw",marginTop:"10%"}}>
                <div className='button-overlay'>
                    <img src='./images/Blogs.png' style={{width:'100%'}}/>
                    <button className='purpbtn blogbtn'>See All Blog Posts</button>
                </div>
            </div>
       
        </section>
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
                    <button className='yellow' style={{fontWeight:"400", margin:"15px"}}>GET STARTED</button>
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
    </>
  )
}

export default home