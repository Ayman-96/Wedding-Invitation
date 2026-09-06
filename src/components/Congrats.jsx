import {
  postCongrats,
  fetchCongrats,
  deleteOwnCongrats,
  adminDeleteCongrats,
  getAdminSession,
} from "../lib/congrats";
import { Send, Trash2, User } from "lucide-react";
import congratsBg from "../assets/congratsBg.png";
import ReturnBack from "./return";
import { LuHeartHandshake } from "react-icons/lu";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import leafBg from "../assets/leaveBg.png";
import underContact from "../assets/underContact.png";
import redLeaf from "../assets/redLeaf.png";
import sideLeaf from "../assets/sideLeaf.png";
import { useEffect, useState } from "react";
import roseCorner from "../assets/cornerFlower.png";

function Congrats({ lang }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pending, setPending] = useState(false);
  const [allCongrats, setAllCongrats] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [hasCongratulated, setHasCongratulated] = useState(
    () => localStorage.getItem("has_congratulated") === "true",
  );
  const labelStyle = `text-[#454E30] font-bold ${lang === "ku" ? "font-ku-display mr-2 text-xl" : "font-display ml-2"} select-none`;
  const inputStyle = `${lang === "ku" ? "font-ku-body" : "font-body"} bg-[#F1E8D8]/80 border border-[#596e3c] rounded-xl h-8 px-5 text-sm text-justify
   placeholder:text-[#5F6B4E] focus:border-2 focus:[border-style:inset] focus:border-[#638C6C] focus:outline-none select-none`;
  const colors = [
    "#9CAF88",
    "#638C6C",
    "#596e3c",
    "#C2A26B",
    "#D8A7A0",
    "#501c08",
    "#0F1E33",
    "#3D3D35",
    "#afd9e4",
    "#a09bc2",
    "#0265",
    "#026573",
    "#b4aaa1",
    "#005245",
    "#9e1c5c",
    "#4a2d1f",
    "#6a2c6b",
    "#a14b2c",
    "#ffb000",
    "#3b3f4a",
  ];

  const loadCongrats = async () => {
    const { data, error } = await fetchCongrats();

    if (error) {
      console.error(error);
      return;
    }
    setAllCongrats(data || []);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCongrats(); // call the function to fetch
    getAdminSession().then((session) => setIsAdmin(!!session));
  }, []);

  async function handleSubmit() {
    if (!name || !message) return;
    setPending(true);
    try {
      const { error } = await postCongrats(name, message);
      if (error) {
        console.error("Insert failed:", error);
        return; // don't clear fields or reload if it actually failed
      }
      setName("");
      setMessage("");
      setHasCongratulated(true);
      loadCongrats();
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  }
  async function handleDelete(id) {
    const { error } = isAdmin
      ? await adminDeleteCongrats(id)
      : await deleteOwnCongrats(id);

    if (error) {
      console.error("Delete failed:", error);
      return;
    }

    setAllCongrats((prev) => prev.filter((c) => c.id !== id));
  }
  function canDelete(id) {
    return isAdmin || !!localStorage.getItem(`congrats_token_${id}`);
  }

  return (
    <div
      dir={lang === "ku" ? "rtl" : "ltr"}
      className="bg-cover bg-center bg-repeat-x w-full min-h-screen p-5 overflow-x-hidden"
      style={{ backgroundImage: `url(${congratsBg})` }}
    >
      <img
        src={roseCorner}
        draggable={false}
        className="absolute -top-25 -right-8 w-50 rotate-90 pointer-events-none select-none z-0"
      />
      <ReturnBack
        lang={lang}
        text="text-[#501c08] text-lg tracking-widest top-2 left-3"
        kuWord="پیرۆزبایی"
        enWord="Congrats"
      />

      <div
        className={`flex flex-col gap-1 items-center justify-center ${lang === "ku" ? "m-4" : "m-10"} mb-5 select-none`}
      >
        <h1
          className={`text-[#501c08] z-10 tracking-widest ${lang === "ku" ? "font-ayah text-3xl mb-4" : "font-display text-xl "}`}
        >
          {lang === "ku" ? "پیرۆزباییەکان" : "CONGRATS"}
        </h1>
        <img
          draggable={false}
          src={underContact}
          className="w-45 select-none"
        />
      </div>

      {!hasCongratulated ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="relative flex flex-col items-center justify-center gap-5 px-2"
        >
          {pending && (
            <div role="status">
              <svg
                aria-hidden="true"
                class="absolute z-999 inset-0 top-1/2 left-1/2 inline w-14 h-14 text-[#501c08] animate-spin fill-success"
                viewBox="0 0 100 101"
                fill="#E4DCC4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          )}
          <p
            className={`px-1 ${lang === "ku" ? " font-ku-display text-lg mr-2" : "font-display text-lg ml-1"}`}
          >
            {lang === "ku"
              ? "پیرۆزبایی خۆت ئاڕاستەی دوو گوڵەکە بکه و ببە بەشێک لە تایبەتترین ڕۆژی ژیانیان"
              : "Shre your congratulations and warm withes with the couple."}{" "}
            <LuHeartHandshake
              className="inline align-text-top"
              size={20}
              stroke="#638C6C"
            />
          </p>

          <div
            className="relative flex flex-col items-start justify-start gap-3 p-5 h-74
          bg-[#B2BFA5]/50 border border-[#638C6C] rounded-2xl w-full z-10"
            style={{ backgroundImage: "" }}
          >
            <img
              draggable={false}
              src={leafBg}
              className={`absolute z-5 w-60 opacity-60 select-none -top-1 pointer-events-none ${lang === "ku" ? "-left-25 scale-x-[-1] rotate-45  " : "-right-23 -rotate-45"}`}
            />
            <div className="relative flex flex-col gap-2">
              <label className={`${labelStyle}`}>
                {lang === "ku" ? "ناو" : "Your Name"}
              </label>
              <input
                required
                value={name}
                type="text"
                name="name"
                id="name"
                maxLength={24}
                placeholder={
                  lang === "ku" ? "ناوی خۆت بنووسە" : "Enter your name"
                }
                className={`${inputStyle} w-60`}
                onChange={(e) => setName(e.target.value)}
              />
              <User
                size={18}
                className={`absolute top-10 stroke-[#5F6B4E] ${lang === "ku" ? "left-5" : "right-5"}`}
              />
            </div>

            <div className="relative flex flex-col gap-2 ">
              <label className={`${labelStyle}`}>
                {lang === "ku"
                  ? "نامەی پیرۆزبایی"
                  : "Your Congratulation Message"}
              </label>
              <textarea
                required
                value={message}
                type="text"
                name="message"
                id="message"
                maxLength={96}
                placeholder={
                  lang === "ku" ? "نامەکەت بنووسە" : "Write your message"
                }
                className={`${inputStyle} resize-none w-70 min-h-24 p-2`}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p
                className={`absolute bottom-1 text-xs font-body text-[#5F6B4E] ${lang === "ku" ? "left-3" : " right-3"}`}
              >
                {"X"}/96
              </p>
            </div>

            <button
              type="button"
              disabled={pending}
              onClick={handleSubmit}
              className={`absolute left-1/2 -translate-x-1/2 bottom-2  p-2 flex gap-2 justify-center items-center bg-[#638C6C]
           text-white rounded-xl ring ring-[#638C6C] border border-white z-999 ${lang === "ku" ? "font-ku-display w-50 text-lg" : "font-display w-55"}`}
            >
              <Send size={16} />{" "}
              {lang === "ku" ? "ناردنی پیرۆزبایی" : "Share Congratulation"}
            </button>
          </div>
        </form>
      ) : (
        <div
          className="p-3 h-fit text-[#E4DCC4] 
          bg-[#901b1b] border-2 border-[#E4DCC4] rounded-2xl w-full z-10"
        >
          {lang === "ku" ? (
            <p className="font-ku-display">
              سوپاس بۆ وشە جوانەکانت، لەگەڵ ڕێز و خۆشەویستیمان بۆ بەڕێزتان.
              <span className="mr-2 inline-flex items-center gap-1">
                K <LuHeartHandshake fill="#8CA68A" stroke="#E4DCC4" /> A
              </span>
            </p>
          ) : (
            <p className="font-display">
              Thank you for your kind words. With love and gratitude.
              <span className="ml-2 inline-flex items-center gap-1">
                A <LuHeartHandshake fill="#8CA68A" stroke="#E4DCC4" /> K
              </span>
            </p>
          )}
        </div>
      )}

      <div
        className={`py-5 mt-5 flex gap-2 justify-center text-[#454E30] text-lg font-bold ${lang === "ku" ? "font-ayah items-end" : "font-display items-center"} select-none`}
      >
        <div>
          {lang === "ku" ? "هەموو پیرۆزباییەکان" : "All Congratulations"}
        </div>
        <div
          className={`h-0.5 rounded-full  bg-[#BB935A] ${lang === "ku" ? "w-35 self-end" : " w-25"}`}
        />
        <BsEnvelopePaperHeart size={22} fill="#596e3c" />
      </div>

      <div className="flex flex-col gap-5">
        {allCongrats?.map((congrat) => {
          // eslint-disable-next-line react-hooks/purity
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          return (
            <div
              key={congrat.id}
              className={`relative overflow-hidden z-999 flex gap-3 bg-[#F1E8D8]/60 p-3 rounded-2xl border border-[#501c08] ${lang === "ku" ? "text-right" : " text-left"}`}
            >
              <img
                src={redLeaf}
                className={`absolute w-30 opacity-80 z-5 ${lang === "ku" ? "-left-6 -top-10 rotate-60" : "right-0 -top-9 -rotate-20"}`}
              />
              <div
                className="z-10 flex items-center justify-center text-white rounded-full w-8 h-8 p-1 uppercase  shrink-0"
                style={{ backgroundColor: randomColor }}
              >
                {congrat.name.at(0)}
              </div>
              <div className="flex flex-col gap-1 z-999">
                <p className="font-bold text-[#501c08] font-ku-display">
                  {congrat.name}
                </p>
                <p className="text-xs -mt-1 text-gray-400">3 min ago</p>
                <p
                  className={`text-[#0F1E33] font-body  ${lang === "ku" ? "text-md" : "text-sm"}`}
                >
                  {congrat.message}
                </p>
              </div>
              {canDelete(congrat.id) && (
                <Trash2
                  onClick={() => handleDelete(congrat.id)}
                  size={18}
                  className={`absolute ${lang === "ku" ? "left-3" : " right-3"} z-999`}
                />
              )}
            </div>
          );
        })}
        <img
          draggable={false}
          src={sideLeaf}
          className={`fixed select-none w-50 opacity-80 z-1 ${lang === "ku" ? "-right-20 bottom-13 -rotate-40" : "-left-20 bottom-15 rotate-40"}`}
        />
      </div>
    </div>
  );
}

export default Congrats;
//  {lang === "ku" ? "" : ""}
