import React from 'react';
 import searchContext from "./context";
 import './index.css';
 import { Link } from 'react-router-dom';


 function UserRepo() {
     const { reposArray, loginName, handleClickRepos, isClickedRepos } = React.useContext(searchContext);

     return (
         <div>
             {isClickedRepos ? <h3>Cannot fetch more details</h3> :
                 <div>
                     <h3>Repositories of {loginName}</h3>
                     {reposArray.map((user, index) =>
                         <li key={index} className='github_repolist'>
                             <strong><label>Name of the repository:</label></strong><a href={user} onClick={(event) => handleClickRepos(event)}>{user.name}<br />
                                 <strong><label>Description:</label></strong><span>{user.description}</span><br />
                                 <strong><label>Created date:</label></strong><span>{user.created_at}</span><br />
                                 <strong><label>Open issues:</label></strong><span>{user.open_issues}</span><br />
                             </a><br /></li>)}
                     <Link to={'/'}>Home</Link>
                 </div>}
         </div>
     )
 }

 export default UserRepo;
