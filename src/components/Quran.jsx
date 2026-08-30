import quranBg from "../assets/quranBg.png";
import mandalaGreen from "../assets/mandalaGreen.png";
import playOrentation from "../assets/playOrentation.png";
import {
  ChevronLeft,
  ChevronRight,
  CirclePause,
  PlayCircle,
} from "lucide-react";
import { useRef, useState } from "react";
import ayah1 from "../audio/ayah1.mp3";
import ayah2 from "../audio/ayah2.mp3";
import ayah3 from "../audio/ayah3.mp3";
import calligraphy1 from "../assets/quranCall1.png";
import calligraphy2 from "../assets/quranCall2.png";
import calligraphy3 from "../assets/quranCall3.png";

const ayats = [
  {
    num: 0,
    src: ayah1,
    title: "سورة الروم - اية 21",
    ayah: "وَمِنۡ ءَايَٰتِهِۦٓ أَنۡ خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجٗا لِّتَسۡكُنُوٓاْ إِلَيۡهَا وَجَعَلَ بَيۡنَكُم مَّوَدَّةٗ وَرَحۡمَةًۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يَتَفَكَّرُونَ",
    en: "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.",
    ku: "یه‌کێك له‌ نیشانه‌و به‌ڵگه‌کانی تری ئه‌وه‌یه‌: که‌ هه‌ر له‌ خۆتان هاوسه‌ری بۆ دروست کردوون بۆ ئه‌وه‌ی ئارام بگرن له‌لایداو له‌ نێوانتاندا خۆشه‌ویستی و سۆزو میهره‌بانی فه‌راهه‌م هێناوه‌، به‌ڕاستی ئا له‌و دیاردانه‌دا نیشانه‌و به‌ڵگه‌ هه‌یه‌ بۆ که‌سانێك بیرده‌که‌نه‌وه‌و تێده‌فکرن",
  },
  {
    num: 1,
    src: ayah2,
    title: "سورة الفرقان - اية 74",
    ayah: "وَٱلَّذِينَ يَقُولُونَ رَبَّنَا هَبۡ لَنَا مِنۡ أَزۡوَٰجِنَا وَذُرِّيَّتِنَا قُرَّةَ أَعۡيُنٖ وَٱجۡعَلۡنَا لِلۡمُتَّقِينَ إِمَامًا",
    en: 'And those who say, "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader [i.e., example] for the righteous.',
    ku: "ئه‌وانه‌شن که‌ ده‌ڵێن: په‌روه‌ردگارا له‌ هاوسه‌ران و نه‌وه‌کانمان که‌سانێکمان پێ ببه‌خشه که ببنه‌ مایه‌ی ڕووناکی دیده‌مان و شادمانی دڵمان و بمان که‌ به‌ پێشه‌وا بۆ پارێزکاران و خواناسان.",
  },
  {
    num: 2,
    src: ayah3,
    title: "سورة البقرة - اية 187",
    ayah: "هُنَّ لِبَاسٞ لَّكُمۡ وَأَنتُمۡ لِبَاسٞ لَّهُنَّ",
    en: "They are a clothing for you and you are a clothing for them.",
    ku: "ئه‌وان پۆشاكن بۆ ئێوه‌ و ئێوه‌ش پۆشاكن بۆ ئه‌وان.",
  },
];

function Quran({ lang }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAyah, setShowAyah] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(ayats[0]);

  const audioRef = useRef(null);
  function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else audioRef.current.play();

    setIsPlaying(!isPlaying);
  }
  function displayAyah() {
    if (!showAyah) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    setShowAyah(!showAyah);
  }
  function nextAyah(dir) {
    if (dir === "next") {
      if (currentAyah.num < 2) setCurrentAyah((p) => ayats[p.num + 1]);
    }
    if (dir === "prev") {
      if (currentAyah.num > 0) setCurrentAyah((p) => ayats[p.num - 1]);
    }

    setIsPlaying(false);
  }

  return (
    <div
      className="bg-cover bg-center w-full min-h-screen overflow-hidden"
      style={{ backgroundImage: `url(${quranBg})` }}
    >
      <div className="w-75 p-2 min-h-screen">
        <div className="flex flex-col gap-4 items-end font-ayah text-2xl mt-7 mr-7 font-bold">
          <p>
            هُنَّ لِبَاسٌ <span className="text-[#596e3c]">لَّكُمْ</span>
          </p>
          <p className="mr-20">
            وَأَنتُمْ لِبَاسٌ
            <span className="text-red-800"> لَّهُنَّ</span>
          </p>
        </div>
        {/* <div className="mt-10 px-5 w-70 text-start bg-[#8CA68A]/70">
          {lang === "ku" ? "" : "Lets Listen What Allah Says"}
        </div> */}
        <button
          draggable={false}
          onClick={displayAyah}
          className="mt-2 px-5 w-35 h-35 bg-cover bg-center flex items-center justify-center outline-none cursor-pointer"
          style={{ backgroundImage: `url(${playOrentation})` }}
        >
          {showAyah ? (
            <CirclePause
              size={60}
              className="mb-2 ml-0.5 stroke-[#454E30]/90"
            />
          ) : (
            <PlayCircle size={60} className="mb-2 ml-0.5 stroke-[#454E30]/90" />
          )}
        </button>

        {/*Calligraphy Design*/}
        <img
          src={calligraphy1}
          className="absolute w-37 left-2 bottom-100 -rotate-12 opacity-70"
        />
        <img
          src={calligraphy2}
          className="absolute w-45 left-5 bottom-60 opacity-90"
        />
        <img
          src={calligraphy3}
          className="absolute w-60 left-5 bottom-5 opacity-80"
        />

        <audio ref={audioRef} src={currentAyah.src} loop />
        {showAyah && (
          <>
            <div className="absolute right-22 top-43 w-1/2 overflow-hidden">
              <img
                draggable={false}
                className="w-[200%] max-w-none animate-spin-slow select-none"
                src={mandalaGreen}
              />
            </div>
            <div
              className="absolute bottom-30 -ml-2 bg-[#B2BFA5]/70 w-full h-70 
            flex items-center justify-between px-7 text-[#0F1E33] flex-col gap-1 text-justify"
              style={
                lang === "ku" ? { textAlign: "right" } : { textAlign: "left" }
              }
            >
              <p className="self-center font-ayah font-bold text-[#454E30]">
                {currentAyah?.title}
              </p>
              <p className="font-ayah-display font-bold text-2xl tracking-wider text-right -mr-2 mt-2">
                {currentAyah.ayah}
              </p>
              <p
                className={
                  lang === "ku" ? "font-ku-display text-xl" : "font-display"
                }
              >
                {currentAyah[lang]}
              </p>

              <div className="flex gap-5 items-center justify-center">
                <button
                  onClick={() => nextAyah("prev")}
                  className="p-1 rounded-full bg-[#8CA68A]/50 cursor-pointer"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={togglePlay}
                  className=" px-5 w-15 h-15 bg-cover bg-center flex items-center justify-center outline-none cursor-pointer"
                  style={{ backgroundImage: `url(${playOrentation})` }}
                >
                  {isPlaying ? (
                    <CirclePause
                      size={60}
                      className="mb-1 stroke-[#454E30]/90"
                    />
                  ) : (
                    <PlayCircle
                      size={60}
                      className="mb-1  stroke-[#454E30]/90"
                    />
                  )}
                </button>
                <button
                  onClick={() => nextAyah("next")}
                  className="p-1 rounded-full bg-[#8CA68A]/50 cursor-pointer"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quran;
