export interface Drawing {
  id: number
  title: string
  desc: string
  category: string
  price: number
  src: string
}

export const drawings: Drawing[] = [
  { id: 1, title: "Subaru WRX STI Sedan Gray", desc: "Dark gray Subaru WRX STI sedan in urban setting.", category: "Subaru", price: 3000, src: "/gallery/drawing1.jpg" },
  { id: 2, title: "Subaru WRX STI Sedan Blue", desc: "Blue Subaru WRX STI sedan on race circuit.", category: "Subaru", price: 3000, src: "/gallery/drawing2.jpg" },
  { id: 3, title: "Subaru WRX STI RA-R Blue", desc: "Blue Subaru WRX STI RA-R speeding through forest road.", category: "Subaru", price: 3500, src: "/gallery/drawing3.jpg" },
  { id: 4, title: "Subaru WRX STI Hatchback Blue", desc: "Blue Subaru WRX STI hatchback with gold wheels.", category: "Subaru", price: 3000, src: "/gallery/drawing4.jpg" },
  { id: 5, title: "Subaru WRX STI Hatchback Dark", desc: "Dark Subaru WRX STI hatchback in mountain scenery.", category: "Subaru", price: 3000, src: "/gallery/drawing5.jpg" },
  { id: 6, title: "Subaru WRX STI Sedan Gray II", desc: "Dark gray Subaru WRX STI sedan near abandoned building.", category: "Subaru", price: 3000, src: "/gallery/drawing6.jpg" },
  { id: 7, title: "Subaru WRX STI S208 Blue", desc: "Blue Subaru WRX STI S208 on circuit with bronze wheels.", category: "Subaru", price: 3500, src: "/gallery/drawing7.jpg" },
  { id: 8, title: "Subaru WRX STI RA-R Blue II", desc: "Blue Subaru WRX STI RA-R cornering through forest.", category: "Subaru", price: 3500, src: "/gallery/drawing8.jpg" },
  { id: 9, title: "Subaru WRX STI Sedan White", desc: "White Subaru WRX STI sedan with neon green accents at night.", category: "Subaru", price: 3000, src: "/gallery/drawing9.jpg" },
  { id: 10, title: "Subaru WRX STI Hatchback Two-tone", desc: "Black and white Subaru WRX STI hatchback street style.", category: "Subaru", price: 3000, src: "/gallery/drawing10.jpg" },
  { id: 11, title: "Ferrari Portofino Rosso", desc: "Red Ferrari Portofino by the harbor in Portofino, Italy.", category: "Ferrari", price: 5000, src: "/gallery/drawing11.jpg" },
]