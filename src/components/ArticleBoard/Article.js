import React from "react";

const Article = (props) => {
  return (
  <div className='card'>
      <h3>{props.title}</h3>
      <a href='props.cover_page'>{props.cover_page}</a>
      <a href='props.link'>{props.link}</a>
      <p>Categorys: </p>
  </div>
  )
};

export default Article;
