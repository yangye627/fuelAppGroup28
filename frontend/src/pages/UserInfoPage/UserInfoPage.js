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
  const [city, setCity]         = useState('');
  const [state, setState]       = useState('');
  const [zipcode, setZipcode]   = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            const response = await fetch("/userInfo")
            const fetchedUser = await response.json()
            if (typeof fetchedUser.user.fullName !== "undefined"){
                setFullName(fetchedUser.user.fullName);
                setAddress1(fetchedUser.user.address1);
                setAddress2(fetchedUser.user.address2);
                setCity    (fetchedUser.user.city);
                setState   (fetchedUser.user.state);
                setZipcode (fetchedUser.user.zipcode);
                return;
            }
        }

        const interval = setInterval(function(){
            fetchUserInfo();
            clearInterval(interval);
            return
        }, 2000)
    }, [])

  return (
    <Root>
      <Title>Profile</Title>
        <Form>
            <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z]+"
                    type="text"
                    placeholder={fullName}
                    value={fullName || ""}
                    onChange={(f) => setFullName(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address 1</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z0-9]+"
                    type="text"
                    placeholder={address1}
                    value={address1 || ""}
                    onChange={(f) => setAddress1(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address 2 (optional)</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z0-9]+"
                    type="text"
                    placeholder={address2}
                    value={address2 || ""}
                    onChange={(f) => setAddress2(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z]+"
                    type="text"
                    placeholder={city}
                    value={city || ""}
                    onChange={(f) => setCity(f.currentTarget.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>State</Form.Label>
                    <select id="inputState" className="form-control" placeholder={state} value={state || ""} onChange={(f) => setState(f.currentTarget.value)}>
                        <option selected>Choose...</option>
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>DC</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>IA</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>ME</option>
                        <option>MD</option>
                        <option>MA</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MS</option>
                        <option>MO</option>
                        <option>MT</option>
                        <option>NE</option>
                        <option>NV</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NY</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>PR</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VT</option>
                        <option>VA</option>
                        <option>VI</option>
                        <option>WA</option>
                        <option>WV</option>
                        <option>WI</option>
                        <option>WY</option> 
                        
                    </select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control 
                    required pattern="[A-Za-z0-9]+"
                    type="text"
                    placeholder={zipcode}
                    value={zipcode || ""}
                    onChange={(f) => setZipcode(f.currentTarget.value)}
                    />
            </Form.Group>
        </Form>
        <UpdateProfile
            onClick={async () => {
                const userinfo = { fullName, address1, address2, city, state, zipcode };
                const response = await fetch("/profile", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userinfo)
                });
                console.log(response);
                if (response.ok) {
                    console.log("profile works!!!!!!!!!!!!!!!!!");
                    // setFullName("");
                    // setAddress1("");
                    // setAddress2("");
                    // setCity("");
                    // setState("");
                    // setZipcode("");
                    // window.location.href = '/#/profile';
                }
                else {
                    alert("incorrct profile return");
                }
            }
        }
        >
            Update My Profile
        </UpdateProfile>
    </Root>
  );
};

export default Register;
