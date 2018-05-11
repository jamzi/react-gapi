/* global gapi */
import React, { Component } from "react";

class Home extends Component {
  state = {
    isLoggedIn: false
  };

  componentWillMount() {
    const auth2 = gapi.auth2.getAuthInstance();
    const getLoginState = () => auth2.isSignedIn.get();
    this.setState({ isLoggedIn: getLoginState() });

    auth2.isSignedIn.listen(() => {
      this.setState({ isLoggedIn: getLoginState() });
    });
  }

  handleLoginClick = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(user => {
      const profile = user.getBasicProfile();
      console.log("Name: " + profile.getName());
    });
  };

  handleLogoutClick = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    let content;
    if (isLoggedIn) {
      content = (
        <div>
          <h3>Hello</h3>
          <button onClick={this.handleLogoutClick}>Logout</button>
        </div>
      );
    } else {
      content = (
        <div>
          <h3>Login with Google</h3>
          <button onClick={this.handleLoginClick}>Log in with Google</button>
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

export default Home;
