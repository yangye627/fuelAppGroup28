import React, { useState } from 'react';
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

export const Register = () => {

  // User information hook
  const [fullName, setFullName] = useState('');
  const [address] = useState('');
  const [date, setDate] = useState('');
  
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const [error, setError] = useState('');

// if we get our database, those placehold should be the value from db
// const [user, setUser] = useState([{}])
//     useEffect(() => {
//         axios.get('http://localhost:8000/auth/users/me') // update api 
//             .then(res => {
//                 setUser(res.data)
//             })
//     });
//     console.log(user)

  return (
    <Root>
      <Title>Fuel Quote</Title>
        <Form>
            <Form.Group>
                <Form.Label>Gallons Requeste</Form.Label>
                <Form.Control 
                    required pattern="[0-9]+"
                    type="number"
                    value={fullName || ""}
                    onChange={(f) => setFullName(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Delivery Address</Form.Label>
                <Form.Text 
                    type="text"
                    value={address || ""}
                    />  <br />888need user info from db <br /><br />
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
                <Form.Label>Suggested Price/gallon</Form.Label>
                <Form.Text 
                    type="float"
                    value={price || ""}
                    onChange={(f) => setPrice(f.currentTarget.value)}
                    /><br />888need user info from db <br /><br />
            </Form.Group>
            <QuoteFuel >
                Get the total amount
            </QuoteFuel>
            <br /><br />
            <Form.Group>
                <Form.Label>Total Amount Due:</Form.Label>
                <Form.Text 
                    type="float"
                    value={amount || ""}
                    /><br />888need user info from db <br /><br />
            </Form.Group>
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

export default Register;