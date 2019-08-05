import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <a href={props.url} rel="noopener noreferrer" target="_blank" aria-describedby="link-new-window">{props.title}</a>
      <span id="link-new-window" hidden>Opens in a new window</span>
    </div>
  );
}

export default Project;
