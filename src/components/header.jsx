import { Input } from "antd"
import search from "../Images/Search.jpg"
import cart from "../Images/Cart.jpg"
import wishlist from "../Images/Wishlist.jpg"

export function Header() {
    return <div id="header">
        <button id="header-main-button">Exclusive</button>
        <div id="header-button-container">
        <button className="header-button">Home</button>
        <button className="header-button">Contact</button>
        <button className="header-button">About</button>
        <button className="header-button">Sign Up</button>
        </div>
        <div id="header-other">
            <Input size='large' placeholder="What are you looking for?" style={{width: '40%', marginRight: '8px', border: 'none', borderRadius: '0px', backgroundColor: "#FFF3F3"}} 
            suffix={<button style={{border: 'none'}}><img src={search}/></button>}></Input>
            <img src={wishlist}></img>
            <img src={cart}></img>
        </div>
    </div>
}