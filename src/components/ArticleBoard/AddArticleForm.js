import React from "react";

const AddArticleForm = props => {
  return (
    <div>
      <form onSubmit={props.addnewarticle} method="post">
        <input
          onChange={props.handleInputChange}
          name="title"
          type="text"
          placeholder="title"
        />
        <input
          onChange={props.handleInputChange}
          name="coverpage"
          type="text"
          placeholder="Link to coverpage img"
        />
        <input
          onChange={props.handleInputChange}
          name="link"
          type="text"
          placeholder="Link to article"
        />
        <button>Add Article</button>
      </form>
    </div>
  );
};

export default AddArticleForm;
