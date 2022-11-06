import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
  return (
    <header className='navContainer'>
        <nav>
            <ul>
                <li><Link to={"custom_hook"} >CustomHook</Link></li>
                <li><Link to={"reducer"} >Reducer</Link></li>
                <li><Link to={"error_boundary"} >Error_boundary</Link></li>
                <li><Link to={"*"} >404_page</Link></li>

            </ul>
        </nav>
    </header>
  )
}

export default Navigation