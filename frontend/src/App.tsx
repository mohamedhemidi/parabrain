import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Layout } from "./components/Layout";
import Routes from "./Routes";
import { darkTheme, lightTheme } from "./utils/UIVariables";
import { useAppSelector } from "./utils/hooks";
import { BrowserRouter as Router } from "react-router-dom";

const SWrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  height: 100vh;
  width: 100wh;
`;
function App() {
  const { theme } = useAppSelector((state) => state.UI);
  const isDarkTheme = theme === "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <SWrapper>
          <Layout>
            <Routes />
          </Layout>
        </SWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
