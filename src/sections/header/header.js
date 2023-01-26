/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const UNIT = {
  f: "c",
  c: "f",
};

const Header = () => {
  const [unit, setUnit] = useState("f");
  return (
    <header className="flex flex-col text-gray_100">
      <div className="bg-dark_blue">
        <div className="container flex justify-between items-center py-4 px-4">
          <a href="#" className="w-16 text-xs bg-gray_100 text-dark_blue">
            <span className="block mt-3 font-extrabold px-1 pb-1 leading-3">
              The Weather Channel
            </span>
          </a>
          <div>
            <label htmlFor="switch_checkbox" className="checkbox-container">
              <input
                className="checkbox"
                type="checkbox"
                name="checkbox"
                id="switch_checkbox"
                onChange={() => setUnit(UNIT[unit])}
              />
              <button className="ball">°{UNIT[unit].toUpperCase()}</button>
            </label>
            {/* <label className="checkbox-container">
              <input className="checkbox" type="checkbox" />
              <div className="ball_container">
                <div className="ball"></div>
              </div>
            </label> */}
          </div>
        </div>
      </div>
      <div className="bg-light_blue px-10 py-4">
        <div className="container">little summary</div>
      </div>
    </header>
  );
};
export default Header;
