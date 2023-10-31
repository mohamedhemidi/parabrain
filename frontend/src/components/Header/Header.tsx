import { useAppDispatch } from "../../utils/hooks";
import { toggleSidebar } from "../../reducers/UIReducer";
import MenuIcon from "../../assets/icons/menu";
import { RoundBtn as Button } from "../Core/Buttons/ButtonRound";
import { SAddBtn, SContainer } from "./styles";
import { Link } from "react-router-dom";
import PlusIcon from "../../assets/icons/Plus";

const Header = () => {
  const dispatch = useAppDispatch();
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <SContainer>
      <Button color="Primary" icon={<MenuIcon />} onClick={handleSidebar} />
      <SAddBtn>
        <Link to="/task">
          <PlusIcon />
        </Link>
      </SAddBtn>
    </SContainer>
  );
};

export default Header;
