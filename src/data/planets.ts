export interface PlanetInfo {
  id: string;
  name: string;
  img: string;
  size: number;
  progress: number;
  description: string;
  radius: number;
  distance: number;
  rings?: boolean;
}

export const planets = [
  {
    id: "sun",
    name: "Sun",
    img: "/public/textures/sun.jpg",
    size: 42,
    progress: 0.00,
    description: "A massive, glowing star that powers the Solar System.",
    radius: 695700,
    distance: 0,
    rings: false
  },
  {
    id: "mercury",
    name: "Mercury",
    img: "/public/textures/mercury.jpg",
    size: 10,
    progress: 0.11,
    description: "The smallest planet and the closest to the Sun.",
    radius: 2440,
    distance: 57900000,
    rings: false
  },
  {
    id: "venus",
    name: "Venus",
    img: "/public/textures/venus.jpg",
    size: 18,
    progress: 0.25,
    description: "A toxic, superheated world often called Earth's sister planet.",
    radius: 6052,
    distance: 108200000,
    rings: false
  },
  {
    id: "earth",
    name: "Earth",
    img: "/public/textures/earth.png",
    size: 22,
    progress: 0.38,
    description: "The only known planet with life. 71% covered by water.",
    radius: 6371,
    distance: 149600000,
    rings: false
  },
  {
    id: "mars",
    name: "Mars",
    img: "/public/textures/mars.jpg",
    size: 16,
    progress: 0.50,
    description: "The Red Planet, home to the largest volcano in the Solar System.",
    radius: 3389,
    distance: 227900000,
    rings: false
  },
  {
    id: "jupiter",
    name: "Jupiter",
    img: "/public/textures/jupiter.jpg",
    size: 35,
    progress: 0.62,
    description: "The largest planet, famous for its Great Red Spot storm.",
    radius: 69911,
    distance: 778500000,
    rings: false
  },
  {
    id: "saturn",
    name: "Saturn",
    img: "/public/textures/saturn.jpg",
    size: 32,
    progress: 0.755,
    description: "A gas giant known for its stunning ring system.",
    radius: 58232,
    distance: 1434000000,
    rings: true
  },
  {
    id: "uranus",
    name: "Uranus",
    img: "/public/textures/uranus.jpg",
    size: 26,
    progress: 0.88,
    description: "An ice giant that rotates on its side.",
    radius: 25362,
    distance: 2871000000,
    rings: false
  },
  {
    id: "neptune",
    name: "Neptune",
    img: "/public/textures/neptune.jpg",
    size: 25,
    progress: 0.99,
    description: "A cold, windy ice giant at the edge of the Solar System.",
    radius: 24622,
    distance: 4495000000,
    rings: false
  }
];
