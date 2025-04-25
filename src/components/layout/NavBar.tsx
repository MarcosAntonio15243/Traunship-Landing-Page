
interface NavBarProps {
  styles?: string;
}

export default function NavBar({ styles="", ...props }: NavBarProps) {
  let navItens = ["Features", "Products", "Testemonial", "Contact"];

  return (
    <nav className={`flex text-sm ${styles}`} {...props}>
      {navItens.map((e, index) => {
        return (
          <a key={index} href="#" className="hover:underline">
            {e}
          </a>
        );
      })}
    </nav>
  );
}
