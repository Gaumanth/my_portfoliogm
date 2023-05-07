import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import movieking from "../assets/portfolio/movieking.png";
import stoney from "../assets/portfolio/stoney.png";
import crypto from "../assets/portfolio/cypto.png";
import amazon from "../assets/portfolio/amazon.png";
import portfolio from "../assets/portfolio/portfolio.png"
import pos from "../assets/portfolio/pos.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: movieking,
      liveLink:"https://gaumanth-movieking.netlify.app/",
      github:"https://github.com/Gaumanth/Movie-King"
    },
    {
      id: 2,
      src: crypto,
      liveLink:"https://cryptoverse-cyan.vercel.app/",
      github:"https://github.com/Gaumanth/cryptoverse"
    },
    {
      id: 3,
      src: stoney,
      liveLink:"https://www.youtube.com/watch?v=ydMBIDIEatg&ab_channel=GaumanthMaliyal",
      github:"https://github.com/Gaumanth/stoney_turtle_store"
    },
    {
      id: 4,
      src: amazon,
      liveLink:"https://gaumanth-movieking.netlify.app/",
      github:"https://github.com/Gaumanth/Amazon-Clone"

    },
    {
      id: 5,
      src: portfolio,
      // liveLink:"https://gaumanth-movieking.netlify.app/",
      // github:"https://github.com/Gaumanth/Movie-King"
    },
    {
      id: 6,
      src: pos,
      liveLink:"https://point-of-sale-app-five.vercel.app/",
      github:"https://github.com/Gaumanth/Point-Of-Sale-App"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,liveLink,github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={liveLink}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
