import { Input, notification } from 'antd'
import SingUpImage from '../Images/SignUpImage.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const [api, contextHolder] = notification.useNotification();

    const [regText1, setRegText1] = useState("");
    const [regText2, setRegText2] = useState("");
    const [regText3, setRegText3] = useState("");

    const RegisterNotification = (isValid) =>
    {
        if (isValid) {
            
            api.success({
                message: <div style={{fontSize: '20px', fontWeight: '600'}}>Успешная регистрация</div>,
                description: `Вы были успешно зарегестрированы под именем ${regText1}`,
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

    const handleRegisterClick = () => {
        const mas = [regText1, regText2, regText3];
        if (Object.values(mas).some(value => value.trim() === ''))
            RegisterNotification(false);
        else {
            RegisterNotification(true);
            setRegText1('');
            setRegText2('');
            setRegText3('');
        }
    };

    return <div id="sign-up">
        {contextHolder}
        <img src={SingUpImage} style={{width: '1000px', height: '1000px'}}/>
        <div id="sign-up-form">
            <div style={{fontFamily: 'Inter, sans-serif', fontSize: '44px', fontWeight: '500'}}>Create an account</div>
            <div style={{fontSize: '18px'}}>Enter your details below</div>
            <Input className='sign-up-input' onChange={(txt) => setRegText1(txt.target.value)} value={regText1} placeholder='Name'></Input>
            <Input className='sign-up-input' onChange={(txt) => setRegText2(txt.target.value)} value={regText2} placeholder='Email or Phone Number'></Input>
            <Input className='sign-up-input' onChange={(txt) => setRegText3(txt.target.value)} value={regText3} placeholder='Password'></Input>
            <button onClick={handleRegisterClick} id='sign-up-button'>Create Account</button>
        </div>
    </div>
}
