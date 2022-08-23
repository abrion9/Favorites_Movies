import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    let parametro = useParams()

    console.log(parametro.id)

  return (
    <div>User</div>
  )
}
