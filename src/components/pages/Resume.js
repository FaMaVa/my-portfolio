import React from 'react';
import Container from 'react-bootstrap/esm/Container';

export default function Resume() {
  return (
    <div>
      <Container id="portfolio">
      <h1 id="resumeTitle">Skills</h1>
      <div className="listTitle">Front-End Proficiencies</div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <div className='listTitle'>Back-End Proficiencies</div>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>JMySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </Container>
    </div>
  );
}