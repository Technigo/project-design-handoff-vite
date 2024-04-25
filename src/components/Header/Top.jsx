import "./Top.css"
import searchIcon from '/assets/search-icon.svg'
import menuIcon from '/assets/menu-icon.svg'

export const Top = () => {
  return (
    <div className="top">
      <div className="title">
        <h1>Y</h1>
        <h4>Studio</h4>
      </div>

      <div className="function-container">
        <div className = "search-menu">
          <div className="search">
            <img src={searchIcon} alt="search-icon" />
          </div>
          <div className = "menu">
            <img src={menuIcon} alt = "menu-icon" />
          </div>
        </div>
      </div>

    </div>
  )
}
