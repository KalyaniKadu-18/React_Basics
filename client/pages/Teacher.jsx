import UserContext from "../context/UserContext";
import React, { useContext } from 'react'

function Teacher() {

    const {teacher} = useContext(UserContext)

    return (
    <div>
        <h1>{teacher.name}</h1>
        <h2>{teacher.field}</h2>
    </div>
  )
}

export default Teacher