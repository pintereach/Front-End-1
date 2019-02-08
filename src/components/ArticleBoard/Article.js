import React from "react";

const Article = props => {
  return (
    <article className="card">
      <h3>{props.title}</h3>
      <div className="image">
        {props.cover_page === "" ? (
          <img
            src={`https://via.placeholder.com/150x100/000000/FFFFFF/?text=${
              props.title
            }`}
          />
        ) : (
          <img src={props.cover_page} />
        )}
        <a href={props.link}>{props.link}</a>
      </div>
    </article>
  );
};

export default Article;
