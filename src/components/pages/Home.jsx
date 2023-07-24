import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Home page</h1>
            <Link
                to="/contact"
                className='btn btn-outline-primary'
            >
                go to contact (Link)
            </Link>
            <br />
            <br />
            <button
                className='btn btn-primary'
                onClick={() => navigate("/contact")}
            >
                Go to contact page
            </button>
        </div>
    )
}

export default Home