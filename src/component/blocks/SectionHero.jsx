import React from "react";

export default function SectionHero() {
  return (
    <div className="container grid grid-cols-2 p-10">
      <div className="desc">
        <h1 className="font-bold text-5xl">
          Landing page for
          <br />
          your online service
        </h1>
        <p className="my-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum
          exercitationem repudiandae culpa voluptate eveniet ipsam laudantium,
          accusamus adipisci aut!
        </p>
        <button className="bg-green-500 rounded-lg p-2">Learn More</button>
      </div>

      <div className="hero">
        <img src="/hero-illustration.png" alt="hero" />
      </div>
    </div>
  );
}

// bagi 2 = grid grid-cols-2
