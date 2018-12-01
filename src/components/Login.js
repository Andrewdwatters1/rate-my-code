import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setUser } from '../redux/reducers/user';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  loginUser = (e) => {
    const inputs = [...document.querySelectorAll('input')]
    if (inputs.every(e => e.validity.valid)) {
      e.preventDefault();
      const { username, password } = this.state;

      axios.post('/api/login', { username, password })
        .then(response => {
          const { data } = response;
          this.props.setUser(data)
        })
        .catch(error => console.log(error));
    }
  }

  componentDidUpdate() {
    if (this.props.user.id) this.props.history.push('/');
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form id="main">

          <div>
            <label for="username">USERNAME</label>
            <input
              form="main"
              name="username"
              type="text"
              pattern="^[!-~]{6,20}$"
              title="Username must be 6-20 characters"
              placeholder="USERNAME"
              value={this.state.username}
              onChange={this.handleChange} />
          </div>

          <div>
            <label for="password">PASSWORD</label>
            <input
              form="main"
              name="password"
              type="password"
              pattern="^[!-~]{6,20}$"
              title="Password must be 6-20 characters"
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.handleChange} />
          </div>
        </form>

        <div>
          <button
            type="submit"
            form="main"
            onClick={this.loginUser}>
            LOGIN/REGISTER
          </button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { setUser })(Login);