import React from "react";
import Contact, { ContactType } from "./Contact";

export type FavouriteProps = {
  data: ContactType[];
};
export default function FavouriteContacts({ data }: FavouriteProps) {
  return (
    <section>
      <h2 className="pb-2">Favourites</h2>
      <div className="flex flex-col gap-3">
        {data.map((contact, idx) => (
          <Contact key={`${contact.name}-${idx}`} {...contact} />
        ))}
      </div>
      <hr className="mt-3 mb-2 border-gray-800" />
    </section>
  );
}
