import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="">
      <section className="relative px-40 py-10 min-h-screen bg-gradient-to-b bg-[url('/assets/rocket-launch.webp')] bg-bottom bg-cover">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <Header />
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <h2 className="text-white text-6xl font-bold mt-32 text-shadow-[4px_2px_4px_rgb(0_0_0_/_0.25)]">Best place to buy rocket</h2>
            <p>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</p>
          </div>
        </div>

      </section>

      <p>sdsd</p>
    </main>
  );
}
