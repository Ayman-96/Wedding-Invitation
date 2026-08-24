import flapClosedImg from "../assets/flap-closed.png";
import backBodyImg from "../assets/back-envelope.png";
import frontBodyImg from "../assets/front-envelope.png";
import sealImg from "../assets/wax.png";
import flapOpenedImg from "../assets/flap-opened.png";
import bg from "../assets/envelope-bg.png";
import arrow from "../assets/arrow-bg.png";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Envelope({ closeEnvelope }) {
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
    } else if (step === 2 && distanceCard > 60) {
      setCardRised(true);
    }
  }
  useEffect(() => {
    if (!cardRised) return;

    const close = setTimeout(() => closeEnvelope(), 4000);
    return () => clearTimeout(close);
  }, [cardRised, closeEnvelope]);
  return (
    <div
      className={`flex items-center justify-center w-full h-screen overflow-x-hidden bg-cover bg-no-repeat bg-center ${cardRised && "animate-fade-out"}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      style={{
        perspective: "1000px",
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="relative w-[200vw] max-w-[800px] aspect-[4/3] -ml-2">
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
      <Guider step={step} />
    </div>
  );
}

function Guider({ step }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFading(false);
    const timer = setTimeout(() => setFading(true), 3000);
    return () => clearTimeout(timer);
  }, [step]);
  return (
    <div className="absolute z-100">
      {step === 0 ? (
        <svg
          width="140"
          height="62"
          viewBox="0 0 64 32"
          className={`mt-100 ${fading ? "animate-fade-out-arrow" : "animate-sway"}`}
        >
          <defs>
            <pattern
              id="arrowImg"
              patternUnits="userSpaceOnUse"
              width="84"
              height="52"
            >
              <image
                href={arrow}
                x="0"
                y="0"
                width="84"
                height="32"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path d="M0 8 H36 V0 L64 16 L36 32 V24 H0 Z" fill="url(#arrowImg)" />
        </svg>
      ) : (
        <svg
          width="140"
          height="64"
          viewBox="0 0 64 32"
          className={`-rotate-90 mt-120 ${fading ? "animate-fade-out-arrow" : "animate-sway"}`}
        >
          <defs>
            <pattern
              id="arrowImg"
              patternUnits="userSpaceOnUse"
              width="64"
              height="32"
            >
              <image
                href={arrow}
                x="0"
                y="0"
                width="64"
                height="32"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path d="M0 8 H36 V0 L64 16 L36 32 V24 H0 Z" fill="url(#arrowImg)" />
        </svg>
      )}
    </div>
  );
}
export default Envelope;
