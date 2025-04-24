
export default function Header() {
  let navItens = ["Features", "Products", "Testemonial", "Contact"];

  return (
    <header className="w-full flex flex-row justify-between items-center text-[var(--white)]">
      <h1 className="font-bold cursor-pointer text-2xl">Traunship</h1>
      <nav className={`flex flex-row gap-10 text-sm`}>
        {
          navItens.map((e, index) => {
            return (
              <a key={index} href="#" className="hover:underline">{e}</a>
            )
          })
        }
      </nav>
      <button className="cursor-pointer text-sm bg-[var(--caramel)] px-5 py-2 rounded-full">Try a demo</button>
    </header>
  )
}