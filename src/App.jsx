import "./App.scss";

import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";

import beers from "./data/beers";

function App() {
    return (
        <div className="App">
            <Nav />
            <Home array={beers} />
        </div>
    );
}

export default App;
