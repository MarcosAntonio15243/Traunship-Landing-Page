interface StorieCardProps {
  icon: string;
  title: string;
  content?: string;
}

export default function StorieCard({ icon, title, content }: StorieCardProps) {
  return (
    <div className="bg-white w-64 min-h-1/2 rounded-md overflow-hidden cursor-pointer duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      {/* <img src={`/assets/${icon}.webp`} alt={`${icon}`} className="w-full h-40" /> */}
      <div
        className={`w-full h-40 bg-[url('/assets/${icon}.webp')] bg-no-repeat bg-center bg-cover`}
      ></div>
      <div className="p-5 flex flex-col gap-5">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-[var(--gray)]">
          {content ||
            "Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"}
        </p>
        <a href="#" className="text-[var(--caramel)] cursor-pointer hover:underline">
          Read Story
        </a>
      </div>
    </div>
  );
}
