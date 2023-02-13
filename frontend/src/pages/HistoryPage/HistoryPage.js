
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


const HistoryPage = () => {
  // const [fuelHistory, setFuelHistory] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('http://localhost:3000');
  //     setFuelHistory(result.data);
  //   };
  //   fetchData();
  // }, []);
 
  return (
    <Root>
      <Title>Fuel History</Title>
      <Table>
        <Col md={80}>
          
          <Row>Date</Row>
          <Row>Fuel Type</Row>
          <Row>Amount</Row>
          <Row>Price</Row>
        </Col>
        <tbody>
          <td>1</td>
        </tbody>
        {/* <tbody>
          {fuelHistory.map(entry => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.fuelType}</td>
              <td>{entry.amount}</td>
              <td>{entry.price}</td>
            </tr>
          ))}
        </tbody> */}
      </Table>
    </Root>
  );
};

export default HistoryPage;