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

const UpdateProfile = styled.button`
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
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
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
      <Title>Profile</Title>
        <Form>
            <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z]+"
                    type="text"
                    value={fullName || ""}
                    onChange={(f) => setFullName(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address 1</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z0-9]+"
                    type="text"
                    value={address1 || ""}
                    onChange={(f) => setAddress1(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address 2 (optional)</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z0-9]+"
                    type="text"
                    value={address2 || ""}
                    onChange={(f) => setAddress2(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z]+"
                    type="text"
                    value={city || ""}
                    onChange={(f) => setCity(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z]+"
                    type="text"
                    value={state  || ""}
                    onChange={(f) => setState(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z0-9]+"
                    type="text"
                    value={zipcode || ""}
                    onChange={(f) => setZipcode(f.currentTarget.value)}
                    />
            </Form.Group>
        </Form>
        <UpdateProfile
            className="reserveSubmit"
            type = "submit"
            variant = "primary"
            size = "lg"
        >
            Update My Profile
        </UpdateProfile>
    </Root>
  );
};

export default Register;