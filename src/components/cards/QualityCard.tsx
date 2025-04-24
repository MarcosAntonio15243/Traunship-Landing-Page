
interface QualityCardProps {
  icon: string;
  title: string;
  content?: string;
}

export default function QualityCard({ icon, title, content }: QualityCardProps) {
  return (
    <div className="flex flex-row gap-5 min-w-full items-center">
      <img src={`/assets/${icon}.webp`} alt={`${icon}`} className="w-[25vh] h-[25vh] rounded-2xl" />
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-[var(--gray)] text-sm">{content || "Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"}</p>
        <a className="text-[var(--caramel)]">Learn more</a>
      </div>
    </div>
  )
}