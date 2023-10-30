import { Icon, Label, SWrapper } from "./styles";

export type IBtnRound = {
  label?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const RoundBtn = ({ label, onClick, icon }: IBtnRound) => {
  return (
    <SWrapper onClick={onClick}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </SWrapper>
  );
};

export default RoundBtn;
