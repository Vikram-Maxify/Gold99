import React from "react";
import { useSelector } from "react-redux";

const PlatformDetails = () => {
  const { userInfo, bannergetData } = useSelector((state) => state.auth);
  return (
    <div className="p-4 m-4 bg-body flex flex-col items-center rounded ">
      {/* Header */}
      <div className="flex space-x-5 gap-8 mx-auto items-center w-full h-auto max-w-xl mb-6 ">
        <img src="https://i.ibb.co/v4sjnG7j/GOLD-3.png" alt="Logo" className=" h-9 mb-2 w-40" />
        <div className="flex items-center justify-center space-x-3">
          <span className="flex items-center justify-center w-12 h-12 rounded-full color-blue font-bold text-lg border-[#00ECBE] border-2">
            18+
          </span>
        </div>
        {/* <span className=" text-red-500   rounded-full font-semibold">
          <img
            src={Img3} // Replace with the actual path to your image
            alt="Icon"
            className="h-14 w-14 inline-block"
          />
        </span> */}
      </div>

      {/* Description */}
      <div className="text-xs text-[#6F80A4] font-sm space-y-1 max-w-xl">
        <p className="flex items-start gap-1">
          <span className="mt-2 text-white">
            <svg
              data-v-87a02cdf=""
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-87a02cdf=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>{" "}
          The platform advocates fairness, justice, and openness. We mainly
          operate fair lottery, blockchain games, live casinos, and slot machine
          games.
        </p>
        <p className="flex items-start gap-1">
          <span className="mt-2 text-white">
            <svg
              data-v-87a02cdf=""
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-87a02cdf=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>{" "}
          99Gold works with more than 10,000 online live game dealers and
          slot games, all of which are verified fair games.
        </p>
        <p className="flex items-start gap-1">
          <span className="mt-2 text-white">
            <svg
              data-v-87a02cdf=""
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-87a02cdf=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>{" "}
          99Gold supports fast deposit and withdrawal and looks forward to
          your visit.
        </p>
        <br />
        <p className="text-white">
          Gambling can be addictive, please play rationally.
        </p>
        <p className="text-white">
          99Gold only accepts customers above the age of 18.
        </p>
      </div>
    </div>
  );
};

export default PlatformDetails;
