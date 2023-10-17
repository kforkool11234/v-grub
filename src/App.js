import "./App.css";
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import SearchView from "./components/SearchView";
import { useState } from "react";
import Home from './Home';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log({searchText})
  return (
    <div className="App">
      <Navbar SearchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/search"
          element={
            <SearchView keyboard={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
