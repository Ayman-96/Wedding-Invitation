import backCardAyah from "../assets/card-back-ayah.png";
function Card({ cardRised }) {
  return (
    <div>
      <img
        src={backCardAyah}
        draggable={false}
        className={`select-none absolute inset-10 left-15 w-[340px] max-w-xl z-10 ${cardRised ? "animate-card-rise top-33" : "top-15"}`}
      />
    </div>
  );
}

export default Card;
