import React, { useState } from 'react';
import { use } from 'react';
import { useEffect } from 'react';

function API() {
    
    const[data,setData] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => setData(result))
},[]);

  return (
    <div>
      <h1>Users</h1>

      {data.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default API