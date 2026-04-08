import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiHomeSmileLine } from "react-icons/ri";
import { MdHeartBroken } from "react-icons/md";
import { BiSolidGift } from "react-icons/bi";
import { LiaGamepadSolid, LiaWalletSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa6";
import { CgShoppingBag } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ServiceImg from "../assets/icon_sevice.png";
import { useDispatch } from "react-redux";
import { IoDiamondSharp, IoWallet } from "react-icons/io5";
import { BsEmojiSurpriseFill } from "react-icons/bs";
import wallet from "../assets/nwallet.png";
import Activity from "../assets/nactivity.png";
import Home from "../assets/home.png";
import Account from "../assets/account.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");
  const naviaget = useNavigate();

  const [position, setPosition] = useState({
    x: window.innerWidth - 100,
    y: window.innerHeight - 100,
  }); // Initial position
  const [dragging, setDragging] = useState(false); // Track dragging state
  const [dragStarted, setDragStarted] = useState(false); // Track if dragging occurred
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // Offset to ensure smooth dragging
  const navigate = useNavigate(); // For manual navigation in React Router
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMove = (e) => {
      if (!dragging) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      // Calculate new position
      let newX = clientX - offset.x;
      let newY = clientY - offset.y;

      // Ensure the new position stays within the viewport (boundaries)
      const maxX = window.innerWidth - 64; // 64 is the width of the image (adjust if needed)
      const maxY = window.innerHeight - 64; // 64 is the height of the image (adjust if needed)

      newX = Math.max(0, Math.min(newX, maxX)); // Constrain X to be within [0, maxX]
      newY = Math.max(0, Math.min(newY, maxY)); // Constrain Y to be within [0, maxY]

      setPosition({ x: newX, y: newY });
      setDragStarted(true); // Mark dragging as started

      e.preventDefault(); // Prevent default behavior to stop scrolling
    };

    const handleStopDragging = () => {
      setDragging(false); // Stop dragging when mouse/touch ends
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleStopDragging);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleStopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [dragging, offset]);

  const handleStartDragging = (e) => {
    e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    setOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });

    setDragging(true);
    setDragStarted(false); // Reset drag started state when dragging starts
  };

  // Handle link click based on whether dragging occurred
  const handleClicks = (e) => {
    if (dragStarted) {
      e.preventDefault(); // Prevent navigation if the user dragged
    } else {
      navigate("/main/CustomerService"); // Navigate on normal click
    }
  };

  useEffect(() => {
    if (dragging) {
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable background scroll
      document.body.style.overflow = "";
    }

    // Cleanup to enable scroll again when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [dragging]);

  // zoom app
  useEffect(() => {
    // Set viewport meta tag dynamically
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.head.appendChild(meta);

    const handleTouch = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleWheel = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "+" || event.key === "-")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouch, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  const handleClick = (item) => {
    setActiveItem(item);
    naviaget(`/${item}`);
  };
  let location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [activeItem]);

  return (
    <>
      <div className="navbar-section bg-[#05012b] rounded-t-xl ">
        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2  ${
            activeItem === "/promotion" ? "active" : ""
          }`}
          onClick={() => handleClick("promotion")}
        >
          <div className="flex justify-center items-center ml-[5px]">
            {/* <RiHomeSmileLine className="text-2xl" /> */}
            <MdHeartBroken
              className={`text-2xl  ${
                activeItem === "/promotion"
                  ? "active"
                  : "text-[#768096] opacity-[0.5]"
              }`}
            />
          </div>
          <span
            className={`text-[11px] font-medium text-[#04060a]  ${
              activeItem === "/promotion"
                ? "active"
                : " text-[#768096] opacity-[0.5]"
            }`}
          >
            Promotion
          </span>
        </div>
        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2   ${
            activeItem === "/activity" ? "active" : ""
          } `}
          onClick={() => handleClick("activity")}
        >
          <BiSolidGift
            className={`text-2xl ${
              activeItem === "/activity"
                ? "active"
                : "text-[#768096] opacity-[0.5]"
            }`}
          />
          <span
            className={`text-[11px] font-medium text-[#04060a]  ${
              activeItem === "/activity"
                ? "active"
                : " text-[#768096] opacity-[0.5]"
            }`}
          >
            Activity
          </span>
        </div>

        <div
          onClick={() => handleClick("/")}
          className={` flex  justify-center items-center flex-col p-2   ${
            activeItem === "/" ? "promotion" : "gray-100"
          } `}
        >
          <div className="nav-promotion px-3 py-1 w-[97px] h-[85px] mb-7 relative">
            <img src="/home.png" alt="" className="w-full h-full" />
            {/* <svg data-v-60defda3="" class="svg-icon icon-p3_home size-8 text-white"><use href="#icon-p3_home"></use></svg> */}
          </div>
          <span
            className={`text-[11px] font-medium text-white absolute top-8 ${
              activeItem === "/" ? "active" : "text-[#00ecbe] opacity-[0.5]"
            }`}
          >
            Home
          </span>
        </div>

        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2   ${
            activeItem === "/wallet" ? "active" : ""
          }`}
          onClick={() => handleClick("wallet")}
        >
          <IoWallet
            className={`text-2xl text-[#768096] ${
              activeItem === "/wallet"
                ? "active"
                : " text-[#768096] opacity-[0.5]"
            }`}
          />

          <span
            className={`text-[11px] font-medium text-[#04060a]  ${
              activeItem === "/wallet"
                ? "active"
                : "text-[#768096] opacity-[0.5]"
            }`}
          >
            Wallet
          </span>
        </div>
        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2   ${
            activeItem === "/main" ? "active" : ""
          }`}
          onClick={() => handleClick("main")}
        >
          <BsEmojiSurpriseFill
            className={`text-2xl text-[#768096] ${
              activeItem === "/main" ? "active" : "opacity-[0.5]"
            }`}
          />
          {/* <img
            src="/user.png"
            alt=""
            className={`w-6 h-6 text-[#768096] ${
              activeItem === "/main" ? "active" : "opacity-[0.5]"
            }`}
          /> */}

          <span
            className={`text-[11px] font-medium text-[#04060a]  ${
              activeItem === "/main"
                ? "active"
                : "text-[#768096]  opacity-[0.5]"
            }`}
          >
            Account
          </span>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          zIndex: 500,
          cursor: dragging ? "grabbing" : "pointer",
          transition: dragging ? "none" : "all 0.2s ease-out", // Smooth transitions when not dragging
        }}
        onMouseDown={handleStartDragging} // Start dragging on mouse down
        onTouchStart={handleStartDragging} // Start dragging on touch start (mobile)
        onMouseMove={(e) => e.preventDefault()} // Prevent page from scrolling while moving the image
      >
        <div
          onClick={handleClicks} // Handle click or prevent redirection when dragging
          style={{ display: "inline-block" }}
        >
          <img src={ServiceImg} alt="Service" className="w-14" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
