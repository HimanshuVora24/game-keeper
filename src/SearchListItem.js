import React, { useState } from 'react';
import './css/SearchListItem.css'

function SearchListItem(props) {
    var [addedToList, setAddedToList] = useState(props.addedToList)
    var addToUserList = () => {
        var userInfo = JSON.parse(localStorage.getItem('user_list'));
        userInfo['list'].push(props.item.id);
        localStorage.setItem('user_list', JSON.stringify(userInfo));
        setAddedToList(true);
    }
    return(
        <div className="search_list_item">
            <img className="game_image" src={props.item.cover?.url}/>
            <div className="game_info">
                <div>{props.item.name}</div>
                {(props.curList && !addedToList) ? <button onClick={addToUserList}>Add to list</button>:<></>}
            </div>
        </div>
    );
}

export default SearchListItem;