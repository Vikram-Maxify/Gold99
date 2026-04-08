import React, { useEffect, useRef, useState } from "react";
import Wingos from "../../assets/bdgimg/origin/lotterycategory_20250213095756garv.png";
import Trxs from "../../assets/trx.png";
import K3s from "../../assets/bdgimg/origin/lotterycategory_20250213095805h23c.png";
import Fiveds from "../../assets/bdgimg/origin/lotterycategory_2025021309581453ip.png";
import Trx from "../../assets/bdgimg/origin/lotterycategory_202503241646119i36.png";
import Dragon from "../../assets/dragon.png";
import viewImg from "../../assets/tiranga/view.png";
import lobby from "../../assets/download.png";
import flash from "../../assets/flashActive-25f6ceb3.png";
import slot from "../../assets/slotActive-1698877b.png";
import popular from "../../assets/popular-284639e5.png";
import casinos from "../../assets/casino_icon.png";
import video from "../../assets/download (1).png";
import sprots from "../../assets/sportActive-334314d6.png";
import fish from "../../assets/fishActive-511b49c4.png";
import pvc from "../../assets/gamecategory_pvc.png";
import lottery from "../../assets/lotteryActive-3fde2705.png";
import icon from "../../assets/ball_8-075598b0.svg";

import { Link, useNavigate } from "react-router-dom";
import Popular from "./Popular";
import PopularSlider from "./Slider/PopularSlider";
import SlotSlider from "./Slider/SlotSlider";
import RecommendSlider from "./Slider/RecommendSlider";
import Sports from "./Slider/Sports";
import Casino from "./Slider/Casino";
// import Video from "./Slider/Video";
import Recommended from "./Recommended";
import FishSlider from "./Slider/FishSlider";
import Flash from "./Slider/Flash";
import { useDispatch, useSelector } from "react-redux";
import { jilliGame } from "../../store/reducer/gameReducer";
import { rechargeList2 } from "../../store/reducer/authReducer";
import RummySlider from "./Slider/RummySlider";
import Jackpot from "./Slider/Jackpot";

import Spribe from "./Slider/Spribe";
import MiniGame from "./MiniGame";
import SlotsGame from "./SlotsGame";
// import { Casino } from "./AllGameImg";
import FishingGame from "./FishingGame";

const menuItems = [
  { id: 1, label: "Lottery", icon: lobby },
  { id: 2, label: "Mini game", icon: flash },
  { id: 3, label: "Slot", icon: slot },
  { id: 4, label: "Hot Slots", icon: popular },
  { id: 5, label: "Casino", icon: casinos },
  { id: 6, label: "Sports", icon: sprots },
  { id: 7, label: "Fish", icon: fish },
  { id: 8, label: "PVC", icon: pvc },
];

const Categories = () => {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const { userInfo, rechargelistData } = useSelector((state) => state.auth);
  const [gameId, setGameId] = useState();
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [gameName, setName] = useState("");
  const contentRef = useRef(null);
  const [repopup, setRepoup] = useState(false);

  const dispatch = useDispatch();

  const handleCloseRecharge = () => {
    navigate("/wallet/Recharge");
    setRepoup(false);
  };

  const handleJilliOpen = (data) => {
    setGameId(data);
    dispatch(rechargeList2()).then((res) => {
      if (res.payload.data2?.length === 0) {
        setRepoup(true);
      } else {
        setJilliPopup(true);
      }
    });
  };

  const handleJilliSubmit = () => {
    if (userInfo === undefined || userInfo === "") {
      navigate("/login");
    } else {
      if (userInfo?.isdemo === 0) {
        dispatch(jilliGame(gameId)).then((res) => {
          if (res.payload.status) {
            window.open(res.payload.data.url, "_blank");
            setJilliPopup(false);
          }
        });
      } else {
        setBetAlert(true);
        setTimeout(() => {
          setBetAlert(false);
        }, 2000);
      }
    }
  };

  function handleOpen(data) {
    dispatch(rechargeList2()).then((res) => {
      if (res.payload.data2?.length === 0) {
        setRepoup(true);
        setName(data);
      } else {
        navigate(`/${data}`);
      }
    });
  }

  function handleGo() {
    navigate(`/wallet/Recharge`);
    setOpen(false);
  }

  useEffect(() => {
    dispatch(rechargeList2());
  }, [dispatch]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <>
      <div className={repopup ? "overlay-section block z-10" : "hidden"}></div>

      {repopup && (
        <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            First need to recharge for this game
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%] text-black rounded-bl-lg"
              onClick={() => setRepoup(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 text-white rounded-br-lg w-[50%]"
              onClick={handleCloseRecharge}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Horizontal Scrollable Menu */}
      <div className="grid grid-cols-4 gap-4 py-2 px-2 bg-body scrollbar-hide">
        {menuItems.map((item) => (
          <Link
            key={item}
            to={item.id} // Target section ID
            smooth={true} // Enable smooth scrolling
            duration={500} // Scroll duration
            offset={-200}
            className={`whitespace-nowrap w-full flex-col px-2 rounded text-sm  flex items-center gap-1 ${
              activeTab === item.id
                ? "opacity-100 text-gray-700"
                : " opacity-80 text-gray-500"
            }`}
          >
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center focus:outline-none"
            >
              {/* Background box with icon */}
              <div
                className={`w-20 h-16 rounded-2xl flex items-center justify-center transition-all ${
                  activeTab === item.id
                    ? "gameTypeItemActive shadow-lg"
                    : "gameTypeItem"
                }`}
              >
                <img src={item.icon} alt={item.label} className="w-20 h-16" />
              </div>

              {/* Label below */}
              <span
                className={`text-sm font-medium mt-2 transition-all ${
                  activeTab === item.id ? "text-green-400" : "text-[#6F80A4]"
                }`}
              >
                {item.label}
              </span>
            </button>
          </Link>
        ))}
      </div>

      <div ref={contentRef} className="p-2 overflow-hidden w-full">
        <div className="mt-5">
          {activeTab === 1 && (
            <div>
              <p className="mt-2 flex items-center gap-2 text-base font-semibold px-4">
                <span>
                  <img src={icon} className="size-6" alt="icon" />
                </span>{" "}
                Lottery
              </p>
              <div className="grid grid-cols-12 gap-2 mt-2">
                <div
                  className=" col-span-6 "
                  onClick={() => handleOpen(`wingo?Game=${10}`)}
                >
                  <img
                    src={Wingos}
                    alt="Wingos"
                    className="w-full h-auto rounded-lg "
                  />
                </div>

                <div className=" col-span-6 " onClick={() => handleOpen("k3")}>
                  <img
                    src={K3s}
                    alt="K3"
                    className="w-full h-auto rounded-lg "
                  />
                </div>
                <div className=" col-span-6 " onClick={() => handleOpen("5d")}>
                  <img
                    src={Fiveds}
                    alt="5D"
                    className="w-full h-auto rounded-lg "
                  />
                </div>

                <div className=" col-span-6 " onClick={() => handleOpen("trx")}>
                  <img
                    src={Trx}
                    alt="trx"
                    className="w-full h-auto rounded-lg "
                  />
                </div>
              </div>
              {/* <Spribe />
              <Flash />
              <RecommendSlider />
              <SlotSlider />
              <RummySlider />
              <FishSlider />
              <PopularSlider />
              <Sports /> */}
              {/* <Jackpot /> */}
            </div>
          )}
          {activeTab === 2 && <MiniGame />}
          {activeTab === 3 && <SlotsGame />}

          {activeTab === 4 && (
            <div className="">
              <RummySlider />
            </div>
          )}

          {activeTab === 5 && (
            <div>
              <Casino />
            </div>
          )}
          {activeTab === 6 && (
            <div className="">
              <Sports />
            </div>
          )}

          {activeTab === 7 && <FishingGame />}
        </div>
      </div>

      <div className={open ? "overlay-section block" : "hidden"}></div>

      {open && (
        <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2 text-center">
            If You want to open this game <br />
            minimum recharge 200
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%] rounded-bl-lg"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 rounded-br-lg w-[50%]"
              onClick={handleGo}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className={jilliPopup ? "overlay-section block" : "hidden"}></div>

      {jilliPopup && (
        <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            Are you sure you want to join the game?
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%] text-black rounded-bl-lg"
              onClick={() => setJilliPopup(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 rounded-br-lg text-white w-[50%]"
              onClick={handleJilliSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
