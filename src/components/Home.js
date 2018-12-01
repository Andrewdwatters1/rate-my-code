import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    if(!this.props.user.id) this.props.history.push('/login');
    return (
      <div>
        <div className="home-main">
          <a href="/#/submit"><button>SUBMIT CODE</button></a>
          <a href="/#/rate"><button>RATE CODE</button></a>
        </div>

        <div>
          <a href="/#/tribe"><button>TRIBE</button></a>
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

export default connect(mapStateToProps)(Home);
