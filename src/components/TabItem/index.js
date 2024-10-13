const TabItem = props => {
  const {tabs} = props
  const {displayText} = tabs
  return (
    <li>
      <button type="button">{displayText}</button>
    </li>
  )
}

export default TabItem
