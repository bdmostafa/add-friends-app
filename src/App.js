import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import friendsList from '../src/FakeData/FakeData';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  // Store data in State
  const [friends, setFriends] = useState(friendsList);

  return (
    <div className="App container">
      <Header></Header>
      <Main friends={friends}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
