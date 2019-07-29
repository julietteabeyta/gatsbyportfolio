import React from 'react';

function SkillSection(props) {
  let children = props.skills.map(skill => <li>{skill}</li>);
  return (
    <div className="skills-languages skills-section">
      <p>{props.title}</p>
      {children}
    </div>
  );
}

export default SkillSection;
