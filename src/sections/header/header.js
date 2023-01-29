/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  CalendarCheck,
  Clock,
  CalendarBlank,
  Target,
  MonitorPlay,
} from "phosphor-react";
import React, { useState } from "react";

const UNIT = {
  f: "c",
  c: "f",
};

const SHORT_SCREEN_NAV_ITEM = [
  {
    title: "Today",
    icon: <CalendarCheck size={24} color="#7e7e7e" />,
  },
  {
    title: "Hourly",
    icon: <Clock size={24} color="#7e7e7e" />,
  },
  {
    title: "10 Day",
    icon: <CalendarBlank size={24} color="#7e7e7e" />,
  },
  {
    title: "Radar",
    icon: <Target size={24} color="#7e7e7e" />,
  },
  {
    title: "Videos",
    icon: <MonitorPlay size={24} color="#7e7e7e" />,
  },
];

const LARGE_SCREEN_NAV_ITEM = [
  "Today",
  "Hourly",
  "10 Day",
  "Weekend",
  "Monthly",
  "Radar",
  "Videos",
];

const Header = () => {
  const [unit, setUnit] = useState("f");
  return (
    <header className="fixed top-0 left-0 right-0  flex flex-col ">
      <div className="bg-dark_blue">
        <div className="container flex justify-between items-center py-4 px-4">
          <a href="#" className="block w-logo bg-gray_100 text-dark_blue ">
            <span className="block mt-3 font-extrabold px-2 pb-2 leading-4">
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
              <button className="ball text-12 text-gray_100">
                °{UNIT[unit].toUpperCase()}
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="hidden bg-light_blue px-10 py-4">
        <div className="container">little summary</div>
      </div>
      <nav className="">
        <ul className="fixed left-0 right-0 bottom-0 flex justify-between shadow-shadow-top px-4 py-2 lg:hidden">
          {SHORT_SCREEN_NAV_ITEM.map((item) => (
            <li
              key={item.title}
              className="flex flex-col space-y-1 items-center"
            >
              {item.icon}
              <span className="text-xs">{item.title}</span>
            </li>
          ))}
        </ul>
        <ul className="hidden bg-light_blue text-gray_100 justify-between items-center px-4 pt-4 lg:flex">
          {LARGE_SCREEN_NAV_ITEM.map((item) => (
            <li
              key={item.title}
              className="h-10 hover:border-b-4 hover:border-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
