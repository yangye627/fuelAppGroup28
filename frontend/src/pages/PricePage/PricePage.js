import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { Form, Row, Col, Container, Alert, Table } from 'react-bootstrap';
// import auth from '../../auth/auth';
import styled, {css} from 'styled-components';


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

const QuoteFuel = styled.button`
    background: #a3dea2;
    border: none;
    margin: 10px 10px;
    border-radius: 8px;
    padding: 10px 10px;
    text-align: center;
    color: black;
    width: 180px;
`;

export const Price = () => {

  
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const priceModel = async () => {
        const response = await fetch("/getPrice")
        const fetchedUser = await response.json()
        if (typeof fetchedUser.user.fullAddress !== "undefined"){
            setPrice(fetchedUser.user.price);
            setAmount(fetchedUser.user.amount);
            return;
        }
    }

    const interval = setInterval(function(){
        priceModel();
        clearInterval(interval);
        return
    }, 1000)
}, [])

  return (
    <Root>
      <Title>Fuel Quote</Title>
        <Form>
            <Form.Group>
                <Form.Label>Suggested Price/gallon</Form.Label>
                <Form.Text 
                    type="float"
                    value={price || ""}
                    onChange={(f) => setPrice(f.currentTarget.value)}
                    /><br /> {price + " $/gallon"} <br /><br />
            </Form.Group>
            <Form.Group>
                <Form.Label>Total Amount Due:</Form.Label>
                <Form.Text 
                    type="float"
                    value={amount || ""}
                    /><br /> {amount + " $"} <br /><br />
            </Form.Group>
        </Form>
        <QuoteFuel
            onClick={async () => {
                window.location.href = '/#/userinfo';
                return;
            }
        }
        >
            Back to Profile
        </QuoteFuel>
    </Root>
  );
};

export default Price;