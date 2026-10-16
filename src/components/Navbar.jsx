function Navbar({ currentPage, setPage }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage("home")}>
        <span className="brand-text">Indian Art Gallery</span>
      </div>

      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={currentPage === item.id ? "nav-btn active" : "nav-btn"}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
