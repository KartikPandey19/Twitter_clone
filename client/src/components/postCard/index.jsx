
import { FaRegComment, FaRetweet, FaRegHeart, FaChartBar } from "react-icons/fa";

export const PostCard =({})=> {
  return (
    <div className="max-w-md mx-auto bg-black text-white font-sans p-4 border-b border-gray-800 rounded-xl">
      {/* User Info */}
      <div className="flex items-start space-x-3">
        <img
          src=""
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">name</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1DA1F2"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-6.49-3.799a.75.75 0 011.28.772l-4.25 7.5a.75.75 0 01-1.225.152l-2.5-2.75a.75.75 0 111.11-1.012l1.808 1.986 3.777-6.648z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-500">@Fittrwithkj · 12m</span>
          </div>
          {/* Tweet Text */}
          <p className="mt-1 text-[15px]">
            25g protein aur dher saara mental satisfaction
          </p>

          {/* Image */}
          <div className="mt-2 rounded-xl overflow-hidden border border-gray-700">
            <img
              src="https://pbs.twimg.com/media/G0VuRcSXwAAFqVB?format=jpg&name=medium" // replace with your image path
              alt="meal"
              className="w-full"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-3 text-gray-500 text-sm">
            <button className="flex items-center space-x-1 hover:text-sky-500">
              <FaRegComment /> <span>1</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-500">
              <FaRetweet /> <span>2</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-pink-500">
              <FaRegHeart />
            </button>
            <button className="flex items-center space-x-1 hover:text-sky-500">
              <FaChartBar />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
