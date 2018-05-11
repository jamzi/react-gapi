/* global gapi */
import React, { Component } from "react";
import Home from "../Home/Home";

const config = {
  clientId: "",
  scope: "profile"
};

class App extends Component {
  state = {
    gapiLoaded: false
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      const initClient = () => {
        gapi.client.init(config).then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.isSignedIn.listen(this.handleSigninStatusChange);

          const currentUser = auth2.currentUser.get();
          const authResponse = currentUser.getAuthResponse(true);
          if (authResponse && currentUser) {
            // save access token
          }
          this.setState({
            gapiLoaded: true
          });
        });
      };
      gapi.load("client:auth2", initClient);
    };

    document.body.appendChild(script);
  }

  handleSigninStatusChange = isSignedIn => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (isSignedIn) {
      const currentUser = auth2.currentUser.get();
      const authResponse = currentUser.getAuthResponse(true);
      if (authResponse) {
        // save access token
      }
    }
  };

  render() {
    const { gapiLoaded } = this.state;

    return gapiLoaded && config.clientId ? (
      <div>
        <Home />
      </div>
    ) : (
      <div>Please provide clientId in the config</div>
    );
  }
}

export default App;
