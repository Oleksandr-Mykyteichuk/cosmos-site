import ScrollVideo from "./components/ScrollVideo";
import Planet from "./components/Planet";
import PlanetModal from "./components/PlanetModal";
import SidebarNav from "./components/SidebarNav";
import { planets } from "./data/planets";
import type { PlanetInfo } from "./data/planets";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState<PlanetInfo | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="scroll-root">
      <ScrollVideo />

      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen((o) => !o)}
      >
        ☰
      </button>

      {menuOpen && (
        <SidebarNav 
          planets={planets} 
          closeMenu={() => setMenuOpen(false)} 
        />
      )}

      <main className="content-top">
        {planets.map((p) => (
          <section key={p.id} id={p.id} className="section">
            <Planet {...p} onClick={() => setSelected(p)} />
          </section>
        ))}
      </main>

      <PlanetModal planet={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
