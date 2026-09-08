import { useState } from "react";
import Envelope from "./components/Envelope";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Quran from "./components/Quran";
import Location from "./components/Location";
import Congrats from "./components/Congrats";
import kurdistanFlag from "./assets/kurdistanFlag.png";
import englishFlag from "./assets/englishFlag.png";

function App() {
  const [isEnvOpened, setIsEnvOpened] = useState(false);
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");
  return (
    <div className="relative">
      <div
        onClick={() => setLang((prev) => (prev === "ku" ? "en" : "ku"))}
        className="absolute select-none opacity-75 top-2 right-2 bg-emerald-200/50 flex items-center justify-center p-5 z-999 cursor-pointer hover:bg-emerald-800 transition-colors duration-300"
      >
        <img
          src={lang === "ku" ? kurdistanFlag : englishFlag}
          className="absolute"
        />
      </div>

      {/* <div className="absolute z-999 top-1/2 left-1/2 p-5 flex flex-col items-center justify-center gap-5">
        <button></button>
        <button>English</button>
      </div> */}
      {!isEnvOpened ? (
        <Envelope closeEnvelope={() => setIsEnvOpened(true)} />
      ) : (
        page === "home" && <Home lang={lang} setPage={setPage} />
      )}

      {/* {page === "home" && <Home lang={lang} setPage={setPage} />} */}

      {page === "location" && (
        <Location lang={lang} closePage={() => setPage("home")} />
      )}
      {page === "quran" && (
        <Quran lang={lang} closePage={() => setPage("home")} />
      )}

      {page === "contact" && (
        <Contact lang={lang} closePage={() => setPage("home")} />
      )}

      {page === "congrats" && (
        <Congrats lang={lang} closePage={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
