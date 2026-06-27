import PetalBackground from "./components/PetalBackground";
import Hero from "./components/Hero";
import NameSection from "./components/NameSection";
import Flashcards from "./components/Flashcards";
import FlowerGarden from "./components/FlowerGarden";
import IconsSection from "./components/IconsSection";
import BirthdayWish from "./components/BirthdayWish";
import { content } from "./data/content";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FDF6F0] overflow-x-hidden">
      <PetalBackground />

      <div className="relative">
        <Hero content={content.hero} />

        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-px bg-rose-200" />
        </div>

        <NameSection content={content.nameSection} />

        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-px bg-rose-200" />
        </div>

        <Flashcards cards={content.flashcards} />

        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-px bg-rose-200" />
        </div>

        <FlowerGarden flowers={content.flowers} />

        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-px bg-rose-200" />
        </div>

        {/* <IconsSection icons={content.icons} />

        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-px bg-rose-200" />
        </div> */}

        <BirthdayWish content={content.wish} />
      </div>
    </div>
  );
}
