import React from 'react';
import SearchListItem from './SearchListItem'
function SearchList(props) {
    let userIDs = (JSON.parse(localStorage.getItem("user_list"))).list;

    var search_map = props.searchResults.map((item) => 
        <SearchListItem key={item.id} item={item} curList={1} addedToList={userIDs.includes(item.id)}/>
    ); 
    return (<div>{search_map}</div>);
}

export default SearchList;