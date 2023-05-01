import React from 'react'
import Header from './Header'
import Forms from './Forms'

const FormApp = () => {
  return (
    <div>
        <Header heading = {'Welcome to Skill Tech website!'}/>
        <Header  text = {'Become an expert in the highiest demanding Tech Skills in 2023. Level up your career goals faster than you thought. Feel free to contact us 24/7...'}/>
        <h1>Contact Us</h1>
        <Forms/>
    </div>
  )
}

export default FormApp