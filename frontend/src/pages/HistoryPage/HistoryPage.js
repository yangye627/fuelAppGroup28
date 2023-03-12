
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, {css} from 'styled-components';
import { Form, Row, Col, Container, Alert, Table } from 'react-bootstrap';

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

const BackButton = styled.button`
  background: #a3dea2;
  border: none;
  margin: 10px 10px;
  border-radius: 8px;
  padding: 10px 10px;
  text-align: center;
  color: black;
  width: 180px;
`;


const HistoryPage = () => {
  const [fuelHistory, setFuelHistory] = useState([]);

  useEffect(() => {
    const priceModel = async () => {
        const response = await fetch("/getPrice")
        const fetchedUser = await response.json()
        if (typeof fetchedUser.user.fullAddress !== "undefined"){
            setFuelHistory(fetchedUser.user.history);
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
      <Title>Fuel History</Title>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Delivery Date</th>
            <th>Delivery Address</th>
            <th>Gallons Requested</th>
            <th>Suggested Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        {fuelHistory && fuelHistory.map((items, index) => (
          <tbody key = {index}>
            <tr>
              <th>{items.date}</th>
              <th>{items.fullAddress}</th>
              <th>{items.gallons}</th>
              <th>{"$ " + items.price}</th>
              <th>{"$ " + items.amount}</th>
            </tr>
          </tbody>

        ))}
      </Table>
      <BackButton
            onClick={async () => {
                window.location.href = '/#/userinfo';
            }
        }
        >
            Back to Profile
        </BackButton>
    </Root>
  );
};

export default HistoryPage;