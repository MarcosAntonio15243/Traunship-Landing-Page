
export default function Header() {
  let navItens = ["Features", "Products", "Testemonial", "Contact"];

  return (
    <header className="w-full flex flex-row justify-between items-center">
      <span className="font-bold cursor-pointer text-xl">Traunship</span>
      <nav className={`flex flex-row gap-10`}>
        {
          navItens.map((e, index) => {
            return (
              <a key={index} href="#" className="hover:underline">{e}</a>
            )
          })
        }
      </nav>
      <button className="cursor-pointer text-sm text-[var(--white)] bg-[var(--caramel)] px-5 py-2 rounded-full">Try a demo</button>
    </header>
  )
}