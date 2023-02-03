import { React, useState } from 'react';
import { HashRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBoostrap from './components/NavBoostrap';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
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
            <HomePage />
        <Footer />
      </Router>
    </Root>
  );
}

export default App;
