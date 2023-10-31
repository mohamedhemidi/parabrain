import { Container, Loader, LoaderText, LoaderWheel } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Loader>
        <LoaderWheel></LoaderWheel>
        <LoaderText></LoaderText>
      </Loader>
    </Container>
  );
};

export default Loading;
