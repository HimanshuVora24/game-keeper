import React, {useState, useEffect} from 'react';
import SearchListItem from './SearchListItem'

function UserList(props) {
    var userlist_map = props.userList.map((item) => <SearchListItem key={item.id} item={item} curList={0}/>);
    return (<div>{userlist_map}</div>);
}

export default UserList;