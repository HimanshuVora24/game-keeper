import React from 'react';
import './css/SearchListItem.css'

function SearchListItem(props) {
    return(
        <div className="search_list_item">
            <img className="game_image" src={props.item.cover?.url}/>
            <div className="game_info">
                <div>{props.item.name}</div>
                <button>Add to list</button>
            </div>
        </div>
    );
}

export default SearchListItem;