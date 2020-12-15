import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import TypePage from './pages/TypePage'
// import TypePage from './components/TypeDropdown'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/types" component={TypePage} />
      </Switch>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from './components/Footer'
// import PageHandler from './pages/PageHandler';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <PageHandler />
//       <Footer />
//     </div>
//   );
// }

// export default App;
