import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      username: null,
      password: null,
      restaurantowner: true,
      login: false,
      store: null,
    };
  }

  signup() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify(this.state);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:2000/user/signup', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }

  render() {
    // const { email, username, password } = this.state
    return (
      <div>
        <h1>JWT Token in react</h1>
        <div>
          <form>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            {/*             <div
              className="radio-buttons"
              onChange={this.state.restaurantowner}
            >
              <input type="radio" value="true" name="restaurantowner" />
              <input type="radio" value="false" name="restaurantowner" />
            </div> */}
            <button
              onClick={() => {
                this.signup();
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
