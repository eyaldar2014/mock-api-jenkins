import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';
import axios from 'axios';


function User() {
  const [user, setUser] = useState(null)

  const getUser = async () =>{
    console.log('here')

    const data = await axios.get('/api/')
    console.log(data)
    setUser(data.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user===null? <p>fetching user datas</p> : <p>{`Hello ${user}`}</p> }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default User;
