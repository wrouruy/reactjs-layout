import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import AppleMouseImg from '../../assets/AppleMouse.png'
import OontZSpeakerImg from '../../assets/OontZSpeaker.png'
import iOSKeyboardImg from '../../assets/iOSKeyboard.png'
import MackbookProImg from '../../assets/MackbookPro.png'
import BlackHeadphoneImg from '../../assets/BlackHeadphone.png'
import iPhoneSpeakerImg from '../../assets/iPhoneSpeaker.png'
import './ProductPage.css'

export default function ProductPage() {
    const productsItem = [{
        saleText: 'Get up to 10% off Today Only!',
        img: AppleMouseImg,
        title: 'White Apple Mouse',
        price: 249.99,
        oldprice: 249.99,
        stars: 5
    }, {
        saleText: 'Get up to 20% off Today Only!',
        img: OontZSpeakerImg,
        title: 'Black iPhone Speaker',
        price: 249.99,
        oldprice: 249.99,
        stars: 5
    }, {
        saleText: 'Get up to 50% off Today Only!',
        img: iOSKeyboardImg,
        title: 'iOS Keyboard',
        price: 249.99,
        oldprice: 249.99,
        stars: 4
    }, {
        saleText: 'Get up to 50% off Today Only!',
        img: MackbookProImg,
        title: 'Mackbook Pro',
        price: 2049.99,
        oldprice: 249.99,
        stars: 4
    }, {
        saleText: 'Get up to 50% off Today Only!',
        img: BlackHeadphoneImg,
        title: 'Black Headphone',
        price: 249.99,
        oldprice: 249.99,
        stars: 4
    }, {
        saleText: 'Get up to 50% off Today Only!',
        img: iPhoneSpeakerImg,
        title: 'iPhone Speaker',
        price: 249.99,
        oldprice: 249.99,
        stars: 4
    }];
    return (
        <div className='root-ProductPage'>
            <span className='redColorText'>NEW PRODUCTS</span>
            <h1>Popular Products</h1>
            <div className="row">
                <a href="#"><span className='redColorText'>RECENT ARRIVAL</span></a>
                <a href="#">BEST SELLERS</a>
                <a href="#">SPECIAL OFFERS</a>
                <a href="#">FEATURED IN</a>
            </div>
            <div className="productContainer-ProductPage">
                {productsItem.map((e) => (
                    <ProductItem saleText={e.saleText} img={e.img} title={e.title} price={e.price} oldprice={e.oldprice} stars={e.stars}/>
                ))}
            </div>
            <a href="#" className='viewAll-ProductPage'>VIEW ALL <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
    )
}
