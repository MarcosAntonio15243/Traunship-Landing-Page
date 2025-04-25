import { HTMLAttributes } from "react";

interface NavBarProps extends HTMLAttributes<HTMLElement> {
  styles?: string;
}

export default function NavBar({ styles = "", ...props }: NavBarProps) {
  let navItens = [
    {
      value: "Feature",
      link: "#features",
    },
    {
      value: "Products",
      link: "#products",
    },
    {
      value: "Testemonial",
      link: "#testemonial",
    },
    {
      value: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className={`flex text-sm ${styles}`} {...props}>
      {navItens.map((e, index) => {
        return (
          <a key={index} href={e.link} className="hover:underline">
            {e.value}
          </a>
        );
      })}
    </nav>
  );
}
