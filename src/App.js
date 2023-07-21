import React, { useState } from 'react';
import SearchBar from './search'
import SearchList from './SearchList'
//import getGames from './Games'
import './css/App.css'
function App() {
  var [searchResults, setSearchResults] = useState([]);
  var userList = {
    list: []
  };
  var addToList = (id) => {
    userList.push(id);
  }
  return (
    <div>
      <div className='title_rectangle'/>
      <div className='user_view'>
        <div style={{flex: '0 0 20%'}}> 
          <div className='user_info'>
            <img src="https://i.pinimg.com/736x/6b/35/de/6b35de94aca6eef6643cf48da27d0558.jpg" style={{width: '100%'}}/>  
            <p style={{textAlign: 'center'}}>User: Hello</p>
            <div style={{textAlign: 'center', marginBottom:'15px'}}><button >See list</button></div>
          </div>
        </div>
        <div style={{flex: '1 0 auto', marginRight: '20px'}}>
          <SearchBar setSearchResults={setSearchResults} />
          <div className='search_list'>
            <SearchList searchResults={searchResults} userList={userList}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
