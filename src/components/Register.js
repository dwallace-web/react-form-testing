import React, { useState } from 'react';

export default function Register() {
  ///THIS IS A FUNCTIONAL COMPONENT

  const [email, setEmail] = useState(null);
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);

  function Register(event) {
    event.preventDefault();
    fetch('http://localhost:2000/user/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }
  return (
    <div>
      <h1>Register in react</h1>
      <div>
        <form onSubmit={Register}>
          <input
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
          />
          {/*             <div
              className="radio-buttons"
              onChange={this.state.restaurantowner}
            >
              <input type="radio" value="true" name="restaurantowner" />
              <input type="radio" value="false" name="restaurantowner" />
            </div> */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
