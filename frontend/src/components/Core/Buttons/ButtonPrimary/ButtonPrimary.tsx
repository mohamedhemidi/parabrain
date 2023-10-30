import { SLabel, SWrapper } from "./styles";

export type IBtnPrimary = {
  color:
    | "Primary"
    | "Secondary"
    | "Info"
    | "Warning"
    | "Danger"
    | "Success"
    | "Neutral";
  label: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const ButtonPrimary = ({ color, label, onClick }: IBtnPrimary) => {
  return (
    <SWrapper color={color} onClick={onClick}>
      <SLabel>{label}</SLabel>
    </SWrapper>
  );
};

export default ButtonPrimary;
