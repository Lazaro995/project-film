import React from 'react'
import { Link } from 'react-router-dom'

function User() {
    return (
        <div><p>This is user page.</p>
            <Link to='/'>GO HOME</Link>
        </div>
    )
}

export default User