import ListIcon from "../../assets/icons/CheckList";
import HomeIcon from "../../assets/icons/Home";
import MatrixIcon from "../../assets/icons/Matrix";

export default [
  {
    icon : <HomeIcon/>,
    title: "All tasks",
    path: "/",
  },
  {
    icon : <ListIcon/>,
    title: "Lists",
    path: "/lists",
  },
  {
    icon : <MatrixIcon/>,
    title: "Eisenhower Matrix",
    path: "/matrix",
  },
];
