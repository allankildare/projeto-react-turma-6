import React, { useRef, useContext } from "react"
import { UserContext } from "./../UserProvider/UserProvider"

const OurTeam = () => {
  const heading = useRef(null)
  const inputName = useRef(null)
  const { user, login } = useContext(UserContext)

  return (
    <div>
      <h1 className="centeredHeading" ref={heading}>
        Nosso time
      </h1>
      <h2>Qual o seu nome?</h2>
      <input type="text" ref={inputName} />
      <button onClick={() => login(inputName.current.value)}>Login</button>

      {user ? (
        <p>
          Seu nome é <b>{user}</b>
        </p>
      ) : (
        <p>Você ainda não logou na página</p>
      )}
    </div>
  )
}

export default OurTeam
