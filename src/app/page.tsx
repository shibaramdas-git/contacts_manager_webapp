"use client";
import { FaHeart } from "react-icons/fa";
import Contact from "@/components/Contact";
import ContactsDisplay from "@/components/ContactsDisplay";
import Header from "@/components/Header";
import Index from "@/components/Index";
import FavouriteContacts from "@/components/FavouriteContacts";
import AddContact from "@/components/modals/AddContact";
import { favoriteContactsData, contactsData } from "@/lib/data";
import { useState } from "react";
import ViewContact from "@/components/modals/ViewContact";

export default function Home() {
  const [favoriteContacts, setFavoriteContacts] =
    useState(favoriteContactsData);
  const [contacts, setContacts] = useState(contactsData);
  const [isModalOpen, setIsModalOpen] = useState({});

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
      <AddContact />
      <ViewContact />
    </>
  );
}
