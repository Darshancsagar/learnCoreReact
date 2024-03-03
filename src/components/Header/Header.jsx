import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={Styles.header}>
        <div className={Styles.logo}>
          <h2>LOGO</h2>
        </div>
        <div className={Styles.navitems}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
