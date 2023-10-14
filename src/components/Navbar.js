import cart from "./images/add-to-cart.png";
import account from "./images/account.png";

const Navbar = () => {

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#7D5BA6" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./favicon.png" height="50px" width="50px"></img>
        </a>
        <a className="lnks" href="#">
          Sweet Tooth
        </a>
        <a className="lnks" href="#">
          Munchies
        </a>
        <a className="lnks" href="#">
          Beverages
        </a>

        <form className="srch" role="search">
          <input
            className="form-control me-3 hello"
            type="search"
            placeholder="Find your Gourmet..."
            aria-label="Search"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="utilities">
          <a className="cart" href="#">
            <img src={cart}></img>
            My Cart
          </a>
          <a className="account" href="#">
            <img src={account}></img>
            Account
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;