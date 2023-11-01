import React from 'react'

function BoxColor(props) {
  return (
    <div className='box' style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
        <p>rgb({props.r},{props.g},{props.b})</p>
        <p>#{props.r.toString(16)}{props.g.toString(16)}{props.b.toString(16)}</p>
    </div>
  );
}

export default BoxColor