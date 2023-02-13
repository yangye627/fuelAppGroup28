import { React, useState } from 'react';
import { HashRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBoostrap from './components/NavBoostrap';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserInfoPage from './pages/UserInfoPage'
import FuelQuotePage from './pages/FuelQuotePage'
import FuelHistory from './pages/HistoryPage';
import Footer from './components/Footer';
import styled from 'styled-components';

const Root = styled.section`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function App() {
  return (
    <Root>
      <Router>
        <NavBoostrap />
        <FuelHistory/>
        {/* <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/userinfo" element={<UserInfoPage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/register" element={<RegisterPage/>} />
            <Route exact path="/fuelQuotePage" element={<FuelQuotePage/>} />
          </Routes> */}
        <Footer />
      </Router>
    </Root>
  );
}

export default App;


{/* <Route path="/userinfo">
<UserInfoPage />
</Route>
<Route path="/register">
{user ? <HomePage /> : <RegisterPage />}
<RegisterPage />
</Route>
<Route path='/Login'>
<LoginPage />
<div className="App">
<ProtectedRoute path='/Login' exact strict component = {Home}/>
</div>
</Route> */}