import React from 'react'; 
import '../App.css';

const Suggestion = (props) => {
  const heroes = props.results.map(r => (
    <li key = {r.id}>
      {r.name}
    </li>
    
  ))
  return <ul className='App-list'>{heroes}</ul>
}

export default Suggestion; 