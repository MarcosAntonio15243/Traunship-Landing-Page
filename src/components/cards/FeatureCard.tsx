interface FeatureCardProps {
  icon: string;
  title: string;
  content?: string;
}

export default function FeatureCard({
  icon,
  title,
  content,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-5 max-w-xs items-center text-center">
      <img src={icon} alt={`${icon}`} />
      <h3 className="font-semibold text-2xl text-[var(--caramel)]">{title}</h3>
      <p className="text-[var(--gray)]">
        {content ||
          "Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"}
      </p>
    </div>
  );
}
