import React from 'react'; 

const Suggestion = (props) => {
  const heroes = props.results.map(r => (
    <li key = {r.id}>
      {r.name}
    </li>
    
  ))
  return <ul>{heroes}</ul>
}

export default Suggestion; 