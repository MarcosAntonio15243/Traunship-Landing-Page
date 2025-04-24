
interface ActionButtonProps {
  type?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function ActionButton({ type="primary", children, ...props }: ActionButtonProps) {
  const baseStyles = "cursor-pointer text-sm px-5 py-2 rounded-full";
  const variants = {
    primary: "bg-[var(--caramel)]",
    secondary: "border-1",
  };
  
  return (
    <button className={`${baseStyles} ${variants[type]}`} {...props}>
      {children}
    </button>
  )
}