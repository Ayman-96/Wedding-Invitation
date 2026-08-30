import { useState } from "react";
// import Envelope from "./components/Envelope";
// import Home from "./components/Home";
import Quran from "./components/Quran";
// import Location from "./components/Location";

function App() {
  // const [isEnvOpened, setIsEnvOpened] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <div className="relative">
      <div
        onClick={() => setLang((prev) => (prev === "ku" ? "en" : "ku"))}
        className="absolute top-2 right-2 bg-emerald-200/50 flex items-center justify-center text-center w-10 h-10 p-5 z-999 cursor-pointer hover:bg-emerald-800 transition-colors duration-300"
      >
        {lang === "ku" ? "KU" : "EN"}
      </div>
      {/* {!isEnvOpened ? (
        <Envelope closeEnvelope={() => setIsEnvOpened(true)} />
      ) : (
        <Home lang={lang} />
      )} */}
      {/* <Home lang={lang} /> */}

      {/* <Location lang={lang} /> */}
      <Quran lang={lang} />
    </div>
  );
}

export default App;
