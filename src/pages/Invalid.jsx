import React from 'react'
import { Link } from 'react-router-dom';
export default function Invalid() {
    return (
        <>
            <h1> You followed an invalid Link! </h1>
            <Link to={'/'}>Return to home</Link>
        </>
    )
}
