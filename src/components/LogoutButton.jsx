import "./LogoutButton.scss"

const LogoutButton = (prop) => {
  return (
    <button onClick={prop.onClick}>LOG OUT</button>
  )
}

export { LogoutButton }