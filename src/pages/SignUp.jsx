import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const SignUp = () => {
  return (
    <section className='sign-up'>
      <div>
        <Navbar/>
      </div>
        <h2 className="section-title">Create an account</h2>
   
      <form action="">
        <input type="text" name="first name" id="" placeholder='first name' required  className='input-field'/>
        <input type="text" name="last name" id="" placeholder='last name' required  className='input-field'/>
        <input type="email" name="email" id="" placeholder='email address' required className='input-field'/>
        <input type="password" name="password" id="" placeholder='password' required className='input-field'/>
        <input type="submit" value="submit" className='submit input-btn'/>
      </form>
    </section>
  )
}

export default SignUp