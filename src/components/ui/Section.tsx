
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({className="", children, ...props}: SectionProps) {
  const defaultClass = "p-10 md:px-15 lg:px-40 lg:py-10";
  return (
    <section className={`${defaultClass} ${className}`} {...props}>
      {children}
    </section>
  )
}