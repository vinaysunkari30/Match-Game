const NavBar = props => {
  const {seconds, userScore} = props
  return (
    <li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div>
        <p>Score: {userScore}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>{seconds} sec</p>
      </div>
    </li>
  )
}

export default NavBar
