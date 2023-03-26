import React from 'react'
import './header.css'

export default function Header() {
  return (

    // <div className='header'>
    //     <div className='headerTitle'>
    //         <h4>11 Delivery</h4> 
    //         <h2>Fast and Save Delivery</h2>
            
    //     </div>
    //     <div className='headerInfo'>
    //         <div className='headerText'>
    //             <h1>11 Delivery</h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.     Tenetur eveniet commodi consequatur accusantium, officiis   aut? Sunt optio laboriosam sint, magnam velit voluptatum  esse, quo hic voluptate obcaecati, ipsam laborum corporis.   Lorem ipsum dolor, sit amet consectetur adipisicing elit.     Praesentium itaque a, ad voluptatibus beatae eveniet    nostrum. Nam, esse? At perspiciatis odit, facere maiores   quod quibusdam quasi doloremque eligendi distinctio   itaque!</p>
    //         </div>

    //         <div className='headerImage'>
    //             <img src='https://www.advotics.com/wp-content/uploads/2022/02/surat-jalan-01-1-4.png'/>
    //         </div>
    //     </div>
    // </div>

    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>Ən Sürətli və Güvənilir çatdırılma!</span>
            <span className='headerTitleLg'>11 Delivery</span>
        </div>
        <div className='headerImageDiv'>
        <div className='headerText'>
        <h1>11 Delivery</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae expedita beatae quisquam tempora! Laborum, suscipit? Placeat accusantium laborum explicabo at voluptatibus pariatur incidunt deserunt excepturi. Neque ab ullam eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        
        <img className='headerImage' src='https://www.advotics.com/wp-content/uploads/2022/02/surat-jalan-01-1-4.png' alt='headerImage' />
        </div>
        
    </div>
  )
}
