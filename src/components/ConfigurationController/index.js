import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-group-container">
              <div className="checkbox-container">
                <input
                  id="content"
                  type="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  id="leftNavbar"
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label className="label" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  id="rightNavbar"
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label className="label" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
