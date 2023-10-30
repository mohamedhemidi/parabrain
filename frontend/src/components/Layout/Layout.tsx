import { ReactCore } from "../../types/ReactCore";
import { useAppSelector } from "../../utils/hooks";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }: ReactCore) => {
  const { sidebar_collapsed } = useAppSelector((state) => state.UI);
  return (
    <SLayout>
      <Sidebar collapsed={sidebar_collapsed} />
      <SMain>
        <Header />
        {children}
      </SMain>
    </SLayout>
  );
};

export default Layout;
