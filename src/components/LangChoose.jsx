import kurdistanFlag from "../assets/kurdistanFlag.png";
import englishFlag from "../assets/englishFlag.png";
import langBg from "../assets/langBg.png";
const languages = [
  {
    key: "ku",
    label: "کوردی",
    img: kurdistanFlag,
  },
  {
    key: "en",
    label: "English",
    img: englishFlag,
  },
];
function LangChoose({ setLang }) {
  return (
    <div
      className="h-screen w-full flex items-center flex-col justify-center z-999 bg-cover rounded-2xl shadow-2xl 
    "
      style={{ backgroundImage: `url(${langBg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {languages.map((language) => {
          return (
            <button
              key={language.key}
              onClick={() => setLang(language.key)}
              className="flex gap-5 items-center justify-center border font-ayah w-48 h-17 text-center rounded-xl
              text-[#596e3c]"
            >
              <img className="w-15 mt-1" src={language.img} />{" "}
              <span
                className={`mb-2 ${language.key === "ku" ? "text-2xl" : "text-xl font-semibold"}`}
              >
                {language.label}
              </span>
            </button>
          );
        })}
      </div>

      <p className="absolute flex items-end justify-center bottom-30 font-display text-[#a38653]">
        Made By @Ayman
      </p>
    </div>
  );
}

export default LangChoose;
