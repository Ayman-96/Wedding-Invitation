import { useState } from "react";
import Hero from "./Hero";
import homeBg from "../assets/homeBg.png";
import Explore from "./Explore";
function Home() {
  const [lang, setLang] = useState("ku");
  return (
    <div
      dir={lang === "ku" ? "rtl" : "ltr"}
      className={`${lang === "ku" ? "font-arabic" : "font-display"} px-5 animate-fade-in bg-cover bg-no-repeat bg-center  w-full min-h-screen`}
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <Hero lang={lang} />

      <div
        title="divider"
        className="flex items-center justify-start gap-3 py-5 px-6 mt-4"
      >
        <div className="text-[#5F6B4E] tracking-widest whitespace-nowrap select-none">
          {lang === "ku" ? "زیاتر ببینە" : "Explore"}
        </div>
        <div className="h-[1px] w-300 bg-[#C2A26B]"></div>
      </div>

      <Explore lang={lang} />
    </div>
  );
}
export default Home;
