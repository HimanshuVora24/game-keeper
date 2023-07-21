import React, { useEffect, useState } from 'react'
import axios from 'axios';
function SearchBar(props) {
    var [enableSearch, setEnableSearch] = useState(false);
    var [searchInput, setSearchInput] = useState("");
    
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    } 

    useEffect(() => {
        if (!searchInput || searchInput.length == 0) {
            setEnableSearch(false);
        } else {
            setEnableSearch(true);
        }
    }, [searchInput]);

    var search = () => {
        axios.request({
            method: 'post',
            url: process.env.REACT_APP_API_GATEWAY + '/games',
            headers: { 
                'Client-ID': process.env.REACT_APP_CLIENT_ID, 
                'Authorization': 'Bearer ' + process.env.REACT_APP_CLIENT_TOKEN,
                'Content-Type': 'text/plain'
            },
            data : 'fields name, url, cover.*; search "' + searchInput + '"; limit 25; '
        }).then((response) => {
            console.log(response.data);
            props.setSearchResults(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    return(
        <div style={{display:'flex', flexDirection:'row', marginTop:'10px', marginBottom:'10px'}}>
            <input type="text" value={searchInput} onChange={handleSearchChange} />
            <button onClick={search} disabled={!enableSearch}>Go</button>
        </div>
    );
}

export default SearchBar; 