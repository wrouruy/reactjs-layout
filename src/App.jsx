import React from 'react'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ProductPage from './components/ProductPage/ProductPage'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className='root-App'>
      <Header />
      <HomePage />
      <AboutPage />
      <ProductPage />
      <Footer />
    </div>
  )
}
