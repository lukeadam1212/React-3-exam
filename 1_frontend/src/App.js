import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Page sections
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

// Screens
import AdminScreen from "./Screens/AdminScreen";

// Global Styles
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={AdminScreen} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
