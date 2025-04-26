import ActionButton from "../button/ActionButton";
import HeaderButton from "../button/HeaderButton";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center text-[var(--white)]">
      <h1 className="font-bold cursor-pointer text-2xl">Traunship</h1>
      <NavBar styles="hidden gap-10 md:flex" />
      <ActionButton styles="hidden flex-row md:block">Try a demo</ActionButton>
      <div className="md:hidden relative">
        <HeaderButton />
      </div>
    </header>
  );
}
