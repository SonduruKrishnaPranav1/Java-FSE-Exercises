import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="John" School="ABC High" Total={480} Goal={5} />
    </div>
  );
}

export default App;
