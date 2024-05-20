import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer class="footer-part bg-dark text-white">
            <div class="container-fluid">
                <hr></hr>
                <div class="footer-text text-center p-2">
                    <p>© Copyright <span>PhotoFolio</span>. All Rights Reserved</p>
                    <p>Designed by <a class="text-success text-decoration-none">Prince<FontAwesomeIcon icon={faHeart} /></a></p>
                </div>
            </div>
        </footer>
    </div>
  )
}
