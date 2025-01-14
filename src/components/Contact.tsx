export type ContactType = {
  name: string;
  imgUrl?: string;
};
export default function Contact(props: ContactType) {
  const { name, imgUrl } = props;
  return (
    <div className="flex items-center gap-3">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden border border-gray-700 flex justify-center items-center bg-gray-800">
        {imgUrl ? (
          <img src={imgUrl} alt="contact person image" />
        ) : (
          <span className="text-2xl text-stone-400 inline-block font-serif">
            {name[0]}
          </span>
        )}
      </div>
      <p className="text-lg"> {name || "Akshay modi"}</p>
    </div>
  );
}
