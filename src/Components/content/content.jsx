import React from 'react'
import './content.css'
import { useState } from 'react'

function Content() {

  const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }

  return (
    <div className="skills">
      <div className='contentHeader'>
        <h2>About our Company</h2>
      </div>
        
        <div className="skill-row1">
          <img className="prooo" src="images/giphy.gif" alt="" />
          <h3>Web Develoment and Design</h3>
          <p className="code-describe">I started learning programming at 13 years old. Because I like codes and make new something. I also like desing, that is why I am also learning design.</p>
          <div>
            <button onClick={handleClickOpen}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
            {/* <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>PopUp</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem sint pariatur, ducimus rem aut labore incidunt et est? Voluptates rem nemo ducimus accusantium. Culpa excepturi totam accusamus saepe harum!</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div> */}
          </div>

        </div>
        <div className="skill-row2">
          <img className="prooo" src="images/giphy.gif" alt="" />
          <h3>Web Develoment and Design</h3>
          <p className="code-describe">I started learning programming at 13 years old. Because I like codes and make new something. I also like desing, that is why I am also learning design.</p>
          <div>
            <button onClick={handleClickOpen}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
            {/* <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>PopUp</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem sint pariatur, ducimus rem aut labore incidunt et est? Voluptates rem nemo ducimus accusantium. Culpa excepturi totam accusamus saepe harum!</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div> */}
          </div>

        </div>
        <div className="skill-row1">
          <img className="prooo" src="images/giphy.gif" alt="" />
          <h3>Web Develoment and Design</h3>
          <p className="code-describe">I started learning programming at 13 years old. Because I like codes and make new something. I also like desing, that is why I am also learning design.</p>
          <div>
            <button onClick={handleClickOpen}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
            {/* <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>PopUp</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem sint pariatur, ducimus rem aut labore incidunt et est? Voluptates rem nemo ducimus accusantium. Culpa excepturi totam accusamus saepe harum!</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div> */}
          </div>

        </div>
        <div className="skill-row2">
          <img className="prooo" src="images/giphy.gif" alt="" />
          <h3>Web Develoment and Design</h3>
          <p className="code-describe">I started learning programming at 13 years old. Because I like codes and make new something. I also like desing, that is why I am also learning design.</p>
          <div>
            <button onClick={handleClickOpen}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
            {/* <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>PopUp</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem sint pariatur, ducimus rem aut labore incidunt et est? Voluptates rem nemo ducimus accusantium. Culpa excepturi totam accusamus saepe harum!</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div> */}
          </div>

        </div>

        <div className='more'>
        <button className='popupBtn' onClick={handleClickOpen}><span>What We Suggest</span><i class="fa-solid fa-arrow-right fa-xl"></i></button>             
         <div>  
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <div>
                                </div>
                                <h1>PopUp</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem sint pariatur, ducimus rem aut labore incidunt et est? Voluptates rem nemo ducimus accusantium. Culpa excepturi totam accusamus saepe harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure blanditiis vitae praesentium officia molestias, a neque laboriosam? Ducimus officiis necessitatibus quaerat, quos voluptatibus molestias officia cumque beatae quibusdam explicabo!</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
      </div>
  )
}

export default Content