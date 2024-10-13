const NavBar = () => {
  const score = 0
  return (
    <li>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <div>
        <p>{score}</p>
        <p>60 Sec</p>
      </div>
    </li>
  )
}

export default NavBar
