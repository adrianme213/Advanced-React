import Nav from './Nav';
import { Config } from '../static/Config';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">{ Config.TITLE }</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      <p>Cart</p>
    </div>
  </div>
)

export default Header;
