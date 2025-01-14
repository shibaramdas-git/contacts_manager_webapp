import { IoIosContacts } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <header className="sticky w-full top-0 bg-black z-50">
      <div className="">
        <div className="flex justify-center items-center my-2">
          <div className="">
            <IoIosContacts className="block mx-auto text-[60px] text-cyan-200" />
          </div>
          <h1 className="text-center text-xl text-white"> Contacts Manager</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-[75%] px-4 py-2 text-gray-700 bg-stone-800 border border-stone-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
            />
            <button className=" text-black hover:bg-gray-200 focus:outline-none border border-gray-400 inline-flex justify-center items-center w-[23%] ml-1 bg-white rounded-lg py-2">
              <FaSearch /> Search
            </button>
          </div>
        </div>
        <hr className="mt-3 mb-2 border-gray-800" />
      </div>
    </header>
  );
}
