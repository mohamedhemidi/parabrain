import { useAppSelector } from "../../utils/hooks";
import {
  SBottom,
  SContent,
  SIcon,
  SItem,
  SListItems,
  SLogo,
  SSidebar,
} from "./styles";
import LogoIcon from "../../assets/icons/Logo";
import { ThemeToggle } from "../Collections/ThemeToggle";
import links from "./links";

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
          <h2>{collapsed ? null : import.meta.env.VITE_APP_NAME}</h2>
        </SLogo>
        <SListItems>
          {links.map((l) => {
            return (
              <SItem to={l.path}>
                <SIcon collapsed={collapsed}>{l.icon}</SIcon>
                {collapsed ? null : l.title}
              </SItem>
            );
          })}
        </SListItems>
        <SBottom>
          <ThemeToggle theme={theme} />
        </SBottom>
      </SContent>
    </SSidebar>
  );
};

export default Sidebar;
