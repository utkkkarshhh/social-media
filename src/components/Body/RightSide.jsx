import React from "react";
import Styles from "./RightSide.module.css";

const RightSide = () => {
  return (
    <div className={Styles.signupForm}>
      <div className={Styles.signupText}>
        <p className={Styles.bigText}>Sign Up</p>
        <p className={Styles.description}>It’s free and always will be.</p>
      </div>
      <div className={Styles.form}>
        <input className={Styles.fname} type="text" placeholder="First Name" />
        <input className={Styles.lname} type="text" placeholder="Last Name" />
        <input
          className={Styles.emailSp}
          type="email"
          placeholder="Your Email"
        />
        <input
          className={Styles.remail}
          type="email"
          placeholder="Re-enter Email"
        />
        <input
          className={Styles.passwordSp}
          type="password"
          placeholder="••••••••••"
        />

        <div className={Styles.bdayInput}>
          <div>
            <label className={Styles.birthday} htmlFor="birthday">
              Birthday:
            </label>
          </div>
          <div>
            <select
              name="month"
              id="month"
              aria-label="Month"
              placeholder="Month"
              className={Styles.selectMonth}
            >
              <option value="#" disabled selected>
                Month:
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              name="day"
              id="day"
              aria-label="Day"
              placeholder="Day"
              className={Styles.selectDay}
            >
              <option value="#" disabled selected>
                Day:
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select
              name="year"
              id="year"
              aria-label="Year"
              placeholder="Year"
              className={Styles.selectYear}
            >
              <option value="#" disabled selected>
                Year:
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className={Styles.sex}>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female" className={Styles.fem}>
            Female
          </label>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male" className={Styles.male}>
            Male
          </label>
        </div>

        <p className={Styles.terms}>
          By clicking Sign Up, you agree to our Terms and that you have read our
          Data Use Policy, including our Cookie Use.
        </p>
        <button className={Styles.btnSu}>Sign Up</button>
        <hr className={Styles.hr} />
        <p className={Styles.create}>
          <a href="">Create a Page</a> for a celebrity, band, or business.
        </p>
      </div>
    </div>
  );
};

export default RightSide;
