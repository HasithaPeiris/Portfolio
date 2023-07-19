import About from "./components/about/About";
import Info from "./components/info/Info";
import ProductList from "./components/productList/ProductList";
import "./app.css"
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Info/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
