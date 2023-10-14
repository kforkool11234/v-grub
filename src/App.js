import "./App.css";
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import SearchView from "./components/SearchView";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Routes>
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
