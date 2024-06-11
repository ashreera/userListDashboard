import React from 'react'
import { ListUsers } from '../../App.types'

import listUsersStyles from '../listUsers/ListUsers.module.css'

const AllUsers: React.FC<ListUsers> = ({ allUsers}) => {
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
