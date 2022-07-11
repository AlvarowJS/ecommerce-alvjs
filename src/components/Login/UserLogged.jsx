import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLogged = () => {

  const loggout = () => {
    localStorage.removeItem('token','')
  }
  return (
    <article className='login__screen'>
        <i class='bx bxs-user-check'></i>
        <h2>User Logged</h2>
        <NavLink to={"/"} onClick={loggout}>
        <h3>Log out</h3>

        </NavLink>
    </article>
  )
}

export default UserLogged