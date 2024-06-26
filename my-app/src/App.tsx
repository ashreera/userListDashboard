import React,{useState} from 'react';
import './App.css';
import {  Users } from './App.types'
import ListUsers from './components/listUsers/ListUsers'
import NeoUser from './components/newUser/newUser'
import {QueryClient ,QueryClientProvider } from "@tanstack/react-query";
// import SearchInput from './components/listUsers/searchUser';

const App: React.FC = () => {
  const [userComposite, setUserComposite] = useState<Users>({
    currentUser: {
      username: '',
      useremail: '',
      userphoto: '',
    },
    allUsers: [],
  })
  const queryClient =  new QueryClient();

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target

    setUserComposite({
      ...userComposite,
      currentUser: {
        ...userComposite.currentUser,
        [name]: value,
      },
    })
  }

  const onSubmitHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault()

    setUserComposite({
      currentUser: {
        username: '',
        useremail: "",
        userphoto: '',
      },
      allUsers: [...userComposite.allUsers,userComposite.currentUser],
    })
  }


  return (
    <div className='App'>
      <h1 aria-labelledby='heading'>Simple UserList Project</h1>

      <NeoUser
        userComposite={userComposite}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
      <QueryClientProvider client={queryClient}>

      <ListUsers
        allUsers={userComposite.allUsers}
      />
      </QueryClientProvider>
    </div>
  )
}

export default App
