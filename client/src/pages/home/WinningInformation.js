// src/Slider.js
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";
import Avatar5 from "../../assets/avatar5.png";

import WinImg1 from "../../assets/bdgimg/origin/lotterycategory_20250213095756garv.png";
import WinImg2 from "../../assets/bdgimg/origin/lotterycategory_20250213095805h23c.png";
import WinImg3 from "../../assets/bdgimg/origin/lotterycategory_2025021309581453ip.png";
import WinImg4 from "../../assets/bdgimg/origin/lotterycategory_202503241646119i36.png";
import WinImg5 from "../../assets/bdgimg/origin/lotterycategory_202503241646119i36.png";
import icon from "../../assets/winningicon.svg";

// Random text and number generators
const generateRandomText = () => {
  const prefix = "MEM***";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = prefix;
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const getRandomINumber = () => {
  return (Math.random() * 1000).toFixed(2);
};

// Data for the avatars and winning images
const data = [
  {
    text: generateRandomText(),
    image: Avatar1,
    img: WinImg1,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar2,
    img: WinImg2,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar3,
    img: WinImg3,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar4,
    img: WinImg4,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg5,
    number: getRandomINumber(),
  },
];

// Function to pick a random item from the data array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Component for showing winning information
const WinningInformation = () => {
  const [slides, setSlides] = useState(data.slice(0, 5)); // Initialize with 5 slides

  useEffect(() => {
    const interval = setInterval(() => {
      const randomItem = getRandomItem(data);
      const newSlide = { ...randomItem, id: uuidv4() };

      // Add new slide and keep the last 5 slides
      setSlides((prevSlides) => {
        const updatedSlides = [newSlide, ...prevSlides];
        return updatedSlides.slice(0, 5); // Keep only the last 5 slides
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <h1 className="border-after mt-2 flex">
        <span>
          <img src={icon} className="size-8 pr-2" alt="icon" />
        </span>
        Winning Information
      </h1>

      <div className="winning-item bg-HomeStroke rounded-xl border border-[#224BA2]">
        <div className="slider-container pt-1">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slide items-center border-b border-[#224BA2] py-2 rounded-lg"
            >
              <img src={slide.img} alt="" className="w-10 h-10 ml-3" />
              <div className="flex items-start pl-2">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <img
                      src={slide.image}
                      alt={slide.text}
                      className="rounded-full h-[25px] w-[25px] slide-img-winning"
                    />
                    <p className="uppercase text-[13px] font-medium text-white ml-1">
                      {slide.text}
                    </p>
                  </div>
                  <div className="flex items-center text-right ml-1 mt-1">
                    <p className="text-[12px] text-slate-400 mr-1">
                      Winning amount
                    </p>
                    <h4 className="text-[12px] font-semibold text-green-400">
                      ₹{slide.number}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WinningInformation;
