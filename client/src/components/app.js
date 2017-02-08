import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class App extends Component {


  renderLogout() {
    const handleClick = () => {
      this.props.logoutUser();
    }

    if (this.props.auth) {
      return(
        <div onClick={handleClick}>
          Logout
        </div>
      );
    }
  }

  render() {
      return (
      <div>
      <p>Header here</p>{this.renderLogout()}

      <div className="container">
        {this.props.children}
      </div>

      <p>Footer here</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated};
}

export default connect(mapStateToProps, { logoutUser })(App);
