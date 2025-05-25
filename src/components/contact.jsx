import { Input } from "antd"
import Mail from "../Images/icons-mail.jpg"
import Phone from "../Images/icons-phone.jpg"

export function Contact() {
    const { TextArea } = Input; 
    return <div id="contact">
        <div id="contact-content">
            <div id="call-write">
                <div className="contact-call">
                    <img src={Phone}></img>
                    <div>Call To Us</div>
                </div>
                <div>We are available 24/7, 7 days a week.</div>
                <div>Phone: +8801611112222</div>
                <div style={{width: '95%', border: 'solid 1px'}}></div>
                <div className="contact-call">
                    <img src={Mail}></img>
                    <div>Write To Us</div>
                </div>
                
                <div>Fill out our form and we will contact you within 24 hours.</div>
                <div>Emails: customer@exclusive.com</div>
                <div>Emails: support@exclusive.com</div>
            </div>
            <div id="send-message">
                <Input className="contact-input" placeholder="Your Phone"></Input>
                <Input className="contact-input" placeholder="Your Email"></Input>
                <Input className="contact-input" placeholder="Your Name"></Input>
                <TextArea id="contact-message-text" placeholder="Your Message" rows={10}/>
                <button id="contact-send-message-button">Send Message</button>
            </div>
        </div>
    </div>
}