import React from 'react'
import classes from './post.module.css'
import profileUserImg from '../../assets/woman.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'
import man from '../../assets/man.jpg'


const Post = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.top}>
              <div className={classes.topLeft}>
              <img src={profileUserImg} className={classes.profileUserImg} alt=""/>
                <div className={classes.profileMetadata}>
                    <span>lema_524</span>
                    <span>3 hours ago</span>
                </div>
              </div>
            <HiOutlineDotsVertical size={25}/>
            </div>
            <div className={classes.center}>
                <div className={classes.desc}>My first post!</div>
                <img src={profileUserImg} className={classes.postImg} alt=""/>
            </div>
            <div className={classes.controls}>
                <div className={classes.controlsLeft}>
                    <AiOutlineHeart />
                    <BiMessageRounded />
                </div>
                <div className={classes.controlsRight}>
                    <BsBookmark />
                </div>
            </div>
            <div className={classes.comments}>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={profileUserImg} className={classes.commentImg} alt=""/>
                      <div className={classes.commentData}>
                        <span>Ella</span>
                        <span className={classes.commentTimeago}>1 hour ago</span>
                      </div>
                      {/* vamshi krishna akula @ !convertTime commentImg commentData profileUserImg commentTimeago commentRight commentText */}
                      <div className={classes.commentText}>Nice post Lema!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>7 likes</span>
                    </div>
                </div>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={man} className={classes.commentImg} alt=""/>
                      <div className={classes.commentData}>
                        <span>Harry</span>
                        <span className={classes.commentTimeago}>2 hours ago</span>
                      </div>
                      <div className={classes.commentText}>Looking good Lema</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>5 likes</span>
                    </div>
                </div>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={profileUserImg} className={classes.commentImg} alt=""/>
                      <div className={classes.commentData}>
                        <span>Amelia</span>
                        <span className={classes.commentTimeago}>2 hours ago</span>
                      </div>
                      <div className={classes.commentText}>Looking great!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>8 likes</span>
                    </div>
                </div>
            </div>
            <div className={classes.postCommentSection}>
                <input type="text" className={classes.inputSection} placeholder='Type your comment here...'/>
                <button>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Post