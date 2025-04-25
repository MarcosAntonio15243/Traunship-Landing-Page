
interface SectionProps {
  styles?: string;
  children: React.ReactNode;
}

export default function Section({styles, children, ...props}: SectionProps) {
  return (
    <section className={`p-10 md:px-15 lg:px-40 lg:py-10 ${styles}`} {...props}>
      {children}
    </section>
  )
}