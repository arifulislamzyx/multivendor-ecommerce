import Image1 from "../../public/popularCategories/gadgets.jpeg";
import Image2 from "../../public/popularCategories/clothings.jpeg";
import Image3 from "../../public/popularCategories/electronics.jpeg";
import Image4 from "../../public/popularCategories/mobilePhones.webp";
import Image5 from "../../public/popularCategories/sportsOutdoors.jpeg";
import Image6 from "../../public/popularCategories/homeKitchen.png";
import Image7 from "../../public/popularCategories/groceries.webp";
import Image8 from "../../public/popularCategories/books.webp";


interface categoryItem {
  id: number;
  name: string;
  image: string
}

const categoriesImage: categoryItem[] = [
  {
    id: 1,
    name: "Gadget",
    image: Image1,
  },
  {
    id: 2,
    name: "Clothings",
    image: Image2,
  },
  {
    id: 3,
    name: "Electronics",
    image: Image3,
  },
  {
    id: 4,
    name: "Mobiles",
    image: Image4,
  },
  {
    id: 5,
    name: "Sports",
    image: Image5,
  },
  {
    id: 6,
    name: "Kitchen",
    image: Image6,
  },
  {
    id: 7,
    name: "Groceries",
    image: Image7,
  },
  {
    id: 8,
    name: "Books",
    image: Image8,
  },
];

export default categoriesImage;
