import Hero from "./Hero";
import homeBg from "../assets/homeBg.png";
import Explore from "./Explore";
import Footer from "./Footer";
function Home({ lang }) {
  return (
    <div
      dir={lang === "ku" ? "rtl" : "ltr"}
      className={`${lang === "ku" ? "font-kurdish" : "font-display"} px-5 animate-fade-in 
      bg-cover bg-repeat-y bg-center w-full min-h-screen`}
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <Hero lang={lang} />

      <div
        title="divider"
        className="flex items-center justify-start gap-3 py-5 px-6 mt-4"
      >
        <div
          className={`text-[#5F6B4E] tracking-widest whitespace-nowrap select-none ${lang === "ku" ? "font-ku-display font-semibold text-lg" : "font-display"}`}
        >
          {lang === "ku" ? "زیاتر بـبـیـنـە" : "Explore"}
        </div>
        <div className="h-px w-300 bg-[#C2A26B]"></div>
      </div>

      <div className="flex flex-col gap-10">
        <Explore lang={lang} />

        <Footer lang={lang} />
      </div>
    </div>
  );
}
export default Home;
