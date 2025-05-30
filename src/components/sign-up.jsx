import { Input } from 'antd'
import SingUpImage from '../Images/SignUpImage.png'

export function SignUp() {
    return <div id="sign-up">
        <img src={SingUpImage} style={{width: '1000px', height: '1000px'}}/>
        <div id="sign-up-form">
            <div style={{fontFamily: 'Inter, sans-serif', fontSize: '44px', fontWeight: '500'}}>Create an account</div>
            <div style={{fontSize: '18px'}}>Enter your details below</div>
            <Input className='sign-up-input' placeholder='Name'></Input>
            <Input className='sign-up-input' placeholder='Email or Phone Number'></Input>
            <Input className='sign-up-input' placeholder='Password'></Input>
            <button id='sign-up-button'>Create Account</button>
        </div>
    </div>
}
