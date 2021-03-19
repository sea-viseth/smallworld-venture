import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, News, Spaces, Works, Contact } from "../src/components";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/news" exact component={News} />
          <Route path="/spaces" exact component={Spaces} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
