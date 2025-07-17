import React from 'react'
import AboutPageMainImg from '../../assets/AboutPageMain.png'
import CheckboxStatic from '../CheckboxStatic/CheckboxStatic'
import './AboutPage.css'

export default function AboutPage() {
  const advantages = ['There are many variations of passages of Lorem Ipsum', 'There are many variations of passages of Lorem Embarrassing middle of text.', 'There are many variations of passages of Lorem Ipsum', 'There are many variations of passages.', 'There are many variations of passages.']
  return (
    <div className='root-AboutPage'>
        <img src={AboutPageMainImg}/>
        <div className="column">
            <span className='redColorText'>ABOUT PRODUCTS</span>
            <h1>About For Products</h1>
            <div className='textContainer-AboutPage'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly have suffered believable. 
                  <br/><br/>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <div className="advantagesContainer-AboutPage">
                  {advantages.map((e) => (
                    <div className='row'>
                      <CheckboxStatic />
                      <h6>{e}</h6>
                    </div>
                  ))}
                </div>

            </div>
        </div>
    </div>
  )
}
