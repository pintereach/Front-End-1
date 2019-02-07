import React from "react";

const AddArticleForm = props => {
  return (
    <div>
      <form onSubmit={props.addnewarticle} method="post">
        <input onChange={props.handleInputChange} name="title" type="text" placeholder="title" />
      </form>
    </div>
  );
};

export default AddArticleForm;
