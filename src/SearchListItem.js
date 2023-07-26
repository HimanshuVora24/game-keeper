import React from 'react';
import './css/SearchListItem.css'

function SearchListItem(props) {
    var addedToList = props.addedToList;
    var addToUserList = () => {
        var userInfo = JSON.parse(localStorage.getItem('user_list'));
        userInfo['list'].push(props.item.id);
        localStorage.setItem('user_list', JSON.stringify(userInfo));
        addedToList = true;
    }
    return(
        <div className="search_list_item">
            <img className="game_image" src={props.item.cover?.url}/>
            <div className="game_info">
                <div>{props.item.name}</div>
                {(props.curList && !props.addedToList) ? <button onClick={addToUserList} disabled={props.addedToList}>Add to list</button>:<></>}
            </div>
        </div>
    );
}

export default SearchListItem;