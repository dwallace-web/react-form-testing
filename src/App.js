import React, { Component } from 'react';
import SignUp from './components/SignUp';
import Register from './components/Register';

export class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: null,
  //     username: null,
  //     password: null,
  //     restaurantowner: true,
  //     login: false,
  //     store: null,
  //   };
  // }

  // async signup() {
  //   const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');

  //   const data = {
  //     email: this.state.email,
  //     usernmae: this.state.username,
  //     password: this.state.password,
  //     restaurantowner: this.state.restaurantowner,
  //   };

  //   // const raw = JSON.stringify(data);

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //     // redirect: 'follow',
  //   };

  //   await fetch('http://localhost:2000/user/signup', requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => console.log('error', error));
  // }

  // signup() {
  //   // const myHeaders = new Headers();
  //   // myHeaders.append('Content-Type', 'application/json');

  //   // const raw = JSON.stringify(this.state);

  //   fetch('http://localhost:2000/user/test', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // body: raw,
  //     // redirect: 'follow',
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => console.log('error', error));
  // }

  render() {
    // const { email, username, password } = this.state
    return (
      <div>
        <Register />
        <h2>Class Component</h2>
        <SignUp />
      </div>
    );
  }
}

export default App;
