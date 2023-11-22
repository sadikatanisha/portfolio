import sushirestaurant from "../assets/projects/sushirestaurant.png";
import pokedex from "../assets/projects/pokedex.png";
import orderManagement from "../assets/projects/order-management-system.png";
import mvcBlog from "../assets/projects/MVC-srchitecture.png";

export const data = [
  {
    id: 1,
    name: "MERN Application",
    description: "A MERN social media Appliation",
    image: sushirestaurant,
    github: "",
    live: "",
    techStack: ["react", "Express", "Nodejs", "MongoDb"],
  },
  {
    id: 2,
    name: "POKÉDEX",
    description:
      "A pokemon index project using PokeAPI is a web based application that allows users to browse through the whole pokemon list along with their details such as pokemon type.",
    image: pokedex,
    github: "https://github.com/sadikatanisha/POKEDEX",
    live: "https://pokedexbysadika.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 3,
    name: "Order Management System",
    description:
      "The Order Management System is a web application that streamlines business order processing. This system employs the Model-View-Controller (MVC) architecture to deliver an organized and efficient platform for order management.",
    image: orderManagement,
    github: "https://github.com/sadikatanisha/order-management-system",
    live: "",
    techStack: ["HTML", "CSS", "EJS", "Express", "MongoDB"],
  },
  {
    id: 4,
    name: "MVC Architecture",
    description:
      "A Blog on the MVC architecture, a concise guide on understanding the foundation of the most popular application architecture.",
    image: mvcBlog,
    github:
      "https://medium.com/@sadikarahmantanisha/the-mvc-architecture-97d47e071eb2",
    live: "https://medium.com/@sadikarahmantanisha/the-mvc-architecture-97d47e071eb2",
    techStack: ["Blog"],
  },
];
