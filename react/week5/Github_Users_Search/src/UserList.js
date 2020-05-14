import React from 'react';
import SearchContext from "./context";
import './index.css';
import UserRepo from "./UserRepo";
import { Link } from 'react-router-dom';

function UserList() {
    const { usersArray, isClickedUser, handleClickSearch } = React.useContext(SearchContext);
    console.log(usersArray);
    console.log(SearchContext);
    return (
        <div className='lists'>
            {isClickedUser ? <UserRepo /> :
                <div>
                    <ul>
                    {usersArray.map(user =>
                        <Link key={user.id} to={`profile/${user.login}`} className='github_userlist' onClick={e => handleClickSearch(e, user.login)}>
                            <div>{user.login}</div>
                            <img alt="avatar" style={{ width: '50px' }} src={user.avatar_url} />
                        </Link>)}
                    </ul>
                </div>}
        </div>
    )
}

export default UserList;
