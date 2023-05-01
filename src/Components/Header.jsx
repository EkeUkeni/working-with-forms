import React from 'react'

const Header = (props) => {
  return (
    <div className='heading-text'>
        <h1 className='header'>{props.heading}</h1>
        <p className='para'>{props.text}</p>
    </div>
  )
}

export default Header