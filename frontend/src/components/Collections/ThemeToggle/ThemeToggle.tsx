import MoonIcon from "../../../assets/icons/Moon";
import SunIcon from "../../../assets/icons/Sun";
import { toggleTheme } from "../../../reducers/UIReducer";
import { useAppDispatch } from "../../../utils/hooks";
import { Icon, SWrapper } from "./styles";

export type IBtnRound = {
  theme?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const ThemeToggle = ({ theme }: IBtnRound) => {
  const dispatch = useAppDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <SWrapper onClick={changeTheme}>
      {theme === "dark" ? (
        <Icon>
          <SunIcon />
        </Icon>
      ) : (
        <Icon>
          <MoonIcon />
        </Icon>
      )}
    </SWrapper>
  );
};

export default ThemeToggle;
