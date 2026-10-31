
import React, { useState, useEffect } from 'react';

function APIDemo() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://time.now/developer/api")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>This is API Demo</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default APIDemo;
