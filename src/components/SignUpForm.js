import React, { Component } from 'react'

export default class SignUpForm extends Component {
    render() {
        return (
            <div className='white-bg'>
                <div className="sign-up">
                    <h1>Sign Up</h1>
                    <form className="sign-up-form">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                        />

                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            required
                        />

                        <label htmlFor="middle_name">Middle Name</label>
                        <input
                            id="middle_name"
                            name="middle_name"
                            type="text"
                            required
                        />

                        <label htmlFor="birthday">Birth Date</label>
                        <input
                            id="birthday"
                            name="birthday"
                            type="date"
                            required
                        />

                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                        />

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

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                        />
                        <div className="terms-checkbox">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                            />
                            <label htmlFor="terms">
                                I agree to the <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.
                            </label>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        )
    }
}
