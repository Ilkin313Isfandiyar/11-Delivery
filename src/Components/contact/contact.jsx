import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
      <div className='contactText'>
        <h1>Contact</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio modi ab in hic quos sed illum aliquam. Enim cumque ut aspernatur. Ab eos quasi quod illum numquam neque, cupiditate porto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore exercitationem culpa sed, optio obcaecati dignissimos dolor nostrum aliquid tempore.</p>
      </div>
                <footer className='contact'>
          <div class='container'>
            <div class='img-card'>
                <i class="fa-sharp fa-solid fa-location-dot material-icons" id='icons'></i>
            </div>
            <div class = 'text-card'>
              <b>Location</b>
              <p>1 Deansgate,
              Manchester,
                M1</p>
            </div>
          </div>

          <div class='container'>
            <div class='img-card'>
                <i class="fa-solid fa-phone material-icons" id='icons'></i>

            </div>
            <div class = 'text-card'>
              <b>Contact</b>
              <p>+44 018273
              e@mail.com</p>
            </div>
          </div>

          <div class='container'>
            <div class='img-card'>
                <i class="fa-solid fa-user material-icons" id='icons'></i>
            </div>
            <div class = 'text-card'>
              <b>Account</b>
              <button>Sign in</button>
            </div>
          </div>

          <div class='container'>
            <div class='img-card'>
              <i class="fa-solid fa-gear material-icons" id='icons'></i>
            </div>
            <div class = 'text-card'>
              <b>Settings</b>
              <button className='settingBtn'>Settings</button>
            </div>
          </div>
        </footer>

    </div>
  )
}

export default Contact