import type { PlanetInfo } from "../data/planets";

interface Props {
  planet: PlanetInfo | null;
  onClose: () => void;
}

export default function PlanetModal({ planet, onClose }: Props) {
  if (!planet) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-body glass"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2 className="text-glow">{planet.name}</h2>

        <img
          src={planet.img}
          alt={planet.name}
          className="modal-planet-img"
        />

        <p>{planet.description}</p>
        
        <div className="stats">
          <p><b>Radius:</b> {planet.radius} km</p>
          <p><b>Distance:</b> {planet.distance} km</p>
        </div>
      </div>
    </div>
  );
}
