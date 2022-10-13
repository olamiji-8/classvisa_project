import React, { useState } from 'react'
import data from './data'
import List from './List'
import './index.css';

function Index() {
    const [people, setPeople] = useState(data)
  return (
    <div className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
    </div>
  )
}

export default Index





