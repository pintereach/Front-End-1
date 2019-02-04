import React from "react";

const registerForm = props => {
  return (
    <div>
      <form onSubmit={props.register} method="post">
        <input type="text" name="username" value="" placeholder="Username" />
        <input
          type="password"
          name="password"
          id="password"
          value=""
          placeholder="Password"
        />
      </form>
    </div>
  );
};

export default registerForm;
