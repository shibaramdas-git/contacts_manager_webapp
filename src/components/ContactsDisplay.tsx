import Contact from "./Contact";

export type contactType = {
  name: string;
  imgUrl?: string;
};
export type groupedContactsType = {
  [key: string]: contactType[];
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

              {data[key].map((contact) => (
                <Contact name={contact.name} imgUrl={contact.imgUrl} />
              ))}
            </div>
          );
        })}
    </div>
  );
}
