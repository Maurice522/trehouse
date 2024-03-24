import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import CaseStudies from "./pages/CaseStudies";
// import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/casestudies" component={CaseStudies} />
        <Route path="/blog" component={Blog} /> */}
      </Switch>
    </Router>
  );
}

export default App;