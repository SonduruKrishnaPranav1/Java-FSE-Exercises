import React from 'react';

function App() {
  const heading = <h1>Office Space Rental</h1>;

  const office = {
    name: 'GreenHub CoWorking',
    rent: 55000,
    address: 'Bangalore, India',
    image: 'https://via.placeholder.com/150'
  };

  const officeList = [
    { name: 'WorkEasy', rent: 70000, address: 'Hyderabad' },
    { name: 'SpaceXHub', rent: 48000, address: 'Chennai' },
    { name: 'StartupDen', rent: 65000, address: 'Pune' }
  ];

  return (
    <div className="App">
      {heading}
      <img src={office.image} alt="Office" />
      <h3>{office.name}</h3>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>Rent: ₹{office.rent}</p>
      <p>{office.address}</p>

      <h2>Other Offices</h2>
      {officeList.map((o, index) => (
        <div key={index}>
          <h4>{o.name}</h4>
          <p style={{ color: o.rent < 60000 ? 'red' : 'green' }}>₹{o.rent}</p>
          <p>{o.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;