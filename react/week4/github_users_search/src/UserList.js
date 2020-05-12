import React from 'react';
import searchContext from "./context";
import './index.css';
import UserRepo from "./UserRepo";

function UserList() {
    const { usersArray, isClickedUser, handleClickSearch} = React.useContext(searchContext);

    return (
        <div className='lists'>
            {isClickedUser ? <UserRepo /> :
                <div>
        <ul>
                    {usersArray.map(user =>
                        <li key={user.id} className='github_userlist'>
                            <a href={user.login} onClick={(event) => handleClickSearch(event, user.login)}>{user.login}
                                <img alt="avatar" style={{ width: '50px' }} src={user.avatar_url} /></a>
                        </li>)}
       </ul>
                </div>}
        </div>
    )
}

export default UserList;
