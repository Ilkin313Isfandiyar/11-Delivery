import React from 'react'
import './banner.css'

export default function Banner() {
  return (
    <div>
        <div className="container">
  
  <div className="flex-container1">
   
    <div className="text">
      <span className="avoid-break">Mighty <span className="orange">Thor,</span></span> 
      <span className="avoid-break">Scarlet <span className="orange">Witch</span> & </span> 
      <span className="avoid-break">Black <span className="orange">Widow </span> </span> 
    </div>
    <div className="collage-container">
      <div className="collage">
        <img src="https://estaticos-cdn.sport.es/clip/76d5c74a-111d-4482-896f-4910500d901b_media-libre-aspect-ratio_default_0.jpg"  className="collage-image1" alt="thor"/>
        <img src="https://variety.com/wp-content/uploads/2022/05/SRV-12030_R.jpg" className="collage-image2" alt="wanda"/>
        <img src="https://free4kwallpapers.com/uploads/originals/2017/01/30/agent-natasha-romanoff-wallpaper.jpg" className="collage-image3" alt="natasha"/>
      </div>
    </div>
    
  </div>
  
</div>
    </div>
  )
}
