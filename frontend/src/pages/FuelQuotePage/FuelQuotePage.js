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

export const FuelQuote = () => {

  // User information hook
  const [gallons, setGallons] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [date, setDate] = useState('');
  
//   const [price, setPrice] = useState('');
//   const [amount, setAmount] = useState('');

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAddressPriceInfo = async () => {
        const response = await fetch("/fullAddressAndPrice")
        const fetchedUser = await response.json()
        if (typeof fetchedUser.user.fullAddress !== "undefined"){
            setFullAddress(fetchedUser.user.fullAddress);
            // setPrice(fetchedUser.user.price);
            // setAmount(fetchedUser.user.amount);
            return;
        }
    }

    const interval = setInterval(function(){
        fetchAddressPriceInfo();
        clearInterval(interval);
        return
    }, 2000)
}, [])

  return (
    <Root>
      <Title>Fuel Quote</Title>
        <Form>
            <Form.Group>
                <Form.Label>Gallons Requeste</Form.Label>
                <Form.Control 
                    required pattern="[0-9]+"
                    type="number"
                    value={gallons || ""}
                    onChange={(f) => setGallons(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control 
                    type="date"
                    value={date || ""}
                    onChange={(f) => setDate(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Delivery Address</Form.Label>
                <br/> {fullAddress} <br />
            </Form.Group>

            <QuoteFuel 
                onClick={async () => {
                    if (gallons === '' || date === '')
                    {
                        alert("Please enter Gallons and Date.");
                    }
                    else{
                        const calAmount = { gallons, date };
                        const response = await fetch("/fuelQuote", {
                            method: "POST",
                            headers: {
                            "Content-Type": "application/json"
                            },
                            body: JSON.stringify(calAmount)
                        });
                        console.log(response);
                        if (response.ok) {
                            setGallons("");
                            setDate("");
                            window.location.href = '/#/getPrice';
                            return false;
                        }
                        else {
                            alert("incorrct calculation");
                        }
                    }
                  }
                }
            >
                Get the total amount
            </QuoteFuel>
        </Form>
            <QuoteFuel
                onClick={async () => {
                    window.location.href = '/#/userinfo';
                }
            }
            >
                Back to Profile
            </QuoteFuel>
    </Root>
  );
};

export default FuelQuote;