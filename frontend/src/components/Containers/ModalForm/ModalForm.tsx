import CloseIcon from "../../../assets/icons/Close";
import { closeModal } from "../../../reducers/ModalReducer";
import { useAppDispatch } from "../../../utils/hooks";
import { ButtonPrimary } from "../../Core/Buttons/ButtonPrimary";
import {
  SIconWrapper,
  SModalBottom,
  SModalContainer,
  SModalContent,
  SModalTitle,
  SModalTop,
  SWrapper,
} from "./styles";

const ModalForm = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <SWrapper>
      <SModalContainer>
        <SModalTop>
          <SModalTitle>Edit</SModalTitle>
          <SIconWrapper onClick={handleClose}>
            <CloseIcon />
          </SIconWrapper>
        </SModalTop>
        <SModalContent>Modal Body</SModalContent>
        <SModalBottom>
          <ButtonPrimary
            label="Submit"
            color="Primary"
            onClick={() => {
              return;
            }}
          />
          <ButtonPrimary label="Cancel" color="Neutral" onClick={handleClose} />
        </SModalBottom>
      </SModalContainer>
    </SWrapper>
  );
};

export default ModalForm;
