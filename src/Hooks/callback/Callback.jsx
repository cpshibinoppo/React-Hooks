import React, { useCallback, useState } from 'react'
/* ? npm install array-shuffle */
import arrayShuffle from 'array-shuffle';
import Search from './Search';

const allUsers = [
  'John', 'alxe', 'george', 'simon', 'james'
];

function Callback() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text)=>{
    console.log('array first user=',users[0]);
    const filteredUsers = allUsers.filter((user)=>user.includes(text))
    setUsers(filteredUsers);
  },[users])
  return (
    <div className='tutorial'>
    <div className='align-center mb-2 flex'>
      <button onClick={() => setUsers(arrayShuffle(allUsers))}>
        Shuffle
      </button>

      <Search onChange={handleSearch} />
    </div>
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  </div>
  )
}

export default Callback