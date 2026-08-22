function Colors() {
  const colors = [
    "#FDFCF9",
    "#F1F4ED",
    "#B2BFA5",
    "#8CA68A",
    "#638C6C",
    "#5F6B4E",
    "#C2A26B",
    "#BB935A",
    "#D8A7A0",
    "#1B2A41",
    "#0F1E33",
    "#3D3D35",
  ];

  return (
    <div>
      {colors.map((c, i) => (
        <div
          style={{
            backgroundColor: c,
            top: i * 64,
          }}
          className={`w-full flex font-bold h-18 justify-center absolute shadow-xl
            transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-3xl hover:scale-[1.10]
            `}
        >
          {c}
        </div>
      ))}
    </div>
  );
}

export default Colors;
