import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-overlay">
        <h1 className="header-title">Discover a world full of movies!</h1>
        <div className="searchbar">
          <input type="search" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
