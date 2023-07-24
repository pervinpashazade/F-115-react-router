import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Contact</h1>
            <button
                className='btn btn-primary'
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
        </div>
    )
}

export default Contact