import React, {useEffect} from 'react';
import SearchContext from "./context";
 import './index.css';
 import { Link } from 'react-router-dom';


 function UserRepo() {
     const {reposArray, loginName, fetchUserRepos } = React.useContext(SearchContext);

     useEffect(() => {
         fetchUserRepos(loginName)
     }, []);
     return (
                 <div>
             <h3>Repositories of {loginName}</h3>
             <Link to={'/'}>Home</Link>            
             {reposArray.map((user, index) =>
                 <li key={index} className='github_repolist'>
                             <strong><label>Name of the repository:</label></strong>{user.name}<br />
                                 <strong><label>Description:</label></strong><span>{user.description}</span><br />
                                 <strong><label>Created date:</label></strong><span>{user.created_at}</span><br />
                                 <strong><label>Open issues:</label></strong><span>{user.open_issues}</span><br />
                        <br /></li>)}
                 </div>
     )
 }

 export default UserRepo;
