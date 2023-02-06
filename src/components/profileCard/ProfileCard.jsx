import React from 'react'
import classes from './profileCard.module.css'
import profileUserImg from '../../assets/woman.jpg'

const profileCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
        <div className={classes.imgContainer}>
          <img src={profileUserImg} className={classes.profileUserImg} alt=""/>
        </div>
        <div className={classes.usernameAndCreatedAt}>
          <p><span>Username:</span> lema_524</p>
          <p><span>Created At:</span> 18th of January 2023</p>
        </div>
        </div>
        <hr />
        <div className={classes.bottom}>
          <p>Followers: <span>625</span></p>
          <p>Following: <span>259</span></p>
        </div>
      </div>
      <h3 className={classes.myProfile}>My Profile</h3>
    </div>
  )
}

export default profileCard