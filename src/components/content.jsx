import CategoryCellphone  from "../Images/Category-CellPhone.png"
import CategoryComputer  from "../Images/Category-Computer.png"
import CategorySmartWatch  from "../Images/Category-SmartWatch.png"
import CategoryCamera  from "../Images/Category-Camera.png"
import CategoryHeadphone  from "../Images/Category-Headphone.png"
import CategoryGamepad  from "../Images/Category-Gamepad.png"


export function MainContent() {
    return <div id="main-content">
        <div className="content-part">
            <div className="content-part-text">
                <div className="orange-rectangle"></div>
                <h3 className="category-first-name">Categories</h3>
            </div>
            <h1 style={{fontSize: "36px"}}>Browse by Categories</h1>
            <div id="category-list">
                <button className="category-button">
                    <img src={CategoryCellphone} style={{scale: '130%'}}></img>
                    <div className="category-title">Phones</div>
                </button>
                <button className="category-button">
                    <img src={CategoryComputer} style={{scale: '130%'}}></img>
                    <div className="category-title">Computers</div>
                </button>
                <button className="category-button">
                    <img src={CategorySmartWatch} style={{scale: '130%'}}></img>
                    <div className="category-title">SmartWatch</div>
                </button>
                <button className="category-button">
                    <img src={CategoryCamera} style={{scale: '130%'}}></img>
                    <div className="category-title">Camera</div>
                </button>
                <button className="category-button">
                    <img src={CategoryHeadphone} style={{scale: '130%'}}></img>
                    <div className="category-title">HeadPhones</div>
                </button>
                <button className="category-button">
                    <img src={CategoryGamepad} style={{scale: '130%'}}></img>
                    <div className="category-title">Gaming</div>
                </button>
            </div>
        </div>
        <div className="line" style={{border: "#FFFF01"}}></div>
        <div className="content-part">
            <div className="content-part-text">
                <div className="orange-rectangle"></div>
                <h3 className="category-first-name">Our products</h3>
            </div>
            <h1 style={{fontSize: "36px"}}>Explore our products</h1>
            <div id="product-list">
                <button className="product-button">
                </button>
                <button className="product-button"></button>
                <button className="product-button"></button>
                <button className="product-button"></button>
                <button className="product-button"></button>
                <button className="product-button"></button>
                <button className="product-button"></button>
                <button className="product-button"></button>
            </div>
        </div>
    </div>
}