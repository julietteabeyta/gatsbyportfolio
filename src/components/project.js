import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <a href={props.url} rel="noopener noreferrer" target="_blank">{props.title}</a>
    </div>
  );
}

export default Project;
