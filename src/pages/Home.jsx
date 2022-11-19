import React from 'react'
import './home.css'
import heroImage from '../assets/hero.jpg'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>

      <div className="home-intro">
         <p>2022 Carol</p>
         <p>CSI Chunappara</p>
         <p>Song Book</p>
      </div>

      <div className="home-hero-img">
         <img src={heroImage} alt="" />
      </div>

      <div className="home-btn">
        <Link to='/songs'><button>Get Started</button></Link>
      </div>
    </div>
  )
}

export default Home