/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Loading } from "../../components/Collections/Loading";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  SContainer,
  SMatrixDecide,
  SMatrixDelegate,
  SMatrixDelete,
  SMatrixDo,
  SRow,
  STitle,
} from "./styles";
import { getTasks } from "../../services/tasks.services";
import { TaskCard } from "../../components/Containers/TaskCard";
import { Link } from "react-router-dom";

const Matrix = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector<any>(
    (state) => state.tasks.allTasks
  );
  const [matrix, setMatrix] = useState<any>({
    do: [],
    decide: [],
    delegate: [],
    delete: [],
  });
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  useEffect(() => {
    if (data && data.items) {
      data.items.map((i) => {
        if (i.urgent && i.importance > 2) {
          setMatrix((prevState: any) => ({ ...prevState, do: [i] }));
        }
        if (i.urgent && i.importance < 2) {
          setMatrix((prevState: any) => ({ ...prevState, delegate: [i] }));
        }
        if (!i.urgent && i.importance > 2) {
          setMatrix((prevState: any) => ({ ...prevState, decide: [i] }));
        }
        if (!i.urgent && i.importance < 2) {
          setMatrix((prevState: any) => ({ ...prevState, delete: [i] }));
        }
      });
    }
  }, [data]);

  const renderMatrix = (matrix) => {
    return (
      <>
        <SRow>
          <SMatrixDo>
            <STitle>Do</STitle>
            {matrix.do.length ? (
              matrix.do.map((m) => {
                return <TaskCard data={m} />;
              })
            ) : (
              <h2>
                <Link to="/task">Add more tasks</Link>
              </h2>
            )}
          </SMatrixDo>
          <SMatrixDelegate>
            <STitle>Delegate</STitle>
            {matrix.delegate.length ? (
              matrix.delegate.map((m) => {
                return <TaskCard data={m} />;
              })
            ) : (
              <h2>
                <Link to="/task">Add more tasks</Link>
              </h2>
            )}
          </SMatrixDelegate>
        </SRow>
        <SRow>
          <SMatrixDecide>
            <STitle>Decide</STitle>
            {matrix.decide.length ? (
              matrix.decide.map((m) => {
                return <TaskCard data={m} />;
              })
            ) : (
              <h2>
                <Link to="/task">Add more tasks</Link>
              </h2>
            )}
          </SMatrixDecide>
          <SMatrixDelete>
            <STitle>Delete</STitle>
            {matrix.delete.length ? (
              matrix.delete.map((m) => {
                return <TaskCard data={m} />;
              })
            ) : (
              <h2>
                <Link to="/task">Add more tasks</Link>
              </h2>
            )}
          </SMatrixDelete>
        </SRow>
      </>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SContainer>{matrix && renderMatrix(matrix)}</SContainer>
    </>
  );
};

export default Matrix;
