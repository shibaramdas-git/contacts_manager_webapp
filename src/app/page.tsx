import Image from "next/image";
import { IoIosContacts } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Contact from "@/components/Contact";
import ContactsDisplay from "@/components/ContactsDisplay";
export default function Home() {
  return (
    <>
      <div className="font-sans relative h-full overflow-y-auto flex-1 ">
        <div className="w-full border border-slate-300 shadow-md bg-black rounded-lg text-gray-300 text-sm  relative">
          {/* logo , heading, search(name) */}
          <header className="sticky w-full top-0 bg-black z-50">
            <div className="">
              <div className="flex justify-center items-center my-2">
                <div className="">
                  <IoIosContacts className="block mx-auto text-[60px] text-cyan-200" />
                </div>
                <h1 className="text-center text-xl text-white">
                  {" "}
                  Contacts Manager
                </h1>
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

          {/* favorite contacts, a - z contacts   */}
          <main className="px-4 relative">
            {/* favorite contacts */}
            <section>
              <h2 className="pb-2">Favourites</h2>
              <div className="flex flex-col gap-3">
                <Contact
                  name="Test Contact person"
                  imgUrl="https://picsum.photos/200/200"
                />
                <Contact
                  name="Test Contact person"
                  imgUrl="https://picsum.photos/200/200"
                />
                <Contact
                  name="Test Contact person"
                  imgUrl="https://picsum.photos/200/200"
                />
                <Contact
                  name="Test Contact person"
                  imgUrl="https://picsum.photos/200/200"
                />
                <Contact
                  name="Test Contact person"
                  imgUrl="https://picsum.photos/200/200"
                />
              </div>
              <hr className="mt-3 mb-2 border-gray-800" />
            </section>
            {/* a-z contacts */}
            <section>
              <ContactsDisplay data={contacts} />
            </section>
          </main>
        </div>
      </div>
      {/* a-z index  */}
      <aside className="relative top-[140px] left-[-36px]">
        <div className="flex flex-col gap-1 justify-center items-center text-xs leading-3 w-[20px] rounded-md bg-neutral-800 text-neutral-400 py-2 ml-auto">
          <span>
            <FaHeart className="text-red-500" />
          </span>
          <span className="text-blue-500">A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
          <span>H</span>
          <span>I</span>
          <span>J</span>
          <span>K</span>
          <span>L</span>
          <span>M</span>
          <span>N</span>
          <span>O</span>
          <span>P</span>
          <span>Q</span>
          <span>R</span>
          <span>S</span>
          <span>T</span>
          <span>U</span>
          <span>V</span>
          <span>W</span>
          <span>X</span>
          <span>Y</span>
          <span>Z</span>
          <span>#</span>
        </div>
      </aside>
    </>
  );
}

const contacts = {
  A: [
    { name: "Alice Johnson", imgUrl: "https://picsum.photos/id/1010/200/200" },
    { name: "Alice Johnson", imgUrl: "https://picsum.photos/id/1010/200/200" },
    { name: "Alice Johnson", imgUrl: "https://picsum.photos/id/1010/200/200" },
    { name: "Alice Johnson", imgUrl: "https://picsum.photos/id/1010/200/200" },
  ],
  B: [
    { name: "Bob Smith", imgUrl: "https://picsum.photos/id/1011/200/200" },

    { name: "Bob Smith", imgUrl: "https://picsum.photos/id/1011/200/200" },
    { name: "Bob Smith", imgUrl: "https://picsum.photos/id/1011/200/200" },
    { name: "Bob Smith", imgUrl: "https://picsum.photos/id/1011/200/200" },
  ],
  C: [
    { name: "Charlie Brown", imgUrl: "https://picsum.photos/id/1012/200/200" },
    { name: "Charlie Brown", imgUrl: "https://picsum.photos/id/1012/200/200" },
    { name: "Charlie Brown", imgUrl: "https://picsum.photos/id/1012/200/200" },
    { name: "Charlie Brown", imgUrl: "https://picsum.photos/id/1012/200/200" },
  ],
  D: [
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
    { name: "Diana Prince", imgUrl: "https://picsum.photos/id/1013/200/200" },
  ],
  E: [
    { name: "Edward Cullen", imgUrl: "https://picsum.photos/id/1014/200/200" },
    { name: "Edward Cullen", imgUrl: "https://picsum.photos/id/1014/200/200" },
  ],
  "#": [{ name: "", imgUrl: "https://picsum.photos/id/1010/200/200" }],
};
