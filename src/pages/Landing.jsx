import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LandingContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0;
    background-color: #7CB9E8;
    background-image: url(/img/7.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    gap: 10px;
    height: 100vh;
`;

const GreetingBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-bottom: 50px;

    img {
        width: 200px;
        height: auto;
    }

    h1 {
        font-size: 36px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: center;
        color: #002d62;
    }

    p {
        font-size: 1.1em;
        text-align: center;
        margin-top: 8px;
        color: #002d62;
    }
`;

const LoginBox = styled.div`
    max-width: 500px;
    width:50%;
    height: 350px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding-top: 15px;
    color: #002d62;

    h2 {
        font-size: 28px;
        color: #002d62;
        margin-bottom: 5px;
    }

    p {
        font-size: 24px;
        color: #002d62;
        margin-bottom: 15px;
    }

    input {
        width: 90%;
        padding: 10px;
        border: 2px solid #002d62;
        border-radius: 10px;
        font-size: 1em;
        background: rgba(255, 255, 255, 0.2);
        color: #002d62;
        outline: none;
        margin-bottom: 8px;

        &::placeholder {
            color: #002d62;
        }
    }
`;

const PasswordToggle = styled.span`
    position: absolute;
    right: 20px;
    top: 40%;
    transform: translateY(-40%);
    font-size: 20px;
    color: #002d62;
    cursor: pointer;
    padding: 0 10px;
    transition: color 0.3s ease;

    &:hover {
        color: #4B8BFF;
    }
`;

const Button = styled.button`
    width: 90%;
    padding: 10px;
    border: none;
    background: #002d62;
    color: white;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 8px;

    &:hover {
        background-color: #4B8BFF;
    }
`;

const ForgotPassword = styled.h1`
    font-size: 0.8em;
    color: #002d62;
    margin-top: 12px;
    cursor: pointer;
    text-decoration: underline;
`;

function LandingPage() {
    const navigate = useNavigate();
    function HomeNavigate() {
        navigate('/home');
    }
    const [showPassword, setShowPassword] = useState(false);

    return (
        <LandingContainer>
            <Container>
                <GreetingBox>
                    <img src="/img/fpop-logo.png" alt=""/>
                    <h1>Inventory Management System</h1>
                    <p>Effortlessly manage resources with transparency and efficiency.
                        Together, let's ensure every supply supports quality care and services!
                    </p>
                </GreetingBox>

                <LoginBox>
                    <h2>WELCOME</h2>
                    <p>LOG IN TO CONTINUE</p>
                    <form id='login'>
                        <input type="email"  name = "email" placeholder="Email" required />
                        <div style={{ position: 'relative' }}>
                            <input type={showPassword ? 'text' : 'password'} name = "password" placeholder="Password"required/>
                            <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? '🙈' : '👁'}
                            </PasswordToggle>
                        </div>
                        <Button type="submit" onClick={HomeNavigate}>LOGIN</Button>
                        <ForgotPassword>Forgot Password?</ForgotPassword>
                    </form>
                </LoginBox>
            </Container>
        </LandingContainer>
    );
}

export default LandingPage;
