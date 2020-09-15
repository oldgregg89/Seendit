import React from 'react';
import Header from './Header'
import PostControl from './PostControl';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Container style={{backgroundColor: 'grey', marginTop: '150px'}}>
        <Header />
        <PostControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
