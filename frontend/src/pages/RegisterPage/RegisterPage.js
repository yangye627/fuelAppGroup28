import React, { useState } from 'react';
import styled, { css,keyframes } from 'styled-components';
import { Navigate } from 'react-router-dom';
const Root = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fefff8;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    text-align: center;
    border-left: 12px solid #a3dea2;
    border-radius: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-right: 12px solid #a3dea2;
    font-family: 'Permanent Marker', cursive;
`;

const UserInfoForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const InputLabel = styled.label`
    width: 80px;
    margin: 20px 20px;
`;

const Input = styled.input`
    height: 38px;
    margin: 10px 10px;
    border-radius: 5px;
`;

const RegisterButton = styled.button`
    background: #a3dea2;
    border: none;
    margin: 10px 10px;
    border-radius: 8px;
    padding: 10px 10px;
    text-align: center;
    color: black;
    width: 180px;
`;

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Root>
        <Title>Register</Title>
        <InputContainer>
            <InputLabel htmlFor="username">Username:</InputLabel>
            <Input
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            />
        </InputContainer>
        <InputContainer>
            <InputLabel htmlFor="password">Password:</InputLabel>
            <Input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            />
        </InputContainer>
        <RegisterButton 
            onClick={async () => {
                if (username === '' || password === '')
                {
                    alert("username and password must be filled");
                }
                else{
                    console.log('Username:', username);
                    console.log('Password:', password);
                    const userAuth = { username, password };
                    const response = await fetch("/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userAuth)
                    });
                
                    if (response.ok) {
                    setUsername("");
                    setPassword("");
                    window.location.href = '/#/login';
                    }
                    else {
                        console.log("666");
                    }
                }
              }
            }
        >Regist</RegisterButton>
    </Root>
  );
}

export default RegisterPage;