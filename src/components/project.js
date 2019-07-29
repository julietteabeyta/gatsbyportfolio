import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <a href={props.url}>{props.title}</a>
      <p>{props.description}</p>
    </div>
  );
}

export default Project;
