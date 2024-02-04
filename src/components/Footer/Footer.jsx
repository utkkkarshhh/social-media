import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Styles.footer}>
        <ul className={Styles.languages}>
          <li>English (US)</li>
          <li>Español</li>
          <li>Português (Brasil)</li>
          <li>Français (France)</li>
          <li>Deutsch</li>
          <li>Italiano</li>
          <li>لعربية</li>
          <li>हिन्दी</li>
          <li>中文(简体)</li>
          <li>日本語</li>
        </ul>
      </div>
      <div className={Styles.credits}>
        <p>
          Facebook © 2022. Made with ❤️, 💃 & ☕ by <a href="www.github.com/utkkkarshhh">Utkarsh Bhardwaj</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
