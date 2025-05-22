import { Input } from "antd"
import search from "../Images/Search.jpg"
import cart from "../Images/Cart.jpg"
import wishlist from "../Images/Wishlist.jpg"
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/home');
    };
    const handleClickContact = () => {
        navigate('/contact');
    };
    const handleClickAbout = () => {
        navigate('/about');
    };
    const handleClickSignUp = () => {
        navigate('/sign-up');
    };
    return <div id="header">
        <button id="header-main-button">Exclusive</button>
        <div id="header-button-container">
        <button className="header-button" onClick={handleClickHome}>Home</button>
        <button className="header-button" onClick={handleClickContact}>Contact</button>
        <button className="header-button" onClick={handleClickAbout}>About</button>
        <button className="header-button" onClick={handleClickSignUp}>Sign Up</button>
        </div>
        <div id="header-other">
            <Input size='large' placeholder="What are you looking for?" 
            style={{width: '40%', marginRight: '8px', border: 'none', backgroundColor: "#FFF3F3"}} 
            suffix={<button style={{border: 'none'}}><img style={{borderRadius: '50%'}} src={search}/></button>}></Input>
            <img src={wishlist}></img>
            <img src={cart}></img>
        </div>
    </div>  
}