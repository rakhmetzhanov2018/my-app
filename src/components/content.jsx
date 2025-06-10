import { productMas } from "./products"
import { useNavigate } from "react-router-dom"
import { Bag, Camera, Car, Coat, CurologySet, DogFood, Gamepad, Jacket, Laptop, SoccerCleats } from "../ProductImages"
import { CategoryCamera, CategoryCellphone, CategoryComputer, CategoryGamepad, CategoryHeadphone, CategorySmartWatch, GrayStar, Minus, Plus, ProductBottom, YellowStar } from "../Images"
import { useState } from "react";
import { Modal } from "antd";

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
            (<Product name={item.name} fullname={item.fullname} cost={item.cost} rating={item.rating} text={item.text} image={productImages[productMas.indexOf(item)] }/>))}
        </div>
    );
}

function Product(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const showModal = () => {
        setModalData({
            image: props.image,
            name: props.fullname,
            cost: props.cost,
            rating: props.rating,
            text: props.text
        })
        setIsModalOpen(true);
    } 
    const handleCancel = () => setIsModalOpen(false);

    return <div className="product">
        <button className="product-button" onClick={showModal}>
            <img src={props.image}></img>
        </button>
        <div>{props.name}
            <div style={{display: 'flex', gap: '10px'}}>
                <div style={{color: 'red', marginTop: '-1px'}}>${props.cost}</div>
                {Scoring(props.rating)}
            </div>
        </div>
        <Modal width='1000px' open={isModalOpen} onCancel={handleCancel} footer={null}>
            <div id="product-modal">
                <div id='product-modal-img-container'><img id='product-modal-img' src={modalData.image}></img></div>
                <div id='product-modal-text'>
                    <div id='product-modal-text-name'>{modalData.name}</div>
                    <div>{Scoring(modalData.rating)}</div>
                    <div id='product-modal-text-price'>${modalData.cost}</div>
                    <div id='product-modal-text-desc'>{modalData.text}</div>
                    <div id="product-modal-text-buttons">
                        {Counter()}
                        <button id="product-modal-text-buttons-buy">Buy Now</button>
                    </div>
                    <img style={{marginTop: '28px'}} src={ProductBottom}></img>
                </div>
            </div>
        </Modal>
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

function Counter() {
    const [count, setCount] = useState(1);

    return <div id="product-modal-text-buttons-main">
        <button className="product-modal-text-buttons-plus-minus" onClick={() => count > 0 ? setCount(count - 1) : {}}><img src={Minus}></img></button>
        <div id="product-modal-text-buttons-div">{count}</div>
        <button className="product-modal-text-buttons-plus-minus" onClick={() => setCount(count + 1)}><img src={Plus}></img></button>
    </div>
}