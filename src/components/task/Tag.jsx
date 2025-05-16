export default function Tag({ tag }) {
  const bgColors = [
    "#00D991A1",
    "#1C92FFB0",
    "#FE1A1AB5",
    "#BD560BB2",
    "#00B2D9CC",
    "#8407E6A8",
  ];
  const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  return (
    <li>
      <span
        className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
        style={{ backgroundColor: randomBgColor }}
      >
        {tag}
      </span>
    </li>
  );
}
