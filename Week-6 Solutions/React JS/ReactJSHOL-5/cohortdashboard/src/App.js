import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Basics" status="ongoing" />
      <CohortDetails name="Advanced JavaScript" status="completed" />
    </div>
  );
}

export default App;