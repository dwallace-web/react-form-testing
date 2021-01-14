import React, { Component } from 'react';

export class SignUp extends Component {
  //this will be a class component

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      username: null,
      phonenumber: null,
      restauraurantowner: null,
    };
  }

  async Register() {
    try {
      const input = this.state;
      fetch('http://localhost:2000/user/signup', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Register in react class components</h1>
        <div>
          {/* <form onSubmit={() => this.Register()}> */}
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={(data) => {
              this.setState({ email: data.target.value });
            }}
          />
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={(data) => {
              this.setState({ username: data.target.value });
            }}
          />
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={(data) => {
              this.setState({ password: data.target.value });
            }}
          />
          <button
            onClick={() => {
              this.Register();
            }}
          >
            {' '}
            Submit Data{' '}
          </button>
          {/*             <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            /> */}
          {/*             <div
              className="radio-buttons"
              onChange={this.state.restaurantowner}
            >
              <input type="radio" value="true" name="restaurantowner" />
              <input type="radio" value="false" name="restaurantowner" />
            </div> */}
          {/* <button type="submit">Sign Up</button> */}
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default SignUp;
