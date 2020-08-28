import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import friendsList from '../src/FakeData/FakeData';
import Friends from './components/Friends/Friends';
import Salary from './components/Salary/Salary';

function App() {
  // Store data in State
  const [friends, setFriends] = useState(friendsList);
  const [salaray, setSalary] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      {
        friends.map(friend => <Friends key={friend.id} friend={friend} ></Friends>)
      }
      <Salary></Salary>
    </div>
  );
}

export default App;
