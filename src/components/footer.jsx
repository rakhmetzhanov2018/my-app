import { Input } from "antd";
import FooterPicture from "../Images/FooterPicture.png"

export function Footer() {
    return <footer>
        <div className="footer-div">
            <h1>Exclusive</h1>
            <h2>Subscribe</h2>
            <p>Get 10% off your first order</p>
            <Input/>
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
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div className="footer-div">
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className="footer-div">
            <h2>Download App</h2>
            <div>Save $3 with App New User Only</div>
            <img src={FooterPicture}></img>
        </div>
    </footer>
}