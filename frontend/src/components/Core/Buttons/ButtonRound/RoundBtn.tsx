import { Icon, SWrapper } from "./styles";

export type IBtnRound = {
  color:
    | "Primary"
    | "Secondary"
    | "Info"
    | "Warning"
    | "Danger"
    | "Success"
    | "Neutral";
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const RoundBtn = ({ onClick, icon, color }: IBtnRound) => {
  return (
    <SWrapper onClick={onClick} color={color}>
      <Icon>{icon}</Icon>
    </SWrapper>
  );
};

export default RoundBtn;
