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
        price: 12.95,
        dietary: "pareve",
        popular: true,
        image: "/food/hummus-tahini.jpg",
      },
      {
        id: "chickpeas",
        name: "Hummus with Warm Chickpeas",
        description: "Creamy house hummus topped with warm chickpeas and a hard-boiled egg.",
        price: 13.95,
        dietary: "pareve",
        image: "/food/hero-hummus.jpg",
      },
      {
        id: "falafel-hummus",
        name: "Falafel Hummus",
        description: "Creamy house hummus served with crisp house-made falafel.",
        price: 15.95,
        dietary: "vegetarian",
        image: "/food/falafel-hummus-four.jpg",
        popular: true,
      },
      {
        id: "fava",
        name: "Fava Bean Hummus",
        description: "Creamy house hummus topped with warm seasoned fava beans.",
        price: 15.95,
        dietary: "vegetarian",
        image: "/food/fava-hummus.jpg",
      },
      {
        id: "mushroom",
        name: "Mushroom Hummus",
        description: "Creamy house hummus topped with sauteed mushrooms and onions.",
        price: 15.95,
        dietary: "vegetarian",
        image: "/food/mushroom.jpg",
      },
      {
        id: "shakshuka-hummus",
        name: "Hummus Shakshuka",
        description: "Creamy house hummus topped with shakshuka and eggs.",
        price: 16.95,
        dietary: "pareve",
        image: "/food/shakshuka.jpg",
        popular: true,
      },
      {
        id: "sloppy",
        name: "Sloppy Joe Hummus",
        description: "Creamy house hummus topped with savory seasoned ground beef.",
        price: 20.95,
        dietary: "meat",
        image: "/food/sloppy-joe.jpg",
      },
      {
        id: "merguez-hummus",
        name: "Merguez Sausage Hummus",
        description: "Creamy house hummus topped with grilled spicy merguez sausages.",
        price: 20.95,
        dietary: "meat",
        image: "/food/merguez.jpg",
      },
      {
        id: "baby-chicken-hummus",
        name: "Baby Chicken Hummus",
        description:
          "Creamy house hummus topped with tender grilled boneless chicken thighs.",
        price: 20.95,
        dietary: "meat",
        image: "/food/chicken-hummus.jpg",
      },
      {
        id: "beef-kebab-hummus",
        name: "Beef Kebab Hummus",
        description: "Creamy house hummus topped with grilled beef kebab patties.",
        price: 20.95,
        dietary: "meat",
        image: "/food/kebab-hummus.jpg",
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
          "Two skewers of grilled boneless chicken thighs, three pieces each, served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/chicken-platter-3.jpg",
      },
      {
        id: "beef-kebab",
        name: "Beef Kebab Platter",
        description:
          "Five grilled beef kebab patties served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/kebab-platter-five.jpg",
        popular: true,
      },
      {
        id: "merguez-platter",
        name: "Merguez Sausage Platter",
        description:
          "Grilled spicy merguez sausages served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/merguez-platter.jpg",
      },
      {
        id: "schnitzel",
        name: "Chicken Schnitzel Platter",
        description:
          "Two crispy breaded chicken schnitzel served with rice, chopped Israeli salad, and fries.",
        price: 21.95,
        dietary: "meat",
        image: "/food/schnitzel-platter.jpg",
      },
      {
        id: "arayes",
        name: "Beef Arayes Platter",
        description:
          "Crispy pita stuffed with seasoned ground beef, two skewers of three, served with rice, chopped Israeli salad, and fries.",
        price: 23.95,
        dietary: "meat",
        image: "/food/arayes-3.jpg",
      },
      {
        id: "shakshuka",
        name: "Shakshuka",
        description:
          "Eggs simmered in a spiced tomato and pepper sauce, served with tahini and chopped Israeli salad.",
        price: 19.95,
        dietary: "pareve",
        image: "/food/shakshuka-iron.jpg",
      },
      {
        id: "falafel-platter",
        name: "Falafel Platter",
        description:
          "Six house-made falafel served with tahini, fries, and chopped Israeli salad.",
        price: 17.95,
        dietary: "vegetarian",
        image: "/food/falafel-platter-6.jpg",
      },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      {
        id: "plant-based-meat",
        name: "Plant-Based Meat Hummus",
        description: "Creamy house hummus topped with seasoned plant-based meat.",
        price: 18.95,
        dietary: "vegetarian",
        image: "/food/plant-based-hummus-ground.jpg",
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
        image: "/food/king-salad-v2.jpg",
      },
      {
        id: "fattoush",
        name: "Fattoush Salad",
        description:
          "Tomato, cucumber, hot pepper, red onion, radish, mint, parsley, toasted pita, and za'atar.",
        price: 16.95,
        dietary: "vegetarian",
        image: "/food/fattoush-salad-v2.jpg",
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
        price: 8.95,
        dietary: "pareve",
        image: "/food/fries.jpg",
      },
      {
        id: "home-fries",
        name: "Home Fries",
        description: "Crispy seasoned potato cubes.",
        price: 10.95,
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
          "Chilled pareve coconut pudding with rosewater syrup and a crunchy topping.",
        price: 7.95,
        dietary: "pareve",
        image: "/food/malabi.jpg",
      },
    ],
  },
];

export function formatPrice(n: number) {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
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
