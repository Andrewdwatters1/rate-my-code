import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div style={{ height: '150px', backgroundColor: '#FFF', width: '100vw', textAlign: 'center', color: 'red' }}>
        <h1>RATE MY CODE </h1>
        <a href="/#/"><button>HOME</button></a>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Header);