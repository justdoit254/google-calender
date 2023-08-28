import GlobalStyles from "./components/styles/global.styles";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  );
}

export default App;
