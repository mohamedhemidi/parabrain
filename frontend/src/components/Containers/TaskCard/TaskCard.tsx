import CheckMarkIcon from "../../../assets/icons/CheckMark";
import EditIcon from "../../../assets/icons/Edit";
import RemoveIcon from "../../../assets/icons/Remove";
import { openModal } from "../../../reducers/ModalReducer";
import { useAppDispatch } from "../../../utils/hooks";
// import TimerIcon from "../../../assets/icons/Timer";
import {
  SContainer,
  SDate,
  SDesc,
  SLeft,
  SRight,
  SCompletedStatus,
  STitle,
  //   SPendingStatus,
  SCardActions,
  SIconWrapper,
} from "./styles";

const TaskCard = () => {
  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <SContainer>
      <SLeft>
        <STitle onClick={handleOpenModal}>Get test done</STitle>
        <SDesc>Finish the TryHackMe assignement as soon as possible</SDesc>
        <SDate>31/10/2023</SDate>
      </SLeft>
      <SRight>
        <SCompletedStatus>
          <SIconWrapper onClick={handleOpenModal}>
            <CheckMarkIcon />
          </SIconWrapper>
        </SCompletedStatus>

        {/* <SPendingStatus>
          <TimerIcon />
        </SPendingStatus> */}

        <SCardActions>
          <SIconWrapper onClick={handleOpenModal}>
            <EditIcon />
          </SIconWrapper>
          <SIconWrapper onClick={handleOpenModal}>
            <RemoveIcon />
          </SIconWrapper>
        </SCardActions>
      </SRight>
    </SContainer>
  );
};

export default TaskCard;
