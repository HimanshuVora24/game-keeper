import React, { useState } from 'react';
import SearchBar from './search'
import SearchList from './SearchList'
import UserList from './UserList'
import axios from 'axios';
//import getGames from './Games'
import './css/App.css'
function App() {
  var [searchResults, setSearchResults] = useState([]);
  var [curList, setCurList] = useState(1);
  var [userList, setUserList] = useState([]);

  var getUserList = () => {
    let userIDs = (JSON.parse(localStorage.getItem("user_list"))).list; 
    if (userIDs.length != 0) {
        axios.request({
            method: 'post',
            url: process.env.REACT_APP_API_GATEWAY + '/games',
            headers: { 
                'Client-ID': process.env.REACT_APP_CLIENT_ID, 
                'Authorization': 'Bearer ' + process.env.REACT_APP_CLIENT_TOKEN,
                'Content-Type': 'text/plain'
            },
            data : 'fields name, url, cover.*; where id=(' + userIDs.join(",") + '); limit' + userIDs.length + '; '
        }).then((response) => {
            console.log(response.data);
            setUserList(response.data);
        }).catch((error) => {
            console.log(error);
            setUserList([]);
        });
    }
  }

  return (
    <div>
      <div className='title_rectangle'/>
      <div className='user_view'>
        <div style={{flex: '0 0 20%'}}> 
          <div className='user_info'>
            <img src="https://i.pinimg.com/736x/6b/35/de/6b35de94aca6eef6643cf48da27d0558.jpg" style={{width: '100%'}}/>  
            <p style={{textAlign: 'center'}}>User: Hello</p>
            <div style={{textAlign: 'center', marginBottom:'15px'}}><button onClick={() => {setCurList(0); getUserList()}}>See list</button></div>
          </div>
        </div>
        <div style={{flex: '1 0 auto', marginRight: '20px'}}>
          <SearchBar setSearchResults={setSearchResults} setCurList={setCurList}/>
          <div className='search_list'>
            {curList ? <SearchList searchResults={searchResults}/> : <UserList userList={userList}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
