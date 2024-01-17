import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/value')
      .then((response) => {

        setData(response.data)
        // console.log(response.data);

      })
      .catch((err) => {

        console.log(err);

      })
  }, [])

  return (
    <>
      <h1>Data for ne0gi02</h1>
      <p>No of Data: {data.length}</p>

      {

        data.map((d) => (

          <div key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.role}</p>
          </div>


        ))

      }


    </>
  )
}

export default App