import type { PlanetInfo } from "../data/planets";
import ShipButton from "./ShipButton";

interface Props extends PlanetInfo {
  onClick?: () => void;
}

export default function Planet({ name, img, size, rings, onClick }: Props) {
  return (
    <div className="planet-scroll-wrap">
      <div
        className={`planet planet--${name.toLowerCase()} spin`}
        style={{ "--size": `${size}vh`, "--img": `url(${img})` } as React.CSSProperties}
        onClick={onClick}
      >
        {rings && <div className="rings" />}
      </div>
      <ShipButton onClick={onClick} />
    </div>
  );
}
