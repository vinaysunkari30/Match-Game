import './index.css'

const TabItem = props => {
  const {tabs, tabClick, isActive} = props
  const {tabId, displayText} = tabs
  const onTabClick = () => {
    tabClick(tabId)
  }
  const color = isActive ? 'btn' : ''
  return (
    <li>
      <button type="button" className={color} onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
