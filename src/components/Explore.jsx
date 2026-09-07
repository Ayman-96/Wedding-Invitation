import { BookOpen, MapPin, PartyPopper, Phone } from "lucide-react";
import { useEffect, useState } from "react";

function Explore({ lang, setPage }) {
  const [activeSec, setActiveSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSec === 3) return setActiveSec(0);
      setActiveSec((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeSec]);

  const sections = [
    {
      key: "location",
      en: {
        label: "Location",
        subLabel: "Venue & Garden",
        icon: <MapPin className="w-8 h-8" />,
      },
      ku: {
        label: "ناونیشان",
        subLabel: "هۆڵ و باخچە",
        icon: <MapPin className="w-8 h-8" />,
      },
    },
    {
      key: "congrats",
      en: {
        label: "Congrats",
        subLabel: "Congaratulate Them",
        icon: <PartyPopper className="w-8 h-8" />,
      },
      ku: {
        label: "پیرۆزباییەکان",
        subLabel: "پیرۆزباییان لێبکه",
        icon: <PartyPopper className="w-8 h-8" />,
      },
    },
    {
      key: "quran",
      en: {
        label: "Quran",
        subLabel: "From From Our Deen",
        icon: <BookOpen className="w-8 h-8" />,
      },
      ku: {
        label: "قورئان",
        subLabel: "لە دینەکەمانەوە",
        icon: <BookOpen className="w-8 h-8" />,
      },
    },
    {
      key: "contact",
      en: {
        label: "Contact",
        subLabel: "Reach out to us",
        icon: <Phone className="w-8 h-8" />,
      },
      ku: {
        label: "پەیوەندی",
        subLabel: "بۆ پەیوەندیکردن پێمان",
        icon: <Phone className="w-8 h-8" />,
      },
    },
  ];
  return (
    <div className="flex justify-center select-none">
      <div className="grid grid-cols-2 gap-5 place-items-center">
        {sections.map((sec, i) => {
          return (
            <div
              key={i}
              onClick={() => setPage(sec.key)}
              className={`relative overflow-hidden flex flex-col p-3 pl-4 gap-6 w-42 max-h-35 text-[#454E30] transition-colors duration-800 ease-in-out
               border rounded-3xl ${activeSec === i ? "bg-[#A7B58C] text-[#FDFCF9] border-[#8CA68A]" : "bg-[#F1E8D8] border-[#C2A26B]"}`}
            >
              <div
                className={`absolute w-20 h-20 rounded-full transition-colors duration-300 ease-in-out -top-7
                    ${activeSec === i ? "bg-[#F1E8D8]/50 animate-circle-move-left" : " bg-[#D8A7A0]/50"}
                    ${lang === "ku" ? `-left-7 ${activeSec === i && "animate-circle-move-right"}` : " -right-7"}`}
              ></div>
              <div className={`mt-2 ${activeSec === i ? "animate-float" : ""}`}>
                {sec[lang].icon}
              </div>
              <div>
                <p
                  className={`font-bold mb-0.5  ${lang === "ku" ? "font-ku-display text-2xl" : "font-display text-xl"}`}
                >
                  {sec[lang].label}
                </p>
                <p
                  className={` ${lang === "ku" ? "font-ku-body font-extralight" : "font-body text-xs "}`}
                >
                  {sec[lang].subLabel}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
