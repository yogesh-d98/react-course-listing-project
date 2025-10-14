function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1a1a1a",
    color: "white",
    fontFamily: "Arial, sans-serif",
    flexWrap: "wrap" // ensures responsiveness on small screens
  };

 const titleStyle = {
  margin: "0 auto",
  fontSize: "1.5rem",
  textAlign: "center"
};


  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "white",
    color: "#4caf50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  };

  return (
    <nav style={navStyle}>
      <h2 style={titleStyle}>React Learning</h2>
      {/* <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
      >
        Login
      </button> */}
    </nav>
  );
}

export default Navbar;
