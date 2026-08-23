import flapClosedImg from "../assets/flap-closed.png";
import backBodyImg from "../assets/back-envelope.png";
import frontBodyImg from "../assets/front-envelope.png";
import sealImg from "../assets/wax.png";
import flapOpenedImg from "../assets/flap-opened.png";
import bg from "../assets/envelope-bg.png";
import { useRef, useState } from "react";
import Card from "./Card";

function Envelope() {
  const [step, setStep] = useState(0);
  const [sealRemoved, setSealRemoved] = useState(false);
  const [flapOpened, setFlapOpened] = useState(false);
  const [cardRised, setCardRised] = useState(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const startCardY = useRef(0);

  function handlePointerDown(e) {
    startX.current = e.clientX;
    startY.current = e.clientY;
    startCardY.current = e.clientY;
  }
  function handlePointerUp(e) {
    const distanceSeal = e.clientX - startX.current;
    const distanceFlap = startY.current - e.clientY;
    const distanceCard = startCardY.current - e.clientY;

    if (step === 0 && distanceSeal > 60) {
      setSealRemoved(true);
      setStep(1);
    } else if (step === 1 && distanceFlap > 60) {
      setFlapOpened(true);
      setStep(2);
    } else if (step === 2 && distanceCard > 60) setCardRised(true);
  }
  return (
    <div
      className={`flex items-center justify-center w-full h-screen overflow-x-hidden bg-cover bg-no-repeat bg-center ${cardRised && "animate-fade-out"}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      style={{ perspective: "1000px", backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-[200vw] max-w-[800px] aspect-[4/3]">
        <img
          src={backBodyImg}
          draggable="false"
          className="absolute inset-10 w-[370px] max-w-xl select-none"
        />
        <Card cardRised={cardRised} />
        <img
          src={frontBodyImg}
          draggable="false"
          className="absolute inset-10 top-10 left-8 w-[395px] max-w-xl select-none z-10"
        />

        <img
          src={flapClosedImg}
          draggable="false"
          className={`select-none absolute inset-0 -top-3 -left-10 w-[535px] max-w-2xl origin-top z-15 ${flapOpened ? "animate-flap-open" : ""}`}
        />
        <img
          src={sealImg}
          draggable="false"
          className={`select-none absolute top-47 left-43 w-[120px] max-w-xl z-100 ${sealRemoved ? "animate-seal-peel" : ""}`}
        />
        <img
          src={flapOpenedImg}
          draggable="false"
          className={`select-none absolute inset-0 -top-45 left-1 w-[485px] max-w-2xl opacity-0 origin-top  ${flapOpened ? "animate-flap-close" : ""}`}
        />
      </div>
    </div>
  );
}
export default Envelope;
