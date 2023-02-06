import React from 'react'
import classes from './rightside.module.css'
import man from '../../assets/man.jpg'
import woman from '../../assets/woman.jpg'


const Rightside = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            {/* userImage Info number onlineDot .@Vamshi Krishna Akula */}
                <div className={classes.user}>``
                    <img src={man} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Harry</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={woman} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Ella</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={woman} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Addison</span>
                        {/* .onlineDot userData #profileUserImg */}
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={woman} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Amelia</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={man} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Brook</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                        <img src={man} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>James</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={woman} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Mable</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={man} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Jack</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={woman} className={classes.profileUserImg} alt=""/>
                    <div className={classes.userData}>
                        <span>Scarlette</span>
                        <div className={classes.onlineDot} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightside