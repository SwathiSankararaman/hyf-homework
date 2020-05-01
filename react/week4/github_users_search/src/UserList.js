import React from 'react';
import searchContext from "./context";
import './index.css';

function UserList() {
    const { usersArray } = React.useContext(searchContext);
    return (
        <div className='lists'>
            {usersArray.map((user, index) =>
                <li key= {index} className='list'>{user}</li>)}
        </div>
    )
}

export default UserList;