import React from 'react'
import { NewUser } from '../../App.types'
import newUserStyles from '../newUser/newUser.module.css'

const NeoUser: React.FC<NewUser> = ({
  userComposite,
  onSubmitHandler,
  onChangeHandler,
}) => {
  const isNewUserBtnDisabled = () => {
    if (
      userComposite.currentUser &&
      userComposite.currentUser.username &&
      userComposite.currentUser.userphoto &&
      userComposite.currentUser.useremail
    ) {
      return false
    }

    return true
  }

  return (
    <form onSubmit={onSubmitHandler} className={newUserStyles.form}>
      <div className={newUserStyles.inputgroup}>
        <label htmlFor='username'>Name:</label>
        <input
          required
          type='text'
          name='username'
          id='username'
          value={userComposite.currentUser.username}
          onChange={onChangeHandler}
        />
      </div>

      <div className={newUserStyles.inputgroup}>
        <label htmlFor='age'>Email:</label>
        <input
          required
          type='email'
          id='email'
          name='useremail'
          value={userComposite.currentUser.useremail}
          onChange={onChangeHandler}
        />
      </div>

      <div className={newUserStyles.inputgroup}>
        <label htmlFor='userphoto'>Photo:</label>
        <input
          required
          type='file'
          name='userphoto'
          id='photo'
          accept="image/*"
          value={userComposite.currentUser.userphoto}
          onChange={onChangeHandler}

       />
         
      </div>

      <button
        type='submit'
        name ="adduser"
        className={newUserStyles.btn}
        disabled={isNewUserBtnDisabled()}
      >
        Add User
      </button>
    </form>
  )
}

export default NeoUser
