import React from 'react'
import './home.css'
import Header from '../header/header';
import Content from '../content/content';
import Advantages from './../Advantages/advantages';
import Footer from './../footer/footer';
import Comments from './../comments/comments';
// import Popup from '../popup/popup';


function Home() {
  return (
    <div> 
      <Header />
      <Content />
      <Advantages />
      <Comments />
      {/* <Popup /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home