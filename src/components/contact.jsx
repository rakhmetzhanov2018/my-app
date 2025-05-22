import { Input } from "antd"

export function Contact() {
    <div id="contact">
        <div id="contact-content">
            <div id="call-write">
                <p>Call To Us</p>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
                <p>Write To Us</p>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
            </div>
            <div id="send-message">
                <Input size='large' placeholder="What are you looking for?" 
            style={{width: '400px', height: '80px', marginRight: '8px', backgroundColor: "#FFF3F3"}} ></Input>
                <Input size='large' placeholder="What are you looking for?" 
            style={{width: '400px', height: '80px', marginRight: '8px', backgroundColor: "#FFF3F3"}} ></Input>
                <Input size='large' placeholder="What are you looking for?" 
            style={{width: '400px', height: '80px', marginRight: '8px', backgroundColor: "#FFF3F3"}} ></Input>
            </div>
        </div>
    </div>
}