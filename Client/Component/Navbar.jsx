import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar_div navbar-expand-lg bg-black bg-opacity-50 text-light p-4 ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white logo" href="#"><h1>Java Spot</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto  ">
                            <li class="nav-item ">
                                <Link class="nav-link text-white" to="#"> <i class="fas fa-home"></i> </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" aria-current="page" to="#"><i class="fas fa-search"></i></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#"><i class="fas fa-envelope"></i></Link>
                            </li>
                            
                        </ul>
                    </div>

                </div>

            </nav>


        </div>
    )
}
