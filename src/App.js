import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import friendsList from '../src/FakeData/FakeData';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  // Store data in State
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch friends data
    async function getFriendList() {
      const data = await fetch('https://randomuser.me/api/?results=15')
      const res = await data.json();
      setFriends(res.results);
    }
    getFriendList();
  }, [])

  return (
    <div className="App container">
      <Header></Header>
      <Main friends={friends}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
