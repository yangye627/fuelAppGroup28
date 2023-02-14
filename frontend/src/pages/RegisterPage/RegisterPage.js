import React, { useState } from 'react';
import styled, { css,keyframes } from 'styled-components';

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

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Root onSubmit={handleSubmit}>
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
        <RegisterButton type="submit">Regist</RegisterButton>
    </Root>
  );
}

export default LoginPage;