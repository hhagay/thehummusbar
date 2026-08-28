export const SITE = {
  name: "The Hummus Bar",
  shortName: "Hummus Bar",
  tagline: "Good Food. Good Mood.",
  cuisine: "Mediterranean Kosher",
  phone: "602.291.0115",
  phoneHref: "tel:+16022910115",
  email: "thehummusbar1@gmail.com",
  emailHref: "mailto:thehummusbar1@gmail.com",
  maps: "https://maps.google.com/?q=4835+E+Greenway+Rd+Scottsdale+AZ+85254",
  instagram: "https://www.instagram.com/hummusbaraz/",
  facebook: "https://www.facebook.com/hummusbaraz",
  tiktok: "https://www.tiktok.com/@hummusbaraz",
  yelp: "https://www.yelp.com/biz/hummus-bar-brooklyn",
} as const;

export const LOCATIONS = [
  {
    id: "scottsdale",
    name: "Scottsdale",
    address: "4835 E Greenway Rd.",
    city: "Scottsdale, AZ 85254",
    note: "Walk-in only · Shabbat orders welcome",
    maps: "https://maps.google.com/?q=4835+E+Greenway+Rd+Scottsdale+AZ+85254",
  },
] as const;

export const HOURS = [
  { days: "Sunday – Thursday", time: "10:00 AM – 6:00 PM" },
  { days: "Friday", time: "10:00 AM – 2:00 PM" },
  { days: "Saturday", time: "Closed" },
] as const;

export type Dietary = "meat" | "pareve" | "vegetarian";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: Dietary;
  image?: string;
  popular?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  blurb?: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "hummus-plates",
    title: "Hummus Plates",
    blurb: "All hummus plates are served with warm pita, pickles, and house sauces.",
    items: [
      {
        id: "tahini",
        name: "Hummus Tahini",
        description: "Creamy house hummus topped with tahini and a hard-boiled egg.",
        price: 14.95,
        dietary: "pareve",
        popular: true,
        image: "/food/hummus-tahini.jpg",
      },
      {
        id: "chickpeas",
        name: "Hummus with Warm Chickpeas",
        description:
          "Creamy house hummus topped with warm seasoned chickpeas and a hard-boiled egg.",
        price: 14.95,
        dietary: "pareve",
        image: "/food/hero-hummus.jpg",
      },
      {
        id: "fava",
        name: "Hummus with Fava Beans",
        description: "Creamy house hummus topped with slow-cooked fava beans.",
        price: 15.95,
        dietary: "vegetarian",
        image: "/food/hero-hummus.jpg",
      },
      {
        id: "mushroom",
        name: "Mushroom Hummus",
        description: "Creamy house hummus topped with sauteed mushrooms and onions.",
        price: 16.95,
        dietary: "vegetarian",
        image: "/food/mushroom.jpg",
      },
      {
        id: "shakshuka-hummus",
        name: "Hummus Shakshuka",
        description: "Creamy house hummus topped with shakshuka and eggs.",
        price: 17.95,
        dietary: "pareve",
        image: "/food/shakshuka.jpg",
        popular: true,
      },
      {
        id: "sloppy",
        name: "Sloppy Joe Hummus",
        description: "Creamy house hummus topped with savory kebab meatballs and seasoned ground beef.",
        price: 19.95,
        dietary: "meat",
        image: "/food/sloppy-joe.jpg",
      },
      {
        id: "merguez-hummus",
        name: "Merguez Sausage Hummus",
        description: "Creamy house hummus topped with grilled, spiced beef sausages.",
        price: 19.95,
        dietary: "meat",
        image: "/food/merguez.jpg",
      },
      {
        id: "baby-chicken-hummus",
        name: "Baby Chicken Hummus",
        description:
          "Creamy house hummus topped with tender grilled boneless chicken thigh pieces.",
        price: 20.95,
        dietary: "meat",
        image: "/food/chicken-hummus.jpg",
      },
      {
        id: "falafel-hummus",
        name: "Falafel Hummus",
        description: "Creamy house hummus served with crisp, house-made falafel.",
        price: 17.95,
        dietary: "vegetarian",
        image: "/food/falafel.jpg",
        popular: true,
      },
    ],
  },
  {
    id: "platters",
    title: "Platters",
    items: [
      {
        id: "grilled-chicken-platter",
        name: "Grilled Baby Chicken Platter",
        description:
          "Grilled boneless chicken thighs served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/chicken-platter.jpg",
      },
      {
        id: "beef-kebab",
        name: "Beef Kebab Platter",
        description:
          "Seasoned grilled kebab meatballs served with rice, chopped Israeli salad, and fries.",
        price: 24.95,
        dietary: "meat",
        image: "/food/kebab-meatballs.jpg",
        popular: true,
      },
      {
        id: "merguez-platter",
        name: "Merguez Sausage Platter",
        description:
          "Grilled spiced beef sausages served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/merguez.jpg",
      },
      {
        id: "schnitzel",
        name: "Chicken Schnitzel Platter",
        description:
          "Crispy breaded chicken breast served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/chicken-platter.jpg",
      },
      {
        id: "arayes",
        name: "Beef Arayes Platter",
        description:
          "Crispy pita stuffed with seasoned ground beef, grilled on skewers, served with rice, chopped Israeli salad, and fries.",
        price: 24.95,
        dietary: "meat",
        image: "/food/arayes.jpg",
      },
      {
        id: "shakshuka",
        name: "Shakshuka",
        description:
          "Eggs simmered in a spiced tomato and pepper sauce, served with tahini and chopped Israeli salad.",
        price: 18.95,
        dietary: "pareve",
        image: "/food/shakshuka.jpg",
      },
      {
        id: "falafel-platter",
        name: "Falafel Platter",
        description:
          "House-made falafel served with tahini, fries, and chopped Israeli salad.",
        price: 18.95,
        dietary: "vegetarian",
        image: "/food/falafel.jpg",
      },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      {
        id: "veg-sausage",
        name: "House-Made Vegetarian Sausage Hummus",
        description: "Creamy house hummus topped with our house-made vegetarian sausages.",
        price: 18.95,
        dietary: "vegetarian",
        image: "/food/falafel.jpg",
      },
      {
        id: "veg-shawarma",
        name: "Vegetarian Shawarma Hummus",
        description:
          "Creamy house hummus topped with sauteed soy strips and onions, seasoned shawarma-style.",
        price: 18.95,
        dietary: "vegetarian",
        image: "/food/mushroom.jpg",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        id: "king",
        name: "The King Salad",
        description:
          "Cucumber, tomato, onion, tahini, warm chickpeas, hard-boiled egg, parsley, and walnuts.",
        price: 16.95,
        dietary: "pareve",
        popular: true,
        image: "/food/fattoush.jpg",
      },
      {
        id: "quinoa",
        name: "Quinoa & Roasted Sweet Potato Salad",
        description: "Quinoa, roasted sweet potato, green onion, arugula, and almonds.",
        price: 15.95,
        dietary: "vegetarian",
        image: "/food/quinoa.jpg",
      },
      {
        id: "fattoush",
        name: "Fattoush Salad",
        description:
          "Tomato, cucumber, hot pepper, red onion, radish, mint, parsley, toasted pita, and za'atar.",
        price: 15.95,
        dietary: "vegetarian",
        image: "/food/fattoush.jpg",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      {
        id: "fries",
        name: "French Fries",
        description: "Golden, crispy French fries.",
        price: 6.95,
        dietary: "pareve",
        image: "/food/fries.jpg",
      },
      {
        id: "home-fries",
        name: "Home Fries",
        description: "Crispy seasoned potato cubes.",
        price: 7.95,
        dietary: "pareve",
        image: "/food/home-fries.jpg",
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    items: [
      {
        id: "malabi",
        name: "Coconut Malabi",
        description:
          "Chilled pareve coconut pudding with rosewater syrup, pistachios, and coconut.",
        price: 8.95,
        dietary: "pareve",
        image: "/food/malabi.jpg",
      },
    ],
  },
];

export function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

export function mailTo(subject: string, body: string) {
  const q = new URLSearchParams({ subject, body });
  return `${SITE.emailHref}?${q.toString()}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/order", label: "Order" },
  { to: "/about", label: "About" },
  { to: "/catering", label: "Catering" },
  { to: "/contact", label: "Contact" },
] as const;
