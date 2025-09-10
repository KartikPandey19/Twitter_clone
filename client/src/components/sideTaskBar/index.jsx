import React from "react";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaFeatherAlt,
  FaRegBookmark,
  FaUsers,
  FaBolt,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Sidebar() {
  const menuItems = [
    { icon: <FaHome />, label: "Home", active: true },
    { icon: <FaSearch />, label: "Explore" },
    { icon: <FaUser />, label: "Profile" },

    // { icon: <FaBell />, label: "Notifications", badge: 11 },
    // { icon: <FaEnvelope />, label: "Messages" },
    // { icon: <FaFeatherAlt />, label: "Grok" },
    // { icon: <FaRegBookmark />, label: "Bookmarks" },
    // { icon: <FaUsers />, label: "Communities" },
    // { icon: <RiTwitterXFill />, label: "Premium" },
    // { icon: <FaBolt />, label: "Verified Orgs" },
    // { icon: <FaEllipsisH />, label: "More" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-black text-white flex flex-col justify-between p-4">
      {/* Top Logo + Menu */}
      <div>
        <RiTwitterXFill className="text-3xl mb-6" />

        <nav className="space-y-5">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 cursor-pointer text-lg ${
                item.active ? "font-bold" : "font-normal"
              } hover:text-sky-500`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>

              {item.badge && (
                <span className="ml-2 bg-sky-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        <button className="mt-8 w-full bg-white text-black rounded-full py-2 font-semibold hover:bg-gray-200">
          Post
        </button>
      </div>

      {/* Bottom Profile */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-3">
          <img
            src="https://placekitten.com/40/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm">cyrus</span>
            <span className="text-gray-500 text-xs">@ailurophiles__</span>
          </div>
        </div>
        <FaEllipsisH />
      </div>
    </div>
  );
}
