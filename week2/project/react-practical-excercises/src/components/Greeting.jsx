import React from 'react'

function Greeting(props) {
  return (
    <div className='box'>
        {props.lang === 'de' && <p>Hallo {props.children}</p>}
        {props.lang === 'fr' && <p>Bonjour {props.children}</p>}
    </div>
  );
}

export default Greeting