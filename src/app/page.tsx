import { FaHeart } from "react-icons/fa";
import Contact from "@/components/Contact";
import ContactsDisplay from "@/components/ContactsDisplay";
import Header from "@/components/Header";
import Index from "@/components/Index";
import FavouriteContacts from "@/components/FavouriteContacts";
export default function Home() {
  return (
    <>
      <div className="font-sans relative h-full overflow-y-auto flex-1 ">
        <div className="w-full border border-slate-300 shadow-md bg-black rounded-lg text-gray-300 text-sm  relative">
          <Header />
          <main className="px-4 relative">
            <FavouriteContacts data={favoriteContacts} />
            <ContactsDisplay data={contacts} />
          </main>
        </div>
      </div>
      <Index />
      {/* Add new contacts */}
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
const favoriteContacts = [
  { name: "Contact 1", imgUrl: "https://picsum.photos/200/200" },
  { name: "Contact 2", imgUrl: "https://picsum.photos/200/200" },
];
