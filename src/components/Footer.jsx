import { LuHeartHandshake } from "react-icons/lu";

function Footer({ lang }) {
  return (
    <footer
      dir={lang}
      className="flex items-center flex-col justify-center px-6 pt-1"
    >
      <div
        className="flex justify-center p-2 rounded-2xl w-full bg-[#A7B58C]/85 text-[#FDFCF9]
        font-normal tracking-wide animate-color-pulse"
      >
        {lang === "ku" ? (
          <p className="flex items-center gap-0.25 animate-color-pulse">
            چاوەڕوانتانین، A{" "}
            <LuHeartHandshake fill="#D8A7A0" stroke="#FDFCF9" /> K
          </p>
        ) : (
          <p className="flex items-center gap-0.25 ">
            Waiting for you, A{" "}
            <LuHeartHandshake fill="#D8A7A0" stroke="#FDFCF9" /> K{" "}
          </p>
        )}
      </div>

      <p className="mt-5 text-[#D8A7A0]/80">powered by Ayman</p>
    </footer>
  );
}

export default Footer;
