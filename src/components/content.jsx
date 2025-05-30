import CategoryCellphone  from "../Images/Category-CellPhone.png"
import CategoryComputer  from "../Images/Category-Computer.png"
import CategorySmartWatch  from "../Images/Category-SmartWatch.png"
import CategoryCamera  from "../Images/Category-Camera.png"
import CategoryHeadphone  from "../Images/Category-Headphone.png"
import CategoryGamepad  from "../Images/Category-Gamepad.png"

import DogFood from "../ProductImages/DogFood.png"
import Camera from "../ProductImages/Camera.png"
import Laptop from "../ProductImages/Laptop.png"
import CurologySet from "../ProductImages/CurologySet.png"
import Car from "../ProductImages/Car.png"
import SoccerCleats from "../ProductImages/SoccerCleats.png"
import Gamepad from "../ProductImages/Gamepad.png"
import Jacket from "../ProductImages/Jacket.png"
import Coat from "../ProductImages/Coat.png"
import Bag from "../ProductImages/Bag.png"

import YellowStar from "../Images/YellowStar.png"
import GrayStar from "../Images/GrayStar.png"
import { productMas } from "./products"
import { useNavigate } from "react-router-dom"


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
            {DeployProducts()}
        </div>
    </div>
}

function DeployProducts() {
    const productImages = [DogFood, Camera, Laptop, CurologySet, Car, SoccerCleats, Gamepad, Jacket, Coat, Bag]
    return (
        <div id="product-list">{productMas.map(item => 
            (<Product name={item.name} cost={item.cost} rating={item.rating} image={productImages[productMas.indexOf(item)]}/>))}
        </div>
    );
}

function Product(props) {
    const navigate = useNavigate();
    const handleClickProduct = (id) => {
        navigate(`/product/:id=${id}`);
    };
    return <div className="product">
        <button className="product-button" onClick={handleClickProduct(1)}>
            <img src={props.image}></img>
        </button>
        <div>{props.name}
            <div style={{display: 'flex', gap: '10px'}}>
                <div style={{color: 'red', marginTop: '-1px'}}>${props.cost}</div>
                {Scoring(props.rating)}
            </div>
        </div>
    </div>
}

function Scoring(score) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(i >= score ? 0 : 1);
    }
    return (
    <div style={{display: 'flex', gap: '10px', alignItems:'center'}}>
        { arr.map(item => (<img style={{scale: '120%'}} src={item === 1 ? YellowStar : GrayStar}></img>))}
    </div>
    );
}