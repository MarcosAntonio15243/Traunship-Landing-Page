import ActionButton from "@/components/button/ActionButton";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="">
      <section className="relative px-40 py-10 min-h-[110vh] bg-[url('/assets/background.webp')] bg-bottom bg-cover">
        <Header />
        <div className="w-full flex flex-col justify-center items-center gap-6 mt-32 text-white">
          <div className="bg-[var(--caramel)] p-5 rounded-full mb-5"><img src="/assets/play.svg" alt="Vector" /></div>
          <h2 className="text-white text-6xl font-bold text-shadow-[4px_2px_4px_rgb(0_0_0_/_0.25)]">Best place to buy rocket</h2>
          <p>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</p>
          <div className="flex gap-5">
            <ActionButton>Try a demo</ActionButton>
            <ActionButton type="secondary">Buy now</ActionButton>
          </div>
        </div>
      </section>
    </main>
  );
}
