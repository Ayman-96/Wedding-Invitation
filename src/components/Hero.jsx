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
      title: "Ahmad Kaya",
      subtitle: "Together with their families",
      date: "SATURDAY ❁ OCTOBER 4 ❁ 2026",
    },
    ku: {
      title: "ئەحمەد کایا",
      subtitle: "بۆنەی مارەبڕین",
      date: "شەممە ❁ ٤ بەفرانبار  ❁ ٢٠٢٦",
    },
  };
  const names = content[lang].title.split(" ");

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
          className="w-60 min-h-full select-none"
          draggable={false}
        />
      </div>
      <div>
        <img
          src={headDesign}
          className="w-40 min-h-full select-none"
          draggable={false}
        />
      </div>

      <div
        dir="ltr"
        className="flex items-center justify-center gap-2 flex-col mt-2"
      >
        <div
          className={`text-[0.75rem] px-2 text-[#638C6C] bg-[#C2A26B]/20 tracking-[0.20rem] uppercase ${lang === "ku" ? "font-ku-body" : "font-body"}`}
        >
          {content[lang].subtitle}
        </div>
        <div
          className={`text-[40px] tracking-widest font-bold -mt-2 text-[#5F6B4E] ${lang === "ku" ? "font-ku-display" : "font-display"}`}
        >
          {names[0]} <em className="font-display">&amp;</em> {names[1]}
        </div>
        <div
          className={`text-md tracking-widest text-[#3D3D35] ${lang === "ku" ? "font-ku-body" : "font-body"}`}
        >
          {content[lang].date}
        </div>
      </div>

      <div
        title="timer"
        className="flex items-center justify-center gap-3 mt-5"
      >
        <div className={styleCountdown}>
          {formatNum(timeLeft.days, lang)}{" "}
          <span
            className={`font-normal ${lang === "ku" ? "font-ku-display" : "font-display"}`}
          >
            {lang === "ku" ? "ڕۆژ" : "days"}
          </span>
        </div>
        <div className={styleCountdown}>
          {formatNum(timeLeft.hours, lang)}{" "}
          <span
            className={`font-normal ${lang === "ku" ? "font-ku-display" : "font-display"}`}
          >
            {lang === "ku" ? "کاتژمێر" : "hours"}
          </span>
        </div>
        <div className={styleCountdown}>
          {lang === "ku" ? (
            <div>
              <span className="text-sm font-semibold">
                {formatNum(timeLeft.seconds, lang)}:{" "}
              </span>
              {formatNum(timeLeft.minutes, lang)}
            </div>
          ) : (
            <div>
              {formatNum(timeLeft.minutes, lang)}
              <span className="text-sm font-semibold">
                {" "}
                :{formatNum(timeLeft.seconds, lang)}
              </span>
            </div>
          )}

          <span
            className={`font-normal ${lang === "ku" ? "font-ku-display" : "font-display"}`}
          >
            {lang === "ku" ? "خولەک" : "minutes"}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Hero;
