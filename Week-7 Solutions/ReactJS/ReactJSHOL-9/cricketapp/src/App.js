import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Rahul', score: 50 },
    { name: 'Jadeja', score: 40 },
    { name: 'Hardik', score: 90 },
    { name: 'Pant', score: 75 },
    { name: 'Shami', score: 20 },
    { name: 'Bumrah', score: 30 },
    { name: 'Ashwin', score: 65 },
    { name: 'Surya', score: 100 },
    { name: 'Gill', score: 80 }
  ];

  const below70 = players.filter(p => p.score < 70);

  return (
    <>
      <h2>All Players</h2>
      {players.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}

      <h3>Players with score below 70:</h3>
      {below70.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}
    </>
  );
};

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'Rahul', 'Pant'];
  const evenTeam = ['Rohit', 'Jadeja', 'Hardik'];
  const [t20, ranji] = [['PlayerA', 'PlayerB'], ['PlayerC', 'PlayerD']];
  const merged = [...t20, ...ranji];

  return (
    <>
      <h2>Odd Team</h2>
      {oddTeam.map((p, i) => <p key={i}>{p}</p>)}
      <h2>Even Team</h2>
      {evenTeam.map((p, i) => <p key={i}>{p}</p>)}
      <h2>Merged Players</h2>
      {merged.map((p, i) => <p key={i}>{p}</p>)}
    </>
  );
};

function App() {
  const flag = true;

  return (
    <div className="App">
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
