import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileProps } from '../../components/profile/profileInterface'
function Profile() {
  return (
    <div><p>This is Profile page.</p>
    <Link to='/'>GO HOME</Link>
    </div>
  )
}

export default Profile