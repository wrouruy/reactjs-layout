import React from 'react'
import Logo2Img from '../../assets/Logo2.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='root-Footer'>
        <div className='userContact-Footer'>
            <div>
                <span className='redColorText'>USER CONTACT</span>
                <h1>Contact Us for those interested.</h1>
                <p>The standard chunk of Lorem Ipsum used since the is<br/>reproduced below for those interested.</p>
            </div>
            <div>
                <input type="text" placeholder='Enter your email address'/>
                <button type='button'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='bottomPart-Footer'>
            <div className="column">
                <img src={Logo2Img}/>
                <p>STORE - worldwide fashion store since 1978.<br/>We sell over 1000+ branded products on<br/>our web-site.</p>
            </div>
            <div className="column">
                <h1>INFORMATION</h1>
                <a href="#">New Collection</a>
                <a href="#">About Store</a>
                <a href="#">Contact Us</a>
                <a href="#">Latest News</a>
                <a href="#">Our Sitemap</a>
                <a href="#">Orders History</a>
            </div>
            <div className="column">
                <h1>FOOTER MENU</h1>
                <a href="#">Instagram profile</a>
                <a href="#">New Collection</a>
                <a href="#">Contact Us</a>
                <a href="#">Latest News</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Purchase Theme</a>
            </div>
            <div className="column">
                <h1>USEFUL LINKS</h1>
                <a href="#">Instagram profile</a>
                <a href="#">New Collection</a>
                <a href="#">Contact Us</a>
                <a href="#">Latest News</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Purchase Theme</a>
            </div>
            <div className="column">
                <h1>ABOUT THE STORE</h1>
                <p>STORE - worldwide fashion store since 1978.<br/>We sell over 1000+ branded products on<br/>our web-site.</p>
                <h1 style={{marginTop: '25px'}}>www.company.com</h1>
                <div className="row">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>

    </footer>
  )
}
