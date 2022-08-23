import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export function Home() {
  return (
    <div>
        <h1>oi</h1>

        <nav>
            <Link to='/about'>About</Link>
            <Link to='/user'>User</Link>
        </nav>
    </div>
  )
}
