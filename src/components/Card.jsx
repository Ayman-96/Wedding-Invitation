import backCardAyah from "../assets/card-back-ayah.png";
function Card({ cardRised }) {
  return (
    <div>
      <img
        src={backCardAyah}
        draggable={false}
        className={`relative select-none max-w-xl transition-shadow duration-500 ease-out 
          ${cardRised ? "animate-card-rise shadow-2xl top-5 w-[295px] mt-60  shadow-[#C2A26B]  z-100" : "w-[255px]"}`}
      />
    </div>
  );
}

export default Card;
