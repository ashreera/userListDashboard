import React from 'react'
import { ListUsers } from '../../App.types'
import listUsersStyles from '../listUsers/ListUsers.module.css'
// import { useQuery } from '@tanstack/react-query';


const AllUsers: React.FC<ListUsers> = ({ allUsers}) => {

  // fetching userdata from the api using useQuery
  
//   const fetchUserData = async () => {
//     const response = await fetch('https://randomuser.me/api/');
//     if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//     }
//     return response.json();
// };

//     let { allListUsers, isLoading, error } = useQuery(listUsers, fetchUserData);

//     {isLoading = true} <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
    
//     // Render user dashboard using data

  return (
    
    <>
      <div className={listUsersStyles.listcontainer}>
        <h2>List of Users</h2>
        <div className={listUsersStyles.user}>
          <h4>User Fullname</h4>
          <h4>Email</h4>
          <h4>Photo</h4>
        </div>

        <hr />

        {allUsers &&
          allUsers.map((user, idx) => (
            <div key={idx} className={listUsersStyles.user}>
              <h4>{user.username}</h4>
              <h4>{user.useremail}</h4>
              <h4>{user.userphoto}</h4>

             </div>
          ))}
      </div>
    </>
  )
}

export default AllUsers
