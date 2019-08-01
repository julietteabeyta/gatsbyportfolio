import React from 'react';

function SkillSection(props) {
  let children = props.skills.map((skill, index) => <li key={index}>{skill}</li>);
  return (
    <div className="skills-languages skills-section">
      {children}
    </div>
  );
}

export default SkillSection;
