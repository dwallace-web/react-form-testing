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
    console.log('sign up started');
    fetch('http://localhost:2000/user/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    }).then((res) => {
      res.json().then((result) => {
        console.warn('result', result);
        localStorage.setItem(
          'signup',
          JSON.stringify({
            login: true,
            token: result.token,
          })
        );
      });
    });
  }
  render() {
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
