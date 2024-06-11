import React from 'react'

export interface User {
  username: string
  useremail: any
  userphoto: any
}

export interface ListUsers {
  allUsers: Array<User>
}

export interface Users {
  currentUser: User
  allUsers: Array<User>
}

export interface NewUser {
  userComposite: Users
  onSubmitHandler: React.FormEventHandler
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}
