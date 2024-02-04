import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.logo}>
        <h1 className={Styles.name}>facebook</h1>
      </div>
      <div className={Styles.loginForm}>
        <div className={Styles.email}>
          <label htmlFor="Email">Email or Phone</label>
          <input type="text" />
          <label htmlFor="Email" className={Styles.labelBottom}>
            <input type="checkbox" className={Styles.loggedIn} /> Keep me logged
            in
          </label>
        </div>
        <div className={Styles.password}>
          <label htmlFor="Password">Password</label>
          <input type="password" />
          <label htmlFor="Password" className={Styles.labelBottom}>
            <a>Forgot your password?</a>
          </label>
        </div>
        <div className={Styles.loginBtn}>
          <button className={Styles.lgBtn}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
