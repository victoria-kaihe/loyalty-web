import React from 'react'
import {connect} from 'react-redux'

import {registerUser} from '../apiClient'
import ErrorMessage from './ErrorMessage'
import {set} from '../utils/localStorage'

class UserRegister extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewUser () {
    if (this.state.username && this.state.password && this.state.name) {
      registerUser({...this.state})
<<<<<<< HEAD
        .then(token => {
          set('token', token)
=======
        .then(res => {
          if (res.status === 200) {
            alert('New Member added into the database')
          } else {
            alert('Database error, try another username or password')
          }
        })
        .then(() => this.props.history.push('/adminlogin'))
        .catch(err => {
          alert(err.response.body.message)
>>>>>>> 177aa4d34c5aaf6528bbb3f3723c8c4c256a811c
        })
    }
  }

  render () {
    return (
      <section className="hero is-light is-fullheight userregister">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Register</h3>
              <p className="subtitle has-text-grey">as Member</p>
              <ErrorMessage />
              <div className="box">
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="text" name='name' placeholder="Your Fullname" autoFocus="" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="text" name='username' placeholder="Your Username" autoFocus="" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="password" name='password' placeholder="Your Password" onChange={this.handleChange}/>
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth" onClick={this.submitNewUser}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect()(UserRegister)
