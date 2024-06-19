import {FC,useState} from 'react'
import axios from "axios";
import { ListUsers } from '../../App.types'
import listUsersStyles from '../listUsers/ListUsers.module.css'
import { useQuery } from "@tanstack/react-query";


const AllUsers: FC<ListUsers> = ({ allUsers }) => {

  const [users, setUsers] = useState<[]>([]);

  // fetching userdata from the api using useQuery
    const fetchUserData = (): Promise<[]> =>
      fetch("https://randomuser.me/api/?results=10")
        .then((response: any) => response.data)
        .then((data: any) => data.results)

        const getUsers = (): void => {
          fetchUserData().then((data: []) => setUsers(data));
        }
        // data is inferred from fetch const, error is unknown
    const { data: inferredData, error: errorUnknown } = useQuery({ queryKey: ["listuser"], queryFn: fetchUserData });
    
    // specify the error and data type as type param
    const { data: typedData, error: typedError } = useQuery<[], Error>({ queryKey: ["listuser"], queryFn: fetchUserData });
    // runtime check errorUnknown is an error
    if (errorUnknown instanceof Error) {
      return <p>Woops! something went wrong</p>
    }
  
    // trusting the type matches return value
    if (typedError) {
      return <p>{typedError.message}</p>
    }
  
    return (
    
    <>
       <div className={listUsersStyles.listcontainer}>
        <h2>List of Users</h2>
        <div className={listUsersStyles.user}>
          <h4>User full name</h4>
          <h4>Email</h4>
          <h4>Photo</h4>
        </div>


        {allUsers &&
          allUsers.map((user, idx) => (
            <div key={idx} className={listUsersStyles.user}>
              <div>{user.username}</div>
              <div>{user.useremail}</div>
              <img src={user.userphoto}  width="100" height="50"/>
             </div>
          ))}

          {users && users.map((user: any, index: number) => (
            <div key={index} className={listUsersStyles.user}>
              <div>{user.name.title} {user.name.first} {user.name.last}</div>
              <div>{user.email}</div>
              <div><img src={user.picture.thumbnail}/></div>
             </div>
          ))}
      </div>

      <button onClick={getUsers} className={listUsersStyles.btn}>Load User</button>

    </>
  )
}

export default AllUsers
