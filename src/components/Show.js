import React from 'react'
import './Show.css';

const Show = ({text,result}) => {
  return (
    <div className='hello'> 
    <div className="text">
        {text}
      </div>
      <div className="result">
        {result}
      </div>
     
    </div>
  )
}

export default Show
