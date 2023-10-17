import cart from "./images/add-to-cart.png";
import account from "./images/account.png";
import favicon from "./images/favicon.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = ({ searchText, setSearchText }) => {
  const history = useNavigate()
  const updateSearchText = (e) => {
    history("/search");
    console.log(e.target.value)
    setSearchText(e.target.value);
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#7D5BA6" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={favicon} height="50px" width="50px" alt="favicon"></img>
        </Link>
        <Link className="lnks" to="#">
          Sweet Tooth
        </Link>
        <Link className="lnks" to="#">
          Munchies
        </Link>
        <Link className="lnks" to="#">
          Beverages
        </Link>

        <form className="srch" role="search">
          <input
            className="form-control me-3 hello"
            type="search"
            placeholder="Find your Gourmet..."
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="utilities">
          <Link className="cart" to="#">
            <img src={cart} alt="add-to-cart"></img>
            My Cart
          </Link>
          <Link className="account" to="https://kforkool11234.github.io/login/">
            <img src={account} alt="account"></img>
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;