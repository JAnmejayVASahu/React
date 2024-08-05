import React from "react";

function Card({ userName, changeName, btnText }) {
  const imageSrc =
    "https://images.pexels.com/photos/26934487/pexels-photo-26934487/free-photo-of-chess-pieces-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const imageAlt = "";
  const imageWidth = "384";
  const imageHeight = "512";
  const imageClass =
    "w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto";

  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className={imageClass}
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            {userName || changeName
              ? `Tailwind CSS is the only framework that ${
                  userName || changeName
                } has seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.`
              : "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {userName || "Sarah Dayan"}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            {userName
              ? `Staff Engineer, ${userName}`
              : "Staff Engineer, Algolia"}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
