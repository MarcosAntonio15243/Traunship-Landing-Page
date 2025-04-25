
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({className="", children, ...props}: SectionProps) {
  const defaultClass = "px-5 py-10 lg:px-40 lg:py-20";
  return (
    <section className={`${defaultClass} ${className}`} {...props}>
      {children}
    </section>
  )
}