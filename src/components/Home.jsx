import { useState } from "react";
import Hero from "./Hero";
import homeBg from "../assets/homeBg.png";
function Home() {
  const [lang, setLang] = useState("en");

  return (
    <div
      dir={lang === "ku" ? "rtl" : "ltr"}
      className={`${lang === "ku" ? "font-arabic" : "font-display"} px-5 animate-fade-in bg-cover bg-no-repeat bg-center  w-full min-h-screen`}
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <Hero lang={lang} />
      <div
        title="divider"
        className="flex items-center justify-start gap-5 p-5 mt-5"
      >
        <div>Explore</div>
        <div className="h-[1px] w-300 bg-[#C2A26B]"></div>
      </div>
    </div>
  );
}
export default Home;
