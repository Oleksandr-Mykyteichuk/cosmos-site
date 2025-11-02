import type { PlanetInfo } from "../data/planets";
import { scrollToVideoProgress } from "./videoController";

interface Props {
  planets: PlanetInfo[];
  closeMenu: () => void;
}

export default function SidebarNav({ planets, closeMenu }: Props) {

  const go = (id: string, progress: number) => {
    scrollToVideoProgress(progress);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    closeMenu();
  };

  return (
    <div className="sidebar">
      {planets.map((p) => (
        <button
          className="nav_button"
          key={p.id}
          onClick={() => go(p.id, p.progress)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
