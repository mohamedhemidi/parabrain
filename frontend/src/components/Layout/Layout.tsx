import { ReactCore } from "../../types/ReactCore";
import { useAppSelector } from "../../utils/hooks";
import { ModalForm } from "../Containers/ModalForm";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }: ReactCore) => {
  const { sidebar_collapsed } = useAppSelector((state) => state.UI);
  const { open } = useAppSelector((state) => state.modal);
  return (
    <SLayout>
      <Sidebar collapsed={sidebar_collapsed} />
      <SMain>
        <Header />
        {children}
      </SMain>
      {open ? <ModalForm /> : null}
    </SLayout>
  );
};

export default Layout;
