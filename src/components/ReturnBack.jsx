import { ArrowLeft } from "lucide-react";

function ReturnBack({ lang, text, kuWord, enWord, closePage }) {
  // text = text-color tracking-wide text-size top- left-
  return (
    <button
      dir="ltr"
      onClick={closePage}
      data-component="leave-pages"
      className={`absolute flex gap-2 ${lang === "ku" ? "items-end" : "items-center"} font-bold opacity-80 ${text}`}
    >
      <ArrowLeft
        size={20}
        className="bg-white rounded-full shadow-lg shadow-[#596e3c]"
      />{" "}
      <span
        className={`${lang === "ku" ? "font-ayah" : "font-display  items-center "}`}
      >
        {lang === "ku" ? kuWord : enWord}
      </span>
    </button>
  );
}

export default ReturnBack;
