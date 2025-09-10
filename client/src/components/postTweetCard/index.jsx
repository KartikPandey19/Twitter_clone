import {
  FaRegImage,
  FaRegSmile,
  FaChartBar,
  FaRegClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiFileGifLine } from "react-icons/ri";
import { GiFeather } from "react-icons/gi";

export const PostTweetCard=()=> {
  return (
    <div className="bg-black text-white p-4 border-b border-gray-800 flex space-x-3">
      {/* Profile picture */}
      <img
        src="https://placekitten.com/40/40"
        alt="profile"
        className="w-10 h-10 rounded-full"
      />

      {/* Input + Icons */}
      <div className="flex-1">
        {/* Input */}
        <textarea
          placeholder="What's happening?"
          className="w-full bg-black text-gray-300 resize-none outline-none text-lg placeholder-gray-500"
          rows={2}
        />

        {/* Icons + Button */}
        <div className="flex justify-between items-center mt-3">
          {/* Icons */}
          <div className="flex space-x-4 text-sky-500 text-lg">
            <FaRegImage className="cursor-pointer hover:text-sky-400" />
            <RiFileGifLine className="cursor-pointer hover:text-sky-400" />
            <GiFeather className="cursor-pointer hover:text-sky-400" />
            <FaChartBar className="cursor-pointer hover:text-sky-400" />
            <FaRegSmile className="cursor-pointer hover:text-sky-400" />
            <FaRegClock className="cursor-pointer hover:text-sky-400" />
            <FaMapMarkerAlt className="cursor-pointer hover:text-sky-400" />
          </div>

          {/* Post button */}
          <button className="bg-sky-500 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-sky-600 disabled:opacity-50">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
