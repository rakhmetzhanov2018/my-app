export function MainContent() {
    return <div id="main-content">
        <div className="content-part">
            <div className="content-part-text">
                <div className="orange-rectangle"></div>
                <h3 className="category-first-name">Categories</h3>
            </div>
            <h1 style={{fontSize: "36px"}}>Browse by Categories</h1>
            <div id="category-list">
                <button className="category-button"></button>
                <button className="category-button"></button>
                <button className="category-button"></button>
                <button className="category-button"></button>
                <button className="category-button"></button>
                <button className="category-button"></button>
                <button className="category-button"></button>
            </div>
        </div>
        <div className="line"></div>
        <div className="content-part">
            <div className="content-part-text">
                <div className="orange-rectangle"></div>
                <h3 className="category-first-name">Our products</h3>
            </div>
            <h1 style={{fontSize: "36px"}}>Explore our products</h1>
            <div id="product-list">
                <button className="product-button"></button>
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