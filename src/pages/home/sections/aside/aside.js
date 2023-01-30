import React from "react";

const ASIDE_CARDS = [
  {
    title: "Editor's Pick",
    img: "https://s.w-x.co/febout129_1.jpg?crop=16:9&width=640&format=pjpg&auto=webp&quality=60",
    description: "Your Feb. Tempreture Outlook Has Arrived",
    action: "",
  },
  {
    title: "Stay Safe",
    img: "https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60",
    description: "",
    action: "",
  },
  {
    title: "We'd like to hear from you!",
    img: "",
    description: "Please take a few minutes to tell us about your experience",
    action: "Go to Survey to day",
  },
  {
    title: "Editor's Pick",
    img: "https://s.w-x.co/0127SpinningIceDisk.png?crop=16:9&width=640&format=pjpg&auto=webp&quality=60",
    description: "A Waterfall and Stream Create A Slowly Spinner ice Disk",
    action: "",
  },
];

const Aside = (props) => {
  return (
    <aside className="basis-96 grid grid-cols-1 space-y-6 p-4 bg-blue_100">
      {ASIDE_CARDS.map((card) => (
        <div
          key={card.title}
          className="flex flex-col space-y-3 rounded-lg bg-gray_100 p-4"
        >
          <h4 className="font-bold">{card.title}</h4>
          {card.img && <img src={card.img} alt="Map" loading="lazy" />}
          {card.description && <p className="text-14">{card.description}</p>}
          {card.action && (
            <button className="text-12 rounded-2xl self-center bg-blue_700 text-gray_100 p-2">
              {card.action}
            </button>
          )}
        </div>
      ))}
    </aside>
  );
};
export default Aside;
