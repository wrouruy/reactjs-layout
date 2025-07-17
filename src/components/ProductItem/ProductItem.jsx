import React from 'react'
import StarsGen from '../StarsGen/StarsGen'

export default function (props) {
  return (
    <div style={{
        width: '450px',
        height: '520px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '#0000001A 1px solid',
        transition: '300ms',
        cursor: 'pointer'
    }} className='productItem-ProductPage'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '20px'}}>{props.saleText}</p>
            <div style={{display: 'flex', height: '350px', justifyContent: 'center', alignItems: 'center'}}>
              <img src={props.img} style={{width: '350px'}}/>
            </div>
            
            <h2 style={{fontSize: '25px'}}>{props.title}</h2>
            <h4 style={{fontSize: '20px', fontWeight: 600}}>$ {props.price} <span className='grayColorText'>/ <span className='crossedOutText'>$ {props.oldprice}</span></span></h4>
            <StarsGen amount={props.stars} />
        </div>
    </div>
  )
}
