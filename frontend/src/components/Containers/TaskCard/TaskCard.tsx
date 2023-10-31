/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckMarkIcon from "../../../assets/icons/CheckMark";
import EditIcon from "../../../assets/icons/Edit";
import RemoveIcon from "../../../assets/icons/Remove";
import TimerIcon from "../../../assets/icons/Timer";
import {
  SContainer,
  SDate,
  SDesc,
  SLeft,
  SRight,
  SCompletedStatus,
  STitle,
  SPendingStatus,
  SCardActions,
  SIconWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ data }: any) => {
  const { _id, title, description, date, status } = data;
  const navigate = useNavigate();

  return (
    <SContainer>
      <SLeft>
        <STitle onClick={() => navigate(`/task/${_id}`)}>{title}</STitle>
        <SDesc>{description}</SDesc>
        <SDate>{date}</SDate>
      </SLeft>
      <SRight>
        {status === "PENDING" ? (
          <SPendingStatus>
            <SIconWrapper onClick={() => navigate(`/task/${_id}`)}>
              <TimerIcon />
            </SIconWrapper>
          </SPendingStatus>
        ) : (
          <SCompletedStatus>
            <SIconWrapper onClick={() => navigate(`/task/${_id}`)}>
              <CheckMarkIcon />
            </SIconWrapper>
          </SCompletedStatus>
        )}

        <SCardActions>
          <SIconWrapper onClick={() => navigate(`/task/${_id}`)}>
            <EditIcon />
          </SIconWrapper>
          <SIconWrapper onClick={() => navigate(`/task/${_id}`)}>
            <RemoveIcon />
          </SIconWrapper>
        </SCardActions>
      </SRight>
    </SContainer>
  );
};

export default TaskCard;
