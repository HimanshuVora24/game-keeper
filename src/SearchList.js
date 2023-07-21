import React from 'react';
import SearchListItem from './SearchListItem'
function SearchList(props) {
    var search_map = props.searchResults.map((item) => 
        <SearchListItem key={item.id} item={item}/>
    ); 
    return (<div>{search_map}</div>);
}

export default SearchList;