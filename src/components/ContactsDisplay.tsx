import Contact, { ContactType } from "./Contact";

export type groupedContactsType = {
  [key: string]: ContactType[];
};
type ContactsDisplayProps = {
  data: groupedContactsType;
};
export default function ContactsDisplay(props: ContactsDisplayProps) {
  const { data } = props;
  return (
    <div>
      {data &&
        Object.keys(data).map((key) => {
          return (
            <div
              key={key}
              className="py-4 border-b border-gray-600 flex flex-col gap-3"
            >
              <h2>{key}</h2>

              {data[key].map((contact, idx) => (
                <Contact
                  key={`${key}-${idx}`}
                  name={contact.name}
                  imgUrl={contact.imgUrl}
                />
              ))}
            </div>
          );
        })}
    </div>
  );
}
