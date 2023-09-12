import React, { useEffect, useState } from 'react'
import { fetchUsers } from './Utils';
import Searchbar from './SearchBar'
import { useDebounce } from './hooks';

function Index() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search)
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const loadUsers = async () =>{
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users)
      setLoading(false);
    };
    loadUsers();
  },[debouncedSearch])
  return (
    <div>
      <Searchbar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading && users.map((user)=>{
        return <div key={user.id}>{user.name}</div>
      })}
    </div>
  )
}

export default Index