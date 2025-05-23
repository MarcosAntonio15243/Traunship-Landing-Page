import ActionButton from "@/components/button/ActionButton";
import FeatureCard from "@/components/cards/FeatureCard";
import PeopleTeamCard from "@/components/cards/PeopleTeamCard";
import QualityCard from "@/components/cards/QualityCard";
import StorieCard from "@/components/cards/StorieCard";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

export default function Home() {
  const features = [
    {
      icon: "/assets/featureIcons/stage-separation.svg",
      title: "Solid Fuel",
    },
    {
      icon: "/assets/featureIcons/soyuz-space-craft.svg",
      title: "Liquid Fuel",
    },
    {
      icon: "/assets/featureIcons/starship.svg",
      title: "Ion Rocket",
    },
    {
      icon: "/assets/featureIcons/ufo.svg",
      title: "Plasma Rocket",
    },
    {
      icon: "/assets/featureIcons/command-module.svg",
      title: "Supersonic Rocket",
    },
    {
      icon: "/assets/featureIcons/lunar-lander.svg",
      title: "Ultra Rocket",
    },
  ];

  const products = [
    {
      icon: "/assets/marsRover.webp",
      title: "Millions pouns of thrust",
    },
    {
      icon: "/assets/marsRover.webp",
      title: "More than 1,300 missions",
    },
    {
      icon: "/assets/marsRover.webp",
      title: "Atlas launched Friendship",
    },
    {
      icon: "/assets/marsRover.webp",
      title: "Separate Spacecraft",
    },
  ];

  const peopleTeam = [
    {
      icon: "https://bit.ly/dan-abramov",
      description:
        "I brought a rocket for my son in his 14th birthday. I liked their service. Love it.",
      name: "Wade Warren",
      profession: "Astronaut",
    },
    {
      icon: "https://i.pravatar.cc/400?u=1",
      description:
        "They delivered my custom rocket as fast as the rocket itself. Mindblowing.",
      name: "Esther Howard",
      profession: "Apollo 11 Pilot",
    },
    {
      icon: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
      description:
        "II found awesome customer service from them. They fixed my rocket within a day.",
      name: "Cameron Williamson",
      profession: "NASA Manager",
    },
  ];

  return (
    <main className="">
      <Section className="relative  bg-[url('/assets/background.webp')] bg-bottom bg-cover bg-no-repeat">
        <Header />
        <div className="w-full flex flex-col justify-center items-center text-center gap-6 my-20 md:my-40 text-white">
          <div className="bg-[var(--caramel)] cursor-pointer p-5 rounded-full mb-5 text-2xl">
            <IoPlayOutline />
          </div>
          <h2 className="text-white max-sm:text-5xl text-6xl font-bold text-shadow-[4px_2px_4px_rgb(0_0_0_/_0.25)]">
            Best place to buy rocket
          </h2>
          <p>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</p>
          <div className="flex gap-5">
            <ActionButton>Try a demo</ActionButton>
            <ActionButton type="secondary">Buy now</ActionButton>
          </div>
        </div>
      </Section>

      <Section
        id="features"
        className="flex flex-col items-center gap-10 text-center"
      >
        <h2 className="max-sm:text-5xl text-6xl font-bold">Features you can's avoid</h2>
        <p className="text-center text-[var(--gray)]">
          Lacus purus eu, mauris pretium mollis ac id mauris eget. Id diam enim
          faucibus pellentesque mi massa. Nmet nullam sed habitasse dignissim
          viverra congue nisl
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mt-16 mb-10">
          {features.map((e, index) => {
            return <FeatureCard key={index} icon={e.icon} title={e.title} />;
          })}
        </div>
      </Section>

      <section
        id="testemonial"
        className="bg-[var(--biscuit)] md:grid md:grid-cols-3 lg:grid-cols-2 justify-between text-[var(--brown)]"
      >
        <div className="hidden md:block bg-[url('/assets/nebula.webp')] bg-no-repeat bg-cover bg-right"></div>
        <div className="flex flex-col gap-5 p-10 md:py-30 md:px-20 md:col-span-2 lg:col-span-1">
          <h3 className="max-sm:text-5xl text-6xl font-semibold">
            “Right time to invest into space”
          </h3>
          <p>
            Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus
            eu, mauris pretium mollis ac id mauris eget.
          </p>
          <div className="flex flex-row items-center gap-5">
            <img
              src="https://bit.ly/dan-abramov"
              alt="Milion Ask image"
              className="size-20 rounded-full"
            />
            <div>
              <p className="font-semibold">Milion Ask</p>
              <p>CEO, Blackhole</p>
            </div>
          </div>
        </div>
      </section>

      <Section id="products" className="flex flex-col items-center gap-5">
        <h2 className="max-sm:text-5xl text-6xl font-bold text-center">
          Affordable, good quality.
        </h2>
        <p className="text-center text-[var(--gray)]">
          Lacus purus eu, mauris pretium mollis ac id mauris eget. Id diam enim
          faucibus pellentesque mi massa. Nmet nullam sed habitasse dignissim
          viverra congue nisl
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-10 gap-5 lg:gap-10 justify-between">
          {products.map((e, index) => {
            return <QualityCard key={index} icon={e.icon} title={e.title} />;
          })}
        </div>
      </Section>

      <section className="px-5 py-10 lg:px-30 lg:py-20 bg-[#F7F9FC] flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-5 lg:gap-10 items-center lg:items-baseline">
          <h2 className="max-sm:text-5xl text-6xl sm:text-5xl font-bold mt-10 text-center lg:text-left">
            Don’t miss Rocket Science blog
          </h2>
          <p className="text-[var(--gray)] text-center lg:text-left">
            Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus
            eu, mauris pretium mollis ac id mauris eget.
          </p>
          <ActionButton>All stories</ActionButton>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 max-sm:items-center sm:justify-center w-full">
          <StorieCard
            icon={"background"}
            title={"“Rocket lab boots its space system”"}
          />
          <StorieCard
            icon={"background"}
            title={"“NASA’s big rocket misses deadline”"}
          />
        </div>
      </section>

      <section
        id="contact"
        className="px-5 pt-10 pb-36 lg:px-40 lg:pt-20 flex flex-wrap justify-center gap-15 bg-[var(--dark)] bg-[url('/assets/shapeRoundedBottom.webp')] bg-bottom bg-cover bg-no-repeat mt-[-2px]"
      >
        {peopleTeam.map((e, index) => {
          return (
            <PeopleTeamCard
              key={index}
              icon={e.icon}
              description={e.description}
              name={e.name}
              profession={e.profession}
            />
          );
        })}
      </section>

      <footer className="px-5 py-10 lg:px-40 lg:pt-20 bg-[var(--dark)] text-[var(--white)] mt-[-1px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-10 pb-10 border-b-[0.5px] border-b-white/50 gap-10 sm:gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold">Traunship</h3>
            <div className="text-sm flex flex-col gap-3">
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p>(684) 555-0102</p>
              <p>(603) 555-0123</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="text-sm flex flex-col gap-3 font-bold">
              <a
                href="#features"
                className="hover:underline hover:text-[var(--caramel)]"
              >
                Features
              </a>
              <a
                href="#products"
                className="hover:underline hover:text-[var(--caramel)]"
              >
                Products
              </a>
              <a
                href="#testemonial"
                className="hover:underline hover:text-[var(--caramel)]"
              >
                Testemonial
              </a>
              <a
                href="#contact"
                className="hover:underline hover:text-[var(--caramel)]"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-7">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <form className="flex flex-col gap-5 bg-white/15 px-5 py-8 rounded-lg">
              <label htmlFor="email">When send updates in every week</label>
              <span className="flex flex-row gap-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="off"
                  className="outline-none bg-white text-gray-800 px-4 py-2 rounded-sm w-full"
                />
                <input
                  type="submit"
                  value="Go"
                  className="cursor-pointer bg-[var(--caramel)] text-white text-sm px-6 py-2 rounded-full"
                />
              </span>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row justify-between items-center">
          <p>© 2021 Traunship. All right reserved.</p>
          <div className="flex flex-row gap-5">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>
      </footer>
    </main>
  );
}
