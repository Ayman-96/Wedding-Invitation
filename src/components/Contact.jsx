import { Heart, MessageCircle, Phone } from "lucide-react";
import contactBg from "../assets/contactBg.png";
import underContact from "../assets/underContact.png";
import ReturnBack from "./return";

function Contact({ lang }) {
  const contacts = [
    {
      en: {
        name: "Khaled",
        role: "Father of the Groom",
        phone: "+07512358250",
      },
      ku: {
        name: "خالید",
        role: "باوکی زاوا",
        phone: "+07512358250",
      },
    },
    {
      en: {
        name: "Aso",
        role: "Father of the Bride",
        phone: "+07512358250",
      },
      ku: {
        name: "ئاسۆ",
        role: "باوکی بووکێ",
        phone: "+07512358250",
      },
    },
  ];
  return (
    <div
      className="bg-cover bg-no-repeat w-full min-h-screen p-5"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <ReturnBack
        lang={lang}
        text="text-[#501c08] text-lg tracking-widest top-2 left-3"
        kuWord="پەیوەندی"
        enWord="CONTACT"
      />

      <div
        className={`flex flex-col gap-1 items-center justify-center ${lang === "ku" ? "m-4" : "m-9"}`}
      >
        <h1
          className={`text-[#501c08] tracking-widest ${lang === "ku" ? "font-ayah text-3xl mb-4" : "font-display text-xl "}`}
        >
          {lang === "ku" ? "پەیوەندی" : "CONTACT"}
        </h1>
        <img src={underContact} className="w-45" />
      </div>

      <div
        dir={lang === "ku" ? "rtl" : "ltr"}
        className="flex flex-col items-center justify-center gap-7 mt-8"
      >
        {contacts.map((contact) => {
          return (
            <div
              key={contact[lang.phone]}
              className={`relative overflow-hidden flex flex-col p-5 pl-4 gap-6 w-80 min-h-40 shadow-lg shadow-[#596e3c]
               border rounded-3xl bg-[#C2A26B]/30 border-[#454E30]`}
            >
              <div className="flex flex-col font-bold">
                <h1
                  className={`tracking-wider text-[#0F1E33] ${lang === "ku" ? "font-ku-display text-3xl" : "font-display text-2xl"}`}
                >
                  {lang === "ku" ? (
                    <span className="text-2xl">کاک</span>
                  ) : (
                    <span className="text-xl">Mr.</span>
                  )}{" "}
                  {contact[lang].name}
                </h1>
                <p
                  className={`tracking-wider text-[#454E30] ${lang === "ku" ? "font-ku-body text-md" : "font-body text-sm"}`}
                >
                  {contact[lang].role}
                </p>
              </div>

              <div className="flex gap-5">
                <a
                  href={`tel:${contact[lang].phone}`}
                  className={`flex gap-2 items-center justify-center bg-[#454E30] text-white rounded-full 
                    ${lang === "ku" ? "w-34 p-2 font-ku-display text-lg" : "w-24 font-body"}`}
                >
                  <Phone size={lang === "ku" ? 18 : 20} />{" "}
                  {lang === "ku" ? "پەیوەندیکردن" : "Call"}
                </a>
                <a
                  href={`https://wa.me/${contact[lang].phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex gap-2 items-center justify-center bg-[#6d9733]/80 text-white rounded-full 
                    ${lang === "ku" ? "w-26 font-ku-display text-lg" : "w-34 p-2 font-body"}`}
                >
                  <MessageCircle size={lang === "ku" ? 18 : 20} />
                  {lang === "ku" ? "واتسئاپ" : "WhatsApp"}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-10 text-[#501c08]  tracking-widest">
        {lang === "ku" ? (
          <p className="flex gap-1 items-end  font-ayah">
            {" "}
            <Heart size={16} />
            هیوای باشترینتان بۆ دەخوازین
          </p>
        ) : (
          <p className="flex gap-1 items-center text-sm font-display">
            Wish You Best <Heart size={13} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
