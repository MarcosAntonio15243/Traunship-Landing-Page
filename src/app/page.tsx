import ActionButton from "@/components/button/ActionButton";
import FeatureCard from "@/components/cards/FeatureCard";
import PeopleTeamCard from "@/components/cards/PeopleTeamCard";
import QualityCard from "@/components/cards/QualityCard";
import StorieCard from "@/components/cards/StorieCard";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="">
      {/* Main Section */}
      <Section className="relative  bg-[url('/assets/background.webp')] bg-bottom bg-cover bg-no-repeat">
        <Header />
        {/* Content */}
        <div className="w-full flex flex-col justify-center items-center text-center gap-6 my-20 md:my-40 text-white">
          {/* Play Button */}
          <div className="bg-[var(--caramel)] cursor-pointer p-5 rounded-full mb-5"><img src="/assets/play.svg" alt="Vector" /></div>
          {/* Text Content */}
          <h2 className="text-white text-6xl font-bold text-shadow-[4px_2px_4px_rgb(0_0_0_/_0.25)]">Best place to buy rocket</h2>
          <p>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</p>
          {/* Actions Buttons */}
          <div className="flex gap-5">
            <ActionButton>Try a demo</ActionButton>
            <ActionButton type="secondary">Buy now</ActionButton>
          </div>
        </div>
      </Section>

      <Section className="flex flex-col items-center gap-10 text-center">
        <h2 className="text-6xl font-bold">Features you can's avoid</h2>
        <p className="text-center text-[var(--gray)]">Lacus purus eu, mauris pretium mollis ac id mauris eget. Id diam enim faucibus pellentesque mi massa. Nmet nullam sed habitasse dignissim viverra congue nisl</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mt-16 mb-10">
        <FeatureCard icon={"stage-separation"} title={"Solid Fuel"} />
        <FeatureCard icon={"soyuz-space-craft"} title={"Liquid Fuel"} />
        <FeatureCard icon={"starship"} title={"Ion Rocket"} />
        <FeatureCard icon={"ufo"} title={"Plasma Rocket"} />
        <FeatureCard icon={"command-module"} title={"Supersonic Rocket"} />
        <FeatureCard icon={"lunar-lander"} title={"Ultra Rocket"} />
        </div>
      </Section>

      <section className="bg-[var(--biscuit)] md:grid md:grid-cols-3 lg:grid-cols-2 justify-between text-[var(--brown)]">
        <div className="hidden md:block bg-[url('/assets/nebula.webp')] bg-no-repeat bg-cover bg-right"></div>
        <div className="flex flex-col gap-5 p-10 md:py-30 md:px-20 md:col-span-2 lg:col-span-1">
          <h3 className="text-6xl font-semibold">“Right time to invest into space”</h3>
          <p>Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus eu, mauris pretium mollis ac id mauris eget.</p>
          <div className="flex flex-row items-center gap-5">
            <img src="https://bit.ly/dan-abramov" className="size-20 rounded-full" />
            <div>
              <p className="font-semibold">Milion Ask</p>
              <p>CEO, Blackhole</p>
            </div>
          </div>
        </div>
      </section>

      <Section className="flex flex-col items-center gap-5">
        <h2 className="text-6xl font-bold text-center">Affordable, good quality.</h2>
        <p className="text-center text-[var(--gray)]">Lacus purus eu, mauris pretium mollis ac id mauris eget. Id diam enim faucibus pellentesque mi massa. Nmet nullam sed habitasse dignissim viverra congue nisl</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-10 gap-5 lg:gap-10 justify-between">
          <QualityCard icon={"marsRover"} title={"Millions pouns of thrust"} />
          <QualityCard icon={"marsRover"} title={"Millions pouns of thrust"} />
          <QualityCard icon={"marsRover"} title={"Millions pouns of thrust"} />
          <QualityCard icon={"marsRover"} title={"Millions pouns of thrust"} />
        </div>
      </Section>

      <section className="px-5 py-10 lg:px-30 lg:py-20 bg-[#F7F9FC] flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-5 lg:gap-10 items-center lg:items-baseline">
          <h2 className="text-6xl sm:text-5xl font-bold mt-10 text-center lg:text-left">Don’t miss Rocket Science blog</h2>
          <p className="text-[var(--gray)] text-center lg:text-left">Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus eu, mauris pretium mollis ac id mauris eget.</p>
          <ActionButton>All stories</ActionButton>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 max-sm:items-center sm:justify-center w-full">
          <StorieCard icon={"background"} title={"“Rocket lab boots its space system”"} />
          <StorieCard icon={"background"} title={"“NASA’s big rocket misses deadline”"} />
        </div>
      </section>

      <section className="px-5 pt-10 pb-36 lg:px-40 lg:pt-20 flex flex-wrap justify-center gap-15 bg-[var(--dark)] bg-[url('/assets/shapeRoundedBottom.webp')] bg-bottom bg-cover bg-no-repeat">
        <PeopleTeamCard icon={"https://bit.ly/dan-abramov"} description={"I brought a rocket for my son in his 14th birthday. I liked their service. Love it."} name={"Wade Warren"} profession={"Astronaut"} />
        <PeopleTeamCard icon={"https://i.pravatar.cc/400?u=1"} description={"They delivered my custom rocket as fast as the rocket itself. Mindblowing."} name={"Esther Howard"} profession={"Apollo 11 Pilot"} />
        <PeopleTeamCard icon={"https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd"} description={"II found awesome customer service from them. They fixed my rocket within a day."} name={"Cameron Williamson"} profession={"NASA Manager"} />
      </section>

    </main>
  );
}
