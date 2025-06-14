import { Input } from "antd";
import FooterPicture from "../Images/FooterPicture.png"
import { SendIcon, SocialMediaIcons } from "../Images";
import { Navigate, useNavigate } from "react-router-dom";

export function Footer() {
    const navigate = useNavigate();
    return <footer>
        <div className="footer-div">
            <h1>Exclusive</h1>
            <h2>Subscribe</h2>
            <p>Get 10% off your first order</p>
            <Input id="footer-input" style={{border: 'solid white 1px', backgroundColor: 'black', 
            fontSize: '20px', color: 'white', width: '250px'}} 
            placeholder="Enter your email" suffix={<img src={SendIcon}></img>}/>
        </div>
        <div className="footer-div">
            <h2>Support</h2>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div className="footer-div">
            <h2>Account</h2>
            <p>My Account</p>
            <button className="footer-button" onClick={() => {navigate('/sign-up')}}>Login / Register</button>
            <p>Cart</p>
            <p>Wishlist</p>
            <button className="footer-button" onClick={() => {navigate('/home#products')}}>Shop</button>
        </div>
        <div className="footer-div">
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <button className="footer-button" onClick={() => {navigate('/contact')}}>Contact</button>
        </div>
        <div className="footer-div">
            <h2>Download App</h2>
            <p>Save $3 with App New User Only</p>
            <p><img src={FooterPicture}></img></p>
            <img src={SocialMediaIcons}></img>
        </div>
    </footer>
}