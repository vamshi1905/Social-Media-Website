import React from 'react'
import classes from './suggestedUsers.module.css'
import profileUserImg from '../../assets/woman.jpg'
import man from '../../assets/man.jpg'

const SuggestedUsers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.myProfile}>
          <img src={profileUserImg} className={classes.profileUserImg} alt=""/>
          <div className={classes.profileData}>
            <span>lema_524</span>
            <span className={classes.shortBio}>Life is full of adventures</span>
          </div>
        </div>
        <div className={classes.suggestedUsers}>
          <h3 className={classes.title}>Recommended Users to follow</h3>
          <div className={classes.suggestedUser}>
            <img src={man} className={classes.imgUser} alt=""/>
            <div className={classes.suggestedUserData}>
              <span>John</span>
              <span className={classes.suggestedMsg}>Suggested to you</span>
            </div>
            <button className={classes.followBtn}>Follow</button>
          </div>
          <div className={classes.suggestedUser}>
            <img src={man} className={classes.imgUser} alt=""/>
            <div className={classes.suggestedUserData}>
              <span>Henry</span>
              <span className={classes.suggestedMsg}>Suggested to you</span>
            </div>
            <button className={classes.followBtn}>Follow</button>
          </div>
          <div className={classes.suggestedUser}>
            <img src={profileUserImg} className={classes.imgUser} alt=""/>
            <div className={classes.suggestedUserData}>
              <span>Laura</span>
              <span className={classes.suggestedMsg}>Suggested to you</span>
            </div>
            <button className={classes.followBtn}>Follow</button>
          </div>
          <div className={classes.suggestedUser}>
            <img src={profileUserImg} className={classes.imgUser} alt=""/>
            <div className={classes.suggestedUserData}>
              <span>Christina</span>
              <span className={classes.suggestedMsg}>Suggested to you</span>
            </div>
            <button className={classes.followBtn}>Follow</button>
          </div>
          <div className={classes.suggestedUser}>
            <img src={profileUserImg} className={classes.imgUser} alt=""/>
            <div className={classes.suggestedUserData}>
              <span>Alice</span>
              <span className={classes.suggestedMsg}>Suggested to you</span>
            </div>
            <button className={classes.followBtn}>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestedUsers
