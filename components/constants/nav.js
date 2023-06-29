import About from "../about/About";
import Resume from "../resume/Resume";

export const MenuItems = [
  {
    title: "About",
    url: "",
    component: <About />,
  },
  {
    title: "Resume",
    url: "resume",
    component: <Resume />,
  },
  {
    title: "Portfolio",
    url: "portfolio",
  },
  {
    title: "Contact",
    url: "contact",
  },
];
