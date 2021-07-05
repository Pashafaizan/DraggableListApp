import logo from "./logo.svg";
import "./App.css";
import ListContainer from "./components/ListContainer/ListContainer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <ListContainer />
    </div>
  );
}

export default App;
