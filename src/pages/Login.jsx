import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Login = () => {
  return (
<section className='sign-up'>
      <div>
        <Navbar/>
      </div>
        <h2 className="section-title">Login Your Account</h2>
   
      <form action="">
       
        <input type="email" name="email" id="" placeholder='email address' required className='input-field'/>
        <input type="password" name="password" id="" placeholder='password' required className='input-field'/>
        <input type="submit" value="login" className='submit input-btn'/>
      </form>
    </section>
  )
}

export default Login