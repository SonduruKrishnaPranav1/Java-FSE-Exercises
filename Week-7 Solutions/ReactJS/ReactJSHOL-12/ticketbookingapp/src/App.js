import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const GuestPage = () => <h2>Welcome Guest! View flight details only.</h2>;
  const UserPage = () => <h2>Welcome User! You can book tickets.</h2>;

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default App;
