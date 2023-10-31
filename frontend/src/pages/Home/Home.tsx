/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Loading } from "../../components/Collections/Loading";
import { TaskCard } from "../../components/Containers/TaskCard";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { SContainer } from "./styles";
import { getTasks } from "../../services/tasks.services";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector<any>(
    (state) => state.tasks.allTasks
  );
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SContainer>
        {data &&
          data.items.map((t: any) => {
            return <TaskCard data={t} />;
          })}
      </SContainer>
    </>
  );
};

export default Home;
