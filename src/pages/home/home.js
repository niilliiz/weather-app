import React from "react";
import Aside from "./sections/aside/aside";
import Main from "./sections/main/main";
const Home = (props) => {
  return (
    <div className="bg-gray_100 from-blue_100 to-blue_200  mt-home-sm mb-16 lg:mb-0  lg:bg-gradient-to-t lg:mt-home-lg">
      <div className="container flex flex-col space-y-20 lg:flex-row lg:space-x-20 lg:space-y-0">
        <Main />
        <Aside />
      </div>
    </div>
  );
};
export default Home;
