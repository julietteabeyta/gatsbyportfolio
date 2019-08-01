import React from "react"

import SkillSection from "../components/skillsection.js"

const languages = ['JavaScript', 'HTML5', 'PHP7', 'CSS3']
const libraries = ['React', 'React Native', 'Redux', 'Backbone', 'jQuery', 'Material UI', 'BootStrap', 'SCSS'];
const misc = ['API/RESTful Architecture', 'SVG Animation', 'MySQL', 'MongoDB', 'Git', 'JIRA', 'Chrome Applications', 'XCode', 'Android Studio', 'Sketch', 'Agile Web Development'];
const SecondPage = () => (
  <div className="section">
    <SkillSection
      title="Languages:"
      skills={languages}
    />
    <SkillSection
      title="Frameworks && Libraries:"
      skills={libraries}
    />
    <SkillSection
      title="Other Superpowers:"
      skills={misc}
    />
  </div>
)

export default SecondPage
