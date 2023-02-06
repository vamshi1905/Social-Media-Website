import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            A simple website similar to a social-media platform.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +74169 44991</span>
          <span>Linkedin: Vamshi Krishna Akula</span>
          <span>GitHub: vamshi1905</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer