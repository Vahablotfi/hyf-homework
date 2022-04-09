import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])


  const searchUser = event => {
    console.log(event);
    const query = event.target.value;
    if (query !== "") {
      // setState({ loading: true });
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(users => {
          setUsers(users.items);
          // setState({ loading: false });
        });
    }
  };

  return (
    <div >
       <h1>Github user searcher</h1>
      <input placeholder="Search for user" onChange={searchUser} />
      {users.length === 0 ? 'no result' :
        users.map(user => <p>{ user.login} </p>)}
    </div>
  );
}

export default App;
