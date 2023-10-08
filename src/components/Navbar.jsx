import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-neutral-content'>
    <div className='align-element flex justify-between items-center py-3'>
        <h1  className='text-3xl text-black'>
        <Link to="/">Recipie</Link>
        </h1>
        <Link className='btn  btn-success ' to="/create">
            Create
        </Link>
    </div>
    </div>
  )
}

export default Navbar