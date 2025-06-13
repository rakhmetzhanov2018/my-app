import { AutoComplete, Input, Modal, notification } from "antd"
import search from "../Images/Search.png"
import cart from "../Images/Cart.jpg"
import wishlist from "../Images/Wishlist.jpg"
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";
import { productMas } from "./products";
import { Counter, Scoring } from "./content";
import { Minus, Plus, ProductBottom } from "../Images";
import { Bag, Camera, Car, Coat, CurologySet, DogFood, Gamepad, Jacket, Laptop, SoccerCleats } from "../ProductImages";

export function Header() {
    const navigate = useNavigate();

    const [api, contextHolder] = notification.useNotification();
    const [count, setCount] = useState(1);
    const refCount = useRef(null);


    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const handleCancel = () => setIsModalOpen(false);

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

    const OnInputChange = (txt) => {
        setSearchText(txt.target.value);
        setSuggestions(productMas.filter(prd => prd.fullname.toLowerCase().includes(searchText.toLowerCase()) ||
    prd.text.toLowerCase().includes(searchText.toLowerCase()))
        .map(item => ({label: item.fullname, value: item.fullname})));
    }
    function OnSelect(text) {
        setSearchText(text);
        setSuggestions([]);

        const product = productMas.find(item => item.fullname === text);
        const productImages = [DogFood, Camera, Laptop, CurologySet, Car, SoccerCleats, Gamepad, Jacket, Coat, Bag]

        setModalData({
            image: productImages[productMas.indexOf(product)],
            name: product.fullname,
            cost: product.cost,
            rating: product.rating,
            text: product.text
        })
        setIsModalOpen(true);
    }
    const HandleBuyClick = (name, cost) => {
        api.success({
                    message: <div style={{fontSize: '30px', fontWeight: '600'}}>Успешная операция</div>,
                    description: <div style={{fontSize: '20px', fontWeight: '400'}}>Предмет {name} в количестве {refCount.current.textContent} штук,
                     общей стоймостью {parseInt(cost) * parseInt(refCount.current.textContent)}$ был добавлен в корзину</div>,
                    duration: 5,
                    placement: 'bottomRight',
                    style: { width: '600px'}
    });
    }
    return <div id="header">
        <button onClick={() => navigate('/home')} id="header-main-button">Exclusive</button>
        <div id="header-button-container">
        <button className="header-button" onClick={handleClickHome}>Home</button>
        <button className="header-button" onClick={handleClickContact}>Contact</button>
        <button className="header-button" onClick={handleClickAbout}>About</button>
        <button className="header-button" onClick={handleClickSignUp}>Sign Up</button>
        </div>
        <div id="header-other">
            <AutoComplete id="header-search-auto" options={suggestions} onSelect={OnSelect}
            dropdownStyle={{fontFamily: 'Poppins'}}>
            <Input id="header-search-input" value={searchText} onChange={OnInputChange} size='large' placeholder="What are you looking for?" 
            style={{width: '300px', marginRight: '8px', border: 'none', backgroundColor: "#FFF3F3"}} 
            suffix={<button onClick={() => navigate('/home#products')} style={{border: 'none', backgroundColor: '#FFF3F3'}}
            ><img src={search}/></button>}></Input>
            </AutoComplete>
            
            <img src={wishlist}></img>
            <img src={cart}></img>

            <Modal width='1000px' open={isModalOpen} onCancel={handleCancel} footer={null}>
            <div id="product-modal">
                <div id='product-modal-img-container'><img id='product-modal-img' src={modalData.image}></img></div>
                <div id='product-modal-text'>
                    <div id='product-modal-text-name'>{modalData.name}</div>
                    <div>{Scoring(modalData.rating)}</div>
                    <div id='product-modal-text-price'>${modalData.cost}</div>
                    <div id='product-modal-text-desc'>{modalData.text}</div>
                    <div id="product-modal-text-buttons">
                        <div id="product-modal-text-buttons-main">
                            <button className="product-modal-text-buttons-plus-minus" onClick={() => count > 1 ? setCount(count - 1) : {}}><img src={Minus}></img></button>
                            <div ref={refCount} id="product-modal-text-buttons-div">{count}</div>
                            <button className="product-modal-text-buttons-plus-minus" onClick={() => setCount(count + 1)}><img src={Plus}></img></button>
                        </div>
                        {contextHolder}
                        <button onClick={() => HandleBuyClick(modalData.name, modalData.cost)} id="product-modal-text-buttons-buy">Buy Now</button>
                    </div>
                    <img style={{marginTop: '28px'}} src={ProductBottom}></img>
                </div>
            </div>
            </Modal>
        </div>
    </div>  
}