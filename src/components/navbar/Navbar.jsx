import React from 'react'
import classes from './navbar.module.css'
import {AiOutlineLogout, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import profileUserImg from '../../assets/woman.jpg'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h3>Twitch!</h3>
        </div>
        <div className={classes.center}>
          <input type="text" placeholder='Search user...'/>
          <AiOutlineSearch className={classes.searchIcon}/>
        </div>
        <div className={classes.right}>
          <div className={classes.icons}>
            <AiOutlineUser />
            <AiOutlineLogout />
          </div>
          <img src={profileUserImg} className={classes.profileUserImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Navbar