import { Input, notification } from "antd"
import Mail from "../Images/icons-mail.jpg"
import Phone from "../Images/icons-phone.jpg"
import { useState } from "react";



export function Contact() {
    const [api, contextHolder] = notification.useNotification();

    const SendMessageNotification = (isValid) =>
    {
        if (isValid) {
            api.success({
                message: <div style={{fontSize: '20px', fontWeight: '600'}}>Успех</div>,
                description: 'Ваше сообщение было успешно отправлено',
                duration: 5,
                placement: 'bottomRight',
            });
        }
        else {
            api.error({
                message: <div style={{fontSize: '20px', fontWeight: '600'}}>Ошибка</div>,
                description: 'Не все поля заполнены',
                duration: 5,
                placement: 'bottomRight',
            });
        }
    }
    const [messageText1, setMessageText1] = useState('');
    const [messageText2, setMessageText2] = useState('');
    const [messageText3, setMessageText3] = useState('');
    const [messageText4, setMessageText4] = useState('');

    const handleSendMessageClick = () => {
        const mas = [messageText1, messageText2, messageText3, messageText4]
        if (Object.values(mas).some(value => value.trim() === ''))
            SendMessageNotification(false);
        else {
            SendMessageNotification(true);
            setMessageText1('');
            setMessageText2('');
            setMessageText3('');
            setMessageText4('');
        }
    };
    

    const { TextArea } = Input; 
    return <div id="contact">
        {contextHolder}
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
                <Input className="contact-input" placeholder="Your Phone" onChange={(txt) => setMessageText1(txt.target.value)} value={messageText1}></Input>
                <Input className="contact-input" placeholder="Your Email" onChange={(txt) => setMessageText2(txt.target.value)} value={messageText2}></Input>
                <Input className="contact-input" placeholder="Your Name" onChange={(txt) => setMessageText3(txt.target.value)} value={messageText3}></Input>
                <TextArea id="contact-message-text" placeholder="Your Message" rows={10} onChange={(txt) => setMessageText4(txt.target.value)} value={messageText4}/>
                <button id="contact-send-message-button" onClick={handleSendMessageClick}>Send Message</button>
            </div>
        </div>
    </div>
}