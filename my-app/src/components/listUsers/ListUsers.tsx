import React from 'react'
import { ListUsers } from '../../App.types'

import listUsersStyles from './ListUsers.module.css'

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
              <h4>{user.age}</h4>
              <h4>{user.profession}</h4>

              <button
                onClick={() => deleteHandler(idx)}
                className={listUsersStyles.btn}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  )
}

export default AllUsers
