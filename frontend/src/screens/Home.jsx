import React from 'react'
import technology from '../assets/videos/technology.mp4'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <div style={{position:'relative', width:'100%'}}>
            <video className='Munim_Video' src={technology} autoPlay={true} loop={true} muted={true} style={{minWidth:'100%', minHeight:'100%', position:"fixed"}} />
            <Navbar/>
        </div>
    )
}
