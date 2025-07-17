import React from 'react'
import LogoImg from '../../assets/Logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className='root-Header'>
        <img src={LogoImg}/>
        <div>
            <a href="#">HOME <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#">ABOUT <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#">PRODUCT <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#">BLOG <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#">SHOP <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#">CONTACT US <i class="fa-solid fa-chevron-down"></i></a>
        </div>
        <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
        </div>
    </header>
  )
}
