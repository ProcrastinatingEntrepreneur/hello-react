import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({library, message, number}) {
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>Hello World! {message}</p>
      <p>{number} Props Total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello 
    library="Vue" 
    message="have fun" 
    number={3} 
  />,
  document.getElementById('root')
);


