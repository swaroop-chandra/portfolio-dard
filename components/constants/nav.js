import About from "../about/About";
import Form from "../contact/form";
import Projects from "../projects/Projects";
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
    title: "Projects",
    url: "Projects",
    component: <Projects />,
  },
  {
    title: "Contact",
    url: "contact",
    component: <Form />,
  },
];
