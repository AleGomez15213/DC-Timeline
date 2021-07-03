import React, { useState, useEffect} from 'react'
import './App.css';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item)
      setLoading(false);
    } 
    fetchData();
  }, []);
  
  return {data, loading};
}

function App() {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch('https://api.randomuser.me/');  
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {loading ? <div>...loading</div> : <div>{data.name.first}</div>}

      <div>YES</div>
    </div>
  );
}

export default App;
