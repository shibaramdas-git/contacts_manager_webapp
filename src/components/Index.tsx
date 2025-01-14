import React from "react";
import { FaHeart } from "react-icons/fa";

const alphabets = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

export default function Index() {
  return (
    <aside className="relative top-[140px] left-[-36px]">
      <div className="flex flex-col gap-1 justify-center items-center text-xs leading-3 w-[20px] rounded-md bg-neutral-800 text-neutral-400 py-2 ml-auto">
        {alphabets.split("").map((char, idx) => {
          return (
            <div className="">
              {char === "0" ? <FaHeart className="text-red-500" /> : char}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
