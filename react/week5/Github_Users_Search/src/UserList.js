import React from 'react';
import SearchContext from "./context";
import './index.css';
import { Link } from 'react-router-dom';

function UserList() {
    const { usersArray, handleClickSearch } = React.useContext(SearchContext);
    return (
        <div className='lists'>
                    <ul>
                    {usersArray.map(user =>
                        <Link key={user.id} to={`profile/${user.login}`} onClick={e => handleClickSearch(e, user.login)} className='github_userlist'>
                            <div>{user.login}</div>
                            <img alt="avatar" style={{ width: '70px' }} src={user.avatar_url} />
                        </Link>)}
                    </ul>
        </div>
    )
}

export default UserList;
