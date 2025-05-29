import ImageAbout from "../Images/imageAbout.jpg"
import AchievementIcon1 from "../Images/AchievementIcon1.jpg"
import AchievementIcon2 from "../Images/AchievementIcon2.png"
import AchievementIcon3 from "../Images/AchievementIcon3.jpg"
import AchievementIcon4 from "../Images/AchievementIcon4.jpg"
import AboutOtherIcon1 from "../Images/AboutOtherIcon1.png"
import AboutOtherIcon2 from "../Images/AboutOtherIcon2.png"
import AboutOtherIcon3 from "../Images/AboutOtherIcon3.png"

export function About() {
    return <div id="about">
        <div id="about-story">
            <div id="about-story-text">
                <h1 style={{fontSize: "60px", letterSpacing: '2px', fontWeight: '600'}}>Our Story</h1>
                <div>
                Launced in 2015, Exclusive is South Asia’s 
                premier online shopping makterplace with an 
                active presense in Bangladesh. Supported by 
                wide range of tailored marketing, data and service solutions, 
                Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                customers across the region. 
                </div>
                <div>
                Exclusive has more than 1 Million products to offer, 
                growing at a very fast. Exclusive offers a diverse 
                assotment in categories ranging  from consumer.
                </div>
            </div>
            <img src={ImageAbout} style={{position: 'relative', right: '40px', margin: '60px'}}></img>
        </div>
        <div id="about-achievements">
            <div className="about-achievements-achievement">
                <img className="achievement-icon" src={AchievementIcon1}></img>
                <h1 className="achievement-h1">10.5k</h1>
                <div>Sallers active our site</div>
            </div>
            <div className="about-achievements-achievement">
                <img className="achievement-icon" src={AchievementIcon2}></img>
                <h1 className="achievement-h1">10.5k</h1>
                <div>Sallers active our site</div>
            </div>
            <div className="about-achievements-achievement">
                <img className="achievement-icon" src={AchievementIcon3}></img>
                <h1 className="achievement-h1">10.5k</h1>
                <div>Sallers active our site</div>
            </div>
            <div className="about-achievements-achievement">
                <img className="achievement-icon" src={AchievementIcon4}></img>
                <h1 className="achievement-h1">10.5k</h1>
                <div>Sallers active our site</div>
            </div>
        </div>
        <div id="about-workers"></div>
        <div id="about-other">
            <div className="about-other-object">
                <img src={AboutOtherIcon1}></img>
                <h2 style={{margin: '30px 0 10px 0'}}>FREE AND FAST DELIVERY</h2>
                <div style={{fontSize: '18px'}}>Free delivery for all orders over $140</div>
            </div>
            <div className="about-other-object">
                <img src={AboutOtherIcon2}></img>
                <h2 style={{margin: '30px 0 10px 0'}}>24/7 CUSTOMER SERVICE</h2>
                <div style={{fontSize: '18px'}}>Friendly 24/7 customer support</div>
            </div>
            <div className="about-other-object">
                <img src={AboutOtherIcon3}></img>
                <h2 style={{margin: '30px 0 10px 0'}}>MONEY BACK GUARANTEE</h2>
                <div style={{fontSize: '18px'}}>We return money within 30 days</div>
            </div>
        </div>
    </div>
}