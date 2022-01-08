import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import React, { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const addUser = (uName, uAge) => {
    
    setUserDetails((prevUserList) => {
      return [...prevUserList, {name:uName, age:uAge, id:Math.random().toString()}];
    });
    console.log(userDetails, {name:uName, age:uAge});
  }

  return (
    <div className="App">
      <AddUser click={addUser}></AddUser>
      <UserList users={userDetails}></UserList>
    </div>
  );
}

export default App;
