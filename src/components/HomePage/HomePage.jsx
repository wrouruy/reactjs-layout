import React from 'react'
import AsimomSpeakerImg from '../../assets/AsimomSpeaker.png'
import parthner1Img from '../../assets/parthner1.png'
import parthner2Img from '../../assets/parthner2.png'
import parthner3Img from '../../assets/parthner3.png'
import parthner4Img from '../../assets/parthner4.png'
import OontZSpeakerImg from '../../assets/OontZSpeaker.png'
import blackHeadphoneImg from '../../assets/BlackHeadphone.png'
import CompactDroneImg from '../../assets/CompactDrone.png'
import CompactCameraImg from '../../assets/CompactCamera.png'
import StarsGen from '../StarsGen/StarsGen'
import './HomePage.css'

export default function HomePage() {
    const parthnersImg = [parthner1Img, parthner2Img, parthner3Img, parthner4Img];
    const secondOffer = [{
        img: OontZSpeakerImg,
        title: 'Always in style!',
        text: 'The standard chunk of Lorem Ipsum below \nfor those interested. The standard chunk \nof for those interested.',
        price: 249.99,
        oldprice: 249.99,
        stars: 4
    }, {
        img: blackHeadphoneImg,
        title: 'Always in style!',
        text: 'The standard chunk of Lorem Ipsum below \nfor those interested. The standard chunk \nof for those interested.',
        price: 249.99,
        oldprice: 249.99,
        stars: 4
    }];
    const thirdOffer = [{
        img: CompactDroneImg,
        title: 'THE 4K HDR COMPACT DRONE',
        subTitle: 'Get up to 20% off Today Only!',
    }, {
        img: CompactCameraImg,
        title: 'THE 4K HDR COMPACT Camera',
        subTitle: 'Get up to 30% off Today Only!',
    }];
    return (
        <div>
            <div className='firstOfferContainer-HomePage'>
                <div className="column">
                    <span className='redColorText'>Favorite brands</span>
                    <p> <span className='cyanSelectText'>An exciting place</span> <br/> for the whole family<br/>to shop.</p>
                    <h6>The standard chunk of Lorem Ipsum used since the 1500s is<br/>reproduced below for those interested.</h6>
                    <div className="row" style={{gap: '40px'}}>
                        <button type='button' className='ShopNow-HomePage'>Shop Now</button>
                        <h5>$ 249.99 <span className='crossedOutText'>$ 249.99</span></h5>
                    </div>
                </div>
                <img src={AsimomSpeakerImg} alt='Asimom Speaker'/>
            </div>
            <div className="parthnersContainer-HomePage">
                {parthnersImg.map((e) => (
                    <img src={e} />
                ))}
            </div>
            <div className="secondOfferContainer-HomePage">
                {secondOffer.map((e) => (
                    <div className='secondOfferItem-HomePage'>
                        <img src={e.img}/>
                        <div className="column">
                            <h2>{e.title}</h2>
                            <h5>{e.text.split('\n').map((line, i) => (<p key={i}>{line}</p>))}</h5>
                            <h6>$ {e.price} <span className='grayColorText'>/ <span className='crossedOutText'>$ {e.oldprice}</span></span></h6>
                            <StarsGen amount={e.stars}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="thirdOfferContainer-HomePage">
                {thirdOffer.map((e) => (
                    <div className="thirdOfferItem-HomePage">
                        <div className="column">
                            <h3>{e.subTitle}</h3>
                            <h1>{e.title}</h1>
                            <a>Show Now</a>
                        </div>

                        <img src={e.img}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
