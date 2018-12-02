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
      <div style={{ height: '85px', backgroundColor: '#FFF', width: '100vw', textAlign: 'center', color: 'red', margin: '-20px auto 0 auto' }}>
        <h1>RATE MY CODE </h1>
        <a href="/#/"><button style={{ margin: '-20px auto 10px auto' }}>HOME</button></a>
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