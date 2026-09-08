import { useState } from "react";
import Envelope from "./components/Envelope";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Quran from "./components/Quran";
import Location from "./components/Location";
import Congrats from "./components/Congrats";
import LangChoose from "./components/LangChoose";

function App() {
  const [isEnvOpened, setIsEnvOpened] = useState(false);
  const [lang, setLang] = useState(null);
  const [page, setPage] = useState("home");

  if (!lang) return <LangChoose setLang={setLang} />;

  return (
    <div className="relative flex justify-center items-center">
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
