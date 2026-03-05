export interface Drawing {
  id: number
  title: string
  desc: string
  category: string
  price: number
  src: string
}

export const drawings: Drawing[] = [
  { id: 1, title: "Subaru WRX STI Gray", desc: "A dark gray Subaru WRX STI in urban setting.", category: "Car", price: 3000, src: "/gallery/drawing1.jpg" },
  { id: 2, title: "Subaru WRX STI Blue", desc: "Blue WRX STI on a race circuit.", category: "Car", price: 3000, src: "/gallery/drawing2.jpg" },
  { id: 3, title: "Subaru WRX RA-R", desc: "Blue WRX RA-R speeding through forest.", category: "Car", price: 3500, src: "/gallery/drawing3.jpg" },
  { id: 4, title: "Subaru WRX White", desc: "White WRX STI with green accents at night.", category: "Car", price: 3000, src: "/gallery/drawing4.jpg" },
  { id: 5, title: "Subaru WRX Two-tone", desc: "Black and white WRX STI street style.", category: "Car", price: 3000, src: "/gallery/drawing5.jpg" },
  { id: 6, title: "Ferrari Portofino Red", desc: "Red Ferrari Portofino by the harbor.", category: "Car", price: 5000, src: "/gallery/drawing6.jpg" },
  { id: 7, title: "Ferrari Portofino Blue", desc: "Blue Ferrari Portofino on the street.", category: "Car", price: 5000, src: "/gallery/drawing7.jpg" },
  { id: 8, title: "Ferrari 812 Orange", desc: "Orange Ferrari 812 Superfast in the city.", category: "Car", price: 5000, src: "/gallery/drawing8.jpg" },
  { id: 9, title: "Subaru STI Black Hatch", desc: "Black Subaru STI hatchback against stone wall.", category: "Car", price: 3500, src: "/gallery/drawing9.jpg" },
  { id: 10, title: "Subaru STI Black Side", desc: "Black Subaru STI side profile shot.", category: "Car", price: 3000, src: "/gallery/drawing10.jpg" },
  { id: 11, title: "Subaru STI Dark Mountain", desc: "Dark Subaru STI in mountain scenery.", category: "Car", price: 3000, src: "/gallery/drawing11.jpg" },
]