import React from 'react'
import munim_logo from '../assets/images/munim_logo.png'
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#000', opacity:0.5}}>
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={munim_logo}width="100%" height={50} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item" >
                            <a class="nav-link active" style={{color:'', fontWeight:'bold'}} aria-current="page" href="#">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" style={{color:'', fontWeight:'bold'}} href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
