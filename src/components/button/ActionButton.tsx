
interface ActionButtonProps {
  type?: "primary" | "secondary";
  styles?: string;
  children: React.ReactNode;
}

export default function ActionButton({ type="primary", styles="", children, ...props }: ActionButtonProps) {
  const baseStyles = "cursor-pointer text-white text-sm px-5 py-3 rounded-full";
  const variants = {
    primary: "bg-[var(--caramel)]",
    secondary: "border-1",
  };
  
  return (
    <button className={`${baseStyles} ${styles} ${variants[type]}`} {...props}>
      {children}
    </button>
  )
}