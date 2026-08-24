// import { useState } from "react";
// import Envelope from "./components/Envelope";
import Home from "./components/Home";

function App() {
  // const [isEnvOpened, setIsEnvOpened] = useState(false);
  return (
    <div>
      {
        /* {!isEnvOpened ? (
        <Envelope closeEnvelope={() => setIsEnvOpened(true)} />
      ) : (
        <Home />
      )} */

        <Home />
      }
    </div>
  );
}

export default App;
