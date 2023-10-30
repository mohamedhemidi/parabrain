import { useAppSelector } from "../../utils/hooks";
import { SBottom, SContent, SLogo, SSidebar } from "./styles";
import LogoIcon from "../../assets/icons/Logo";
import { ThemeToggle } from "../Collections/ThemeToggle";

export type ISidebar = {
  collapsed: boolean;
};

const Sidebar = ({ collapsed }: ISidebar) => {
  const { theme } = useAppSelector((state) => state.UI);
  return (
    <SSidebar collapsed={collapsed}>
      <SContent collapsed={collapsed}>
        <SLogo>
          <LogoIcon />
          <h1>{collapsed ? null : import.meta.env.VITE_APP_NAME}</h1>
        </SLogo>
        <SBottom>
          <ThemeToggle theme={theme} />
        </SBottom>
      </SContent>
    </SSidebar>
  );
};

export default Sidebar;
