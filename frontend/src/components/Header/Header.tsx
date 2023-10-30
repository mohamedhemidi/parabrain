import { useAppDispatch } from "../../utils/hooks";
import { toggleSidebar } from "../../reducers/UIReducer";
import MenuIcon from "../../assets/icons/menu";
import { RoundBtn as Button } from "../Core/Buttons/ButtonRound";
import { SContainer } from "./styles";

const Header = () => {
  const dispatch = useAppDispatch();
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <SContainer>
      <Button color="Primary" icon={<MenuIcon />} onClick={handleSidebar} />
    </SContainer>
  );
};

export default Header;
