import React from "react";

const registerForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} method="post">
        <input
          onChange={props.handleChange}
          type="text"
          name="username"
          value={props.username}
          placeholder="Username"
        />
        <input
          onChange={props.handleChange}
          type="password"
          name="password"
          id="password"
          value={props.password}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default registerForm;
