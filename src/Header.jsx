

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.svg" alt="Company logo" />
        <span>Company name</span>
      </div>
      <nav className="navbar-links">
        <a href="#features">Features</a>
        <a href="#enterprise">Enterprise</a>
        <a href="#support">Support</a>
        <a href="#home">Home</a>
      </nav>
    </header>
  );
}

export default Navbar;
