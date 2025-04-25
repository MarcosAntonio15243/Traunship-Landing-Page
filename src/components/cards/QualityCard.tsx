interface QualityCardProps {
  icon: string;
  title: string;
  content?: string;
}

export default function QualityCard({
  icon,
  title,
  content,
}: QualityCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 min-w-full max-w-[60vw] items-center text-center md:text-left">
      <img src={icon} alt={`${icon}`} className="w-40 h-40 rounded-2xl" />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-[var(--gray)] text-sm">
          {content ||
            "Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"}
        </p>
        <a className="text-[var(--caramel)] cursor-pointer hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
}
