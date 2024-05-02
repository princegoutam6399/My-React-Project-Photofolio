import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <section class="navbar sticky-top bg-dark">
                <div class="container-fluid p-2">
                    <div class="container-fluid ">
                        <nav class="navbar navbar-expand-lg ">
                            <a class="navbar-brand text-white "><FontAwesomeIcon icon={faCameraRetro} /> PhotoFolio</a>
                            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item me-3">
                                        <a class="nav-link text-white" aria-current="page" href="/">HOME</a>
                                    </li>
                                    <li class="nav-item me-3">
                                        <a class="nav-link text-white" href="/about">ABOUT</a>
                                    </li>
                                    <li class="nav-item me-3">
                                        <a class="nav-link text-white" href="/gallery">GALLERY</a>
                                    </li>
                                    <li class="nav-item me-3">
                                        <a class="nav-link text-white" href="/services">SERVICES</a>
                                    </li>
                                    <li class="nav-item me-3">
                                        <a class="nav-link text-white" href="/contact">CONTACT</a>
                                    </li>
                                </ul>
                                <div class="icon ms-auto">
                                   <Link to={''}><FontAwesomeIcon icon={faTwitter} className='me-2 fs-5 text-white' /> 
                                    <FontAwesomeIcon icon={faFacebook} className='me-2 fs-5 text-white' />
                                    <FontAwesomeIcon icon={faInstagram} className='me-2 fs-5 text-white' />
                                    <FontAwesomeIcon icon={faLinkedin} className='fs-5 text-white' />
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}
