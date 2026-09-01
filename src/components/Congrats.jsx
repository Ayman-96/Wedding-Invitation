import { Send, Trash2, User } from "lucide-react";
import congratsBg from "../assets/congratsBg.png";
import ReturnBack from "./return";
import { LuHeartHandshake } from "react-icons/lu";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import leafBg from "../assets/leaveBg.png";
import underContact from "../assets/underContact.png";
import redLeaf from "../assets/redLeaf.png";

function Congrats({ lang }) {
  const labelStyle = `text-[#454E30] font-bold ${lang === "ku" ? "font-ku-display mr-2 text-xl" : "font-display ml-2"} select-none`;

  const inputStyle = `${lang === "ku" ? "font-ku-body" : "font-body"} bg-[#F1E8D8]/80 border border-[#596e3c] rounded-xl h-8 px-5 text-sm text-justify
   placeholder:text-[#5F6B4E] focus:border-2 focus:[border-style:inset] focus:border-[#638C6C] focus:outline-none select-none`;

  return (
    <div
      dir={lang === "ku" ? "rtl" : "ltr"}
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen p-5 overflow-hidden"
      style={{ backgroundImage: `url(${congratsBg})` }}
    >
      <ReturnBack
        lang={lang}
        text="text-[#501c08] text-lg tracking-widest top-2 left-3"
        kuWord="پیرۆزبایی"
        enWord="Congrats"
      />

      <div
        className={`flex flex-col gap-1 items-center justify-center ${lang === "ku" ? "m-4" : "m-10"} mb-5 select-none`}
      >
        <h1
          className={`text-[#501c08] tracking-widest ${lang === "ku" ? "font-ayah text-3xl mb-4" : "font-display text-xl "}`}
        >
          {lang === "ku" ? "پیرۆزباییەکان" : "CONGRATS"}
        </h1>
        <img
          draggable={false}
          src={underContact}
          className="w-45 select-none"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 px-2">
        <p
          className={`px-1 ${lang === "ku" ? " font-ku-display text-lg mr-2" : "font-display text-lg ml-1"}`}
        >
          {lang === "ku"
            ? "پیرۆزبایی خۆت ئاڕاستەی دوو گوڵەکە بکه و ببە بەشێک لە تایبەتترین ڕۆژی ژیانیان"
            : "Shre your congratulations and warm withes with the couple."}{" "}
          <LuHeartHandshake
            className="inline align-text-top"
            size={20}
            stroke="#638C6C"
          />
        </p>

        <div
          className="relative flex flex-col items-start justify-start gap-3 p-5 h-74
          bg-[#B2BFA5]/50 border border-[#638C6C] rounded-2xl w-full z-10"
          style={{ backgroundImage: "" }}
        >
          <img
            draggable={false}
            src={leafBg}
            className={`absolute z-5 w-60 opacity-60 select-none -top-1  ${lang === "ku" ? "-left-25 scale-x-[-1] rotate-45  " : "-right-23 -rotate-45"}`}
          />
          <div className="relative flex flex-col gap-2">
            <label className={`${labelStyle}`}>
              {lang === "ku" ? "ناو" : "Your Name"}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              maxLength={24}
              placeholder={
                lang === "ku" ? "ناوی خۆت بنووسە" : "Enter your name"
              }
              className={`${inputStyle} w-60`}
            />
            <User
              size={18}
              className={`absolute top-10 stroke-[#5F6B4E] ${lang === "ku" ? "left-5" : "right-5"}`}
            />
          </div>

          <div className="relative flex flex-col gap-2 ">
            <label className={`${labelStyle}`}>
              {lang === "ku"
                ? "نامەی پیرۆزبایی"
                : "Your Congratulation Message"}
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              maxLength={96}
              placeholder={
                lang === "ku" ? "نامەکەت بنووسە" : "Write your message"
              }
              className={`${inputStyle} resize-none w-70 min-h-24 p-2`}
            />
            <p
              className={`absolute bottom-1 text-xs font-body text-[#5F6B4E] ${lang === "ku" ? "left-3" : " right-3"}`}
            >
              {"X"}/96
            </p>
          </div>

          <button
            className={`absolute left-1/2 -translate-x-1/2 bottom-2  p-2 flex gap-2 justify-center items-center bg-[#638C6C]
           text-white rounded-xl ring ring-[#638C6C] border border-white ${lang === "ku" ? "font-ku-display w-50 text-lg" : "font-display w-55"}`}
          >
            <Send size={16} />{" "}
            {lang === "ku" ? "ناردنی پیرۆزبایی" : "Share Congratulation"}
          </button>
        </div>
      </div>

      <div
        className={`py-5 px-3 mt-5 flex gap-2 justify-start text-[#454E30] text-lg font-bold ${lang === "ku" ? "font-ayah items-end" : "font-display items-center"} select-none`}
      >
        <div>
          {lang === "ku" ? "هەموو پیرۆزباییەکان" : "All Congratulations"}
        </div>
        <div
          className={`h-0.5 rounded-full  bg-[#BB935A] ${lang === "ku" ? "w-35 self-end" : " w-25"}`}
        />
        <BsEnvelopePaperHeart size={22} fill="#596e3c" />
      </div>

      {/* Return */}
      <div>
        <div
          className={`relative overflow-hidden flex gap-3 bg-[#F1E8D8]/60 p-3 rounded-2xl border border-[#501c08] ${lang === "ku" ? "text-right" : " text-left"}`}
        >
          <img
            src={redLeaf}
            className={`absolute w-30 opacity-80 z-5 ${lang === "ku" ? "-left-6 -top-10 rotate-60" : "right-0 -top-9 -rotate-20"}`}
          />
          <div className="z-10 flex items-center justify-center bg-[#596e3c] text-white rounded-full w-8 h-8 p-1  shrink-0">
            L
          </div>
          <div className="flex flex-col gap-1 z-999">
            <p
              className={`font-bold text-[#501c08] ${lang === "ku" ? "font-ku-display " : "font-display"}`}
            >
              دڵسۆزانە
            </p>
            <p className="text-xs -mt-1 text-gray-400">3 min ago</p>
            <p
              className={`text-[#0F1E33] ${lang === "ku" ? "text-md font-ku-body " : "font-body text-sm"}`}
            >
              پیرۆزباییەکی دڵسۆزانە بۆ سەرکەوتنە مەزنەکەت! تۆ زۆر بە سەختی هەوڵت
              دا، سەرنجت دا، و بە ڕاستی گەیشتیتە ئاستێکی زۆر بەرز.
            </p>
          </div>
          <Trash2
            size={18}
            className={`absolute ${lang === "ku" ? "left-3" : " right-3"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Congrats;
//  {lang === "ku" ? "" : ""}
