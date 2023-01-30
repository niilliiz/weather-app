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
    <header className="fixed top-0 left-0 right-0  flex flex-col">
      <div className="bg-blue_600 px-4">
        <div className="container flex justify-between items-center py-4">
          <a
            href="#"
            className="block w-16 bg-gray_100 text-dark_blue lg:w-logo"
          >
            <span className="block pt-2   font-extrabold px-1 pb-1 text-10 leading-extra-packed lg:text-14">
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
      <div className="hidden bg-blue_200 px-4 py-2 lg:flex">
        <div className="container text-14 text-gray_100">little summary</div>
      </div>
      <nav className="bg-gray-100 lg:bg-blue_900">
        <div className="container px-4">
          <ul className="fixed bg-gray_100 left-0 right-0 bottom-0 flex justify-between shadow-shadow-top py-2 lg:hidden">
            {SHORT_SCREEN_NAV_ITEM.map((item) => (
              <li
                key={item.title}
                className="flex flex-col space-y-1 items-center px-2"
              >
                {item.icon}
                <span className="text-12">{item.title}</span>
              </li>
            ))}
          </ul>
          <ul className="hidden  text-gray_100 justify-between items-center pt-4 lg:flex">
            {LARGE_SCREEN_NAV_ITEM.map((item) => (
              <li
                key={item}
                className="h-10 hover:border-b-4 hover:border-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
