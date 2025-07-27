import React from 'react';
import '../StyleSheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, Goal } = props;
  const average = (Total / Goal).toFixed(2);

  return (
    <div className="box">
      <h2>Student Score Calculator</h2>
      <p>Name: {Name}</p>
      <p>School: {School}</p>
      <p>Total Marks: {Total}</p>
      <p>Goal: {Goal}</p>
      <p>Average: {average}</p>
    </div>
  );
}

export default CalculateScore;