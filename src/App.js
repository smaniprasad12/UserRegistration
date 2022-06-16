import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Row, Col } from 'react-bootstrap';
import Menu from "./components/Menu";
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Row>
     <Col> <LeftSide /> </Col>
     <Col> <RightSide /> </Col>
     </Row>
    </div>
  );
}

export default App;
