import { ArrowLeft, Car, Clock, Copy, MapPin } from "lucide-react";
import locationBg from "../assets/locationBg.png";
import placeImg from "../assets/place.png";
import locDivider from "../assets/locDivider.png";
import { GiDirectionSigns } from "react-icons/gi";
import { useState } from "react";
import { TbCopyCheckFilled } from "react-icons/tb";

function Location({ lang }) {
  const [copied, setCopied] = useState(false);

  const toKnowStyle =
    "rounded-2xl px-5 py-2 flex items-start gap-3 text-[#454E30] bg-[#faf2de] border border-[#5F6B4E] shadow-lg shadow-[#5F6B4E]";

  const toKnow = [
    {
      en: {
        label: "Arrival",
        desc: "The ceromony starts around 08:30pm, Please be ready before 08:00pm",
        icon: <Clock />,
      },
      ku: {
        label: "ئامادەبوون",
        desc: "ئاهەنگەکە لە دەوروبەری کاتژمێر ٠٨:٣٠ دەستپێدەکات، تکایە پێش کاتژمێر ٠٨:٠٠ ئامادەبن",
        icon: <Clock />,
      },
    },
    {
      en: {
        label: "Parking",
        desc: "To park your cars, There will be a garage at the front gate",
        icon: <Car />,
      },
      ku: {
        label: "گەراج",
        desc: "بۆ ڕاگرتنی ئۆتۆمبێلەکانتان شوێنی گەراجەکە لەبەردەم دەروازەی پێشەوەیە",
        icon: <Car />,
      },
    },
  ];

  function handleCopy() {
    navigator.clipboard
      .writeText("https://maps.app.goo.gl/forxbvXs9xNTquvW8")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  }
  return (
    <div
      draggable={false}
      className={`select-none w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden p-3 ${lang === "ku" ? "font-kurdish" : "font-display"}`}
      style={{ backgroundImage: `url(${locationBg})` }}
    >
      <button
        data-component="leave-pages"
        className="flex items-center gap-1 text-[#5F6B4E] tracking-widest font-bold text-xl opacity-80"
      >
        <ArrowLeft size={20} />{" "}
        <span
          className={`${lang === "ku" ? "font-ku-display" : "font-display"}`}
        >
          {" "}
          {lang === "ku" ? "ناونیشان" : "Location"}{" "}
        </span>
      </button>

      <div
        dir={lang === "ku" ? "rtl" : "ltr"}
        data-component="location-body"
        className="mt-25 px-6"
      >
        <div
          dir="ltr"
          data-component="header"
          className="relative flex items-end flex-col px-6"
        >
          <div className="flex flex-col font-bold">
            <p className="font-display text-[#454E30] self-start text-3xl">
              Venue
            </p>
            <p className="font-display text-[#454E30] self-end ml-10 text-2xl opacity-80">
              Garden
            </p>
          </div>
          <img
            src={locDivider}
            draggable={false}
            className="absolute top-12 -rotate-165 w-45 -mr-5"
          />
        </div>

        <div
          data-component="location-link"
          className="flex items-center justify-center mt-12"
        >
          <a
            href="https://maps.app.goo.gl/forxbvXs9xNTquvW8"
            target="_blank"
            className="w-80"
          >
            <div
              className="bg-cover bg-center w-full flex items-end max-w-80 h-50 border-3 border-[#5F6B4E]
              rounded-3xl overflow-hidden shadow-lg shadow-[#8CA68A]/80  font-bold font-display z-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2)), url(${placeImg})`,
              }}
            >
              <div className="flex gap-2 px-3 bg-linear-to-t z-5 from-[#5F6B4E]/90 via-[#EFE9D8] to-transparent w-full h-18 py-5">
                <MapPin className="mt-1 animate-float" stroke="#454E30" />
                <div>
                  <p
                    className={`text-[#596e3c]  ${lang === "ku" ? "font-ku-display text-xl" : "font-display text-lg "}`}
                  >
                    {lang === "ku"
                      ? "باخچە و هۆڵی ئاهەنگ"
                      : "Wedding Garden & Venue"}
                  </p>
                  <p
                    className={`text-[#3D3D35] opacity-90  ${lang === "ku" ? "font-ku-body text-sm" : "font-body text-xs "}`}
                  >
                    {lang === "ku"
                      ? "ناونیشان بەرەو شوێنەکە"
                      : "direction to the place"}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <a
            href="https://maps.app.goo.gl/forxbvXs9xNTquvW8"
            draggable={false}
            target="_blank"
            className={`flex text-center items-center py-3   gap-2 cursor-pointer
           bg-[#5F6B4E] font-semibold text-[#FDFCF9] border-2 rounded-4xl
            ${lang === "ku" ? "px-3 font-ku-display text-md" : "px-4 -ml-5 gap-2 font-display text-sm "}`}
          >
            <GiDirectionSigns size={20} />{" "}
            {lang === "ku" ? "وەرگرتنی ئاڕاستە" : "Get Directions"}
          </a>

          <button
            onClick={handleCopy}
            className={`flex text-center items-center p-3 gap-2 cursor-pointer
           bg-[#faf2de] text-[#5F6B4E] border-2 font-semibold rounded-4xl
            ${lang === "ku" ? "px-3 font-ku-display text-md" : "px-4 -mr-5 gap-2 font-display text-sm "}`}
          >
            {copied ? <TbCopyCheckFilled /> : <Copy size={16} />}

            {lang === "ku"
              ? "کۆپیکردنی ناونیشانەکە"
              : `${copied ? "Link Copied" : "Copy Address"}`}
          </button>
        </div>

        {/* olive branch divider */}
        <div className="flex justify-center mb-4 opacity-60 mt-4">
          <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
            <path d="M2 9 H118" stroke="#8A9A6B" strokeWidth="1" />
            <ellipse
              cx="30"
              cy="6"
              rx="5"
              ry="2.5"
              fill="#8A9A6B"
              transform="rotate(-20 30 6)"
            />
            <ellipse
              cx="45"
              cy="12"
              rx="5"
              ry="2.5"
              fill="#8A9A6B"
              transform="rotate(20 45 12)"
            />
            <ellipse
              cx="75"
              cy="6"
              rx="5"
              ry="2.5"
              fill="#8A9A6B"
              transform="rotate(-20 75 6)"
            />
            <ellipse
              cx="90"
              cy="12"
              rx="5"
              ry="2.5"
              fill="#8A9A6B"
              transform="rotate(20 90 12)"
            />
          </svg>
        </div>

        <div className="space-y-3">
          {toKnow.map((card) => {
            return (
              <div className={toKnowStyle}>
                {card[lang].icon}
                <div>
                  <p
                    className={` font-medium mb-0.5 ${lang === "ku" ? "font-ku-display text-md" : "font-display text-sm"}`}
                  >
                    {card[lang].label}
                  </p>
                  <p
                    className={`opacity-70  ${lang === "ku" ? "font-ku-body text-sm" : "font-body text-xs "}`}
                  >
                    {card[lang].desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Location;
