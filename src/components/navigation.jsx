import { useNavigate } from 'react-router-dom';

export function Navigation() {
    const navigate = useNavigate();
    return <nav>
        <div id='nav-button-container'>
        <button onClick={() => navigate('/home#products')} className="nav-button">Woman's Fashion</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Men's Fashion</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Electronics</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Home & Lifestyle</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Medicine</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Sports & Outdoor</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Baby’s & Toys</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Groceries & Pets</button>
        <button onClick={() => navigate('/home#products')} className="nav-button">Health & Beauty</button>
        </div>
    </nav>
}