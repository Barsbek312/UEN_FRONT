import React, { Component } from 'react'

export default class LoginComp extends Component {
  render() {
    return (
      <div className='white-bg'>
        <div className="login">
          <h1>Log in</h1>
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
            />
            <button type="submit">Log in</button>
          </form>
          <p>Don't have an account yet? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    )
  }
}
