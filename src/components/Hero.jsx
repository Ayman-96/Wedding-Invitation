import { useEffect, useState } from "react";
import bismillah from "../assets/bismillah.png";
import headDesign from "../assets/AandK.png";
function Hero({ lang }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const content = {
    en: {
      title: "Ahmad & Kaya",
      subtitle: "Together with their families",
      date: "SATURDAY ❁ OCTOBER 4 ❁ 2026",
    },
    ku: {
      title: "ئەحمەد & کایا",
      subtitle: "بۆنەی مارەبڕین",
      date: "شەممە ❁ ٤ بەفرانبار  ❁ ٢٠٢٦",
    },
  };

  const styleCountdown =
    "flex flex-col items-center justify-center p-2 w-28 font-bold text-xl text-[#5F6B4E] bg-[#F1E8D8] border border-[#C2A26B] rounded-2xl";
  function formatNum(num, lang) {
    return lang === "ku" ? num.toLocaleString("ar-EG") : num;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remained = new Date("2026-10-04:12:12").getTime() - now;

      if (remained < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, secons: 0 });
      }

      setTimeLeft({
        days: Math.floor(remained / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (remained % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((remained % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remained % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-center flex-col select-none"
      draggable={false}
    >
      <div title="topImg">
        <img
          src={bismillah}
          className="w-55 min-h-full  select-none"
          draggable={false}
        />
      </div>
      <div>
        <img
          src={headDesign}
          className="w-40 min-h-full ml-7  select-none"
          draggable={false}
        />
      </div>

      <div className="flex items-center justify-center gap-2 flex-col mt-2">
        <div className="capitalize text-[0.75rem] text-[#638C6C] bg-[#C2A26B]/20 tracking-[0.20rem] uppercase">
          {content[lang].subtitle}
        </div>
        <div className="text-[40px] tracking-widest font-bold -mt-2 text-[#5F6B4E]">
          {content[lang].title}
        </div>
        <div className="text-md tracking-widest text-[#3D3D35]">
          {content[lang].date}
        </div>
      </div>

      <div
        title="timer"
        className="flex items-center justify-center gap-3 mt-5"
      >
        <div className={styleCountdown}>
          {formatNum(timeLeft.days, lang)}{" "}
          <span className="font-normal">{lang === "ku" ? "ڕۆژ" : "days"}</span>
        </div>
        <div className={styleCountdown}>
          {formatNum(timeLeft.hours, lang)}{" "}
          <span className="font-normal">
            {lang === "ku" ? "کاتژمێر" : "hours"}
          </span>
        </div>
        <div className={styleCountdown}>
          <div>
            {formatNum(timeLeft.minutes, lang)}
            <span className="text-sm font-semibold">
              {" "}
              :{formatNum(timeLeft.seconds, lang)}
            </span>
          </div>

          <span className="font-normal">
            {lang === "ku" ? "خولەک" : "minutes"}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Hero;
