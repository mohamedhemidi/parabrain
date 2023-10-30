import { TaskCard } from "../../components/Containers/TaskCard";
import { SContainer } from "./styles";

const Home = () => {
  return (
    <SContainer>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </SContainer>
  );
};

export default Home;
