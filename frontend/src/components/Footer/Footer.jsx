import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

  const imageClick= (()=>{
    window.open('https://github.com/mayankgautam6542', '_blank');

})
const imageClick1= (()=>{
    window.open('https://www.linkedin.com/in/mayank-gautam-465a19271/', '_blank');

})

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo">
            <img src={assets.logo1} alt="" />
          </div>
             <p> Healthy Bites offers a diverse selection of food options, meticulously crafted to provide a balanced amount of
               dietary protein and fiber.Our menu is designed to delight your taste buds while promoting overall well-being. 
               Each dish is thoughtfully prepared using high-quality ingredients, ensuring you enjoy both exceptional flavor and 
               nutritional benefits. At Healthy Bites, we believe that healthy eating should never compromise on taste.</p> 
          <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" onClick={()=>imageClick()} style={{ cursor: 'pointer' }}/>
                {/* <img src={assets.profile_icon} alt="" /> */}
                <img src={assets.linkedin_icon} alt="" onClick={()=>imageClick1()} style={{ cursor: 'pointer' }}/>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8802022042</li>
                <li>contact@healthybites.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © HealthyBites.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
