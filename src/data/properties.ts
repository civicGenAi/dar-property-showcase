export type Property = {
  slug: string;
  title: string;
  neighborhood: "Masaki" | "Mikocheni" | "Mbezi";
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqm: number;
  type: "Villa" | "Penthouse" | "Apartment" | "Estate";
  badge?: "Featured" | "New" | "Off-market";
  image: string;
  gallery: string[];
  blurb: string;
  description: string;
  features: string[];
};

const img = (id: string, w = 1600, h = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const properties: Property[] = [
  {
    slug: "villa-masaki",
    title: "Ocean-Facing Villa, Toure Drive",
    neighborhood: "Masaki",
    price: "TZS 4.8B",
    priceValue: 4800000000,
    beds: 5, baths: 6, sqm: 720, type: "Villa", badge: "Featured",
    image: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600607687939-ce8a6c25118c"),
    ],
    blurb: "A private coastal estate with infinity pool and direct sunset exposure.",
    description:
      "Set behind a discreet brass-numbered gate on Toure Drive, this five-bedroom villa frames the Indian Ocean across a 24-metre infinity pool. Interiors are layered in travertine, smoked oak and brushed brass — quiet, considered, and built for entertaining at the highest level.",
    features: ["Infinity pool", "Ocean view", "Smart home", "Staff quarters", "Solar + backup", "24/7 security"],
  },
  {
    slug: "penthouse-msasani",
    title: "The Msasani Penthouse",
    neighborhood: "Masaki",
    price: "TZS 2.9B",
    priceValue: 2900000000,
    beds: 4, baths: 4, sqm: 410, type: "Penthouse", badge: "New",
    image: img("photo-1600585154526-990dced4db0d"),
    gallery: [img("photo-1600585154526-990dced4db0d"), img("photo-1600566753190-17f0baa2a6c3")],
    blurb: "Full-floor penthouse with wraparound terraces over Msasani Bay.",
    description: "A full-floor residence with 270° bay views, private lift entry and a 60sqm wraparound terrace.",
    features: ["Private lift", "Bay views", "Concierge", "Two parking bays", "Wine room"],
  },
  {
    slug: "garden-estate-mbezi",
    title: "Walled Garden Estate",
    neighborhood: "Mbezi",
    price: "TZS 3.6B",
    priceValue: 3600000000,
    beds: 6, baths: 7, sqm: 880, type: "Estate", badge: "Featured",
    image: img("photo-1600566753376-12c8ab7fb75b"),
    gallery: [img("photo-1600566753376-12c8ab7fb75b"), img("photo-1613977257363-707ba9348227")],
    blurb: "Six-bedroom family estate on a mature, walled acre.",
    description: "A generational home on a walled acre — mature jacaranda, tennis court, staff cottage and gatehouse.",
    features: ["Tennis court", "Staff cottage", "Gatehouse", "Mature gardens", "Borehole"],
  },
  {
    slug: "atelier-mikocheni",
    title: "The Mikocheni Atelier",
    neighborhood: "Mikocheni",
    price: "TZS 1.4B",
    priceValue: 1400000000,
    beds: 3, baths: 3, sqm: 260, type: "Villa",
    image: img("photo-1600585154363-67eb9e2e2099"),
    gallery: [img("photo-1600585154363-67eb9e2e2099")],
    blurb: "An architect-designed three-bedroom on a quiet Mikocheni lane.",
    description: "Built around a central courtyard, this is a smaller, sharper kind of luxury.",
    features: ["Courtyard", "Architect-designed", "EV charging", "Solar"],
  },
  {
    slug: "kawe-bay-residence",
    title: "Kawe Bay Residence",
    neighborhood: "Mikocheni",
    price: "TZS 2.1B",
    priceValue: 2100000000,
    beds: 4, baths: 4, sqm: 380, type: "Villa", badge: "Off-market",
    image: img("photo-1582268611958-ebfd161df9d8"),
    gallery: [img("photo-1582268611958-ebfd161df9d8")],
    blurb: "Off-market four-bedroom moments from the water.",
    description: "Available privately. Cinema room, gym, and a 14m lap pool.",
    features: ["Cinema room", "Gym", "Lap pool", "Backup power"],
  },
  {
    slug: "the-baobab-house",
    title: "The Baobab House",
    neighborhood: "Mbezi",
    price: "TZS 1.9B",
    priceValue: 1900000000,
    beds: 5, baths: 5, sqm: 540, type: "Villa", badge: "New",
    image: img("photo-1600210492486-724fe5c67fb0"),
    gallery: [img("photo-1600210492486-724fe5c67fb0")],
    blurb: "A modern villa built around a 200-year-old baobab.",
    description: "The tree is the architecture. Five bedrooms wrap a central glass atrium.",
    features: ["Atrium", "Smart home", "Pool", "Solar"],
  },
  {
    slug: "haven-on-chole",
    title: "Haven on Chole Road",
    neighborhood: "Masaki",
    price: "TZS 5.6B",
    priceValue: 5600000000,
    beds: 6, baths: 8, sqm: 950, type: "Estate", badge: "Featured",
    image: img("photo-1613977257592-4871e5fcd7c4"),
    gallery: [img("photo-1613977257592-4871e5fcd7c4")],
    blurb: "Trophy estate on Chole Road, never publicly listed.",
    description: "Discreetly available. Full diplomatic-grade security envelope.",
    features: ["Diplomatic security", "Cinema", "Spa", "Two pools"],
  },
  {
    slug: "the-glass-pavilion",
    title: "The Glass Pavilion",
    neighborhood: "Mikocheni",
    price: "TZS 1.7B",
    priceValue: 1700000000,
    beds: 3, baths: 4, sqm: 320, type: "Villa",
    image: img("photo-1512917774080-9991f1c4c750"),
    gallery: [img("photo-1512917774080-9991f1c4c750")],
    blurb: "A pavilion of light, glass and water in central Mikocheni.",
    description: "Reflecting pool entry, double-height living, walled garden.",
    features: ["Reflecting pool", "Walled garden", "Wine cellar"],
  },
  {
    slug: "olive-grove-mbezi",
    title: "Olive Grove, Mbezi Beach",
    neighborhood: "Mbezi",
    price: "TZS 2.4B",
    priceValue: 2400000000,
    beds: 5, baths: 5, sqm: 600, type: "Villa",
    image: img("photo-1600047509807-ba8f99d2cdde"),
    gallery: [img("photo-1600047509807-ba8f99d2cdde")],
    blurb: "Mediterranean lines on a beachside half-acre.",
    description: "Olive trees, terracotta, and a long sea-facing terrace.",
    features: ["Beachside", "Olive grove", "Terrace", "Guest wing"],
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
export const similar = (slug: string, n = 3) =>
  properties.filter((p) => p.slug !== slug).slice(0, n);
