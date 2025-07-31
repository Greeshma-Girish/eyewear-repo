import React from "react";

function Navbar() {
  return (
    <div style={styles.navbar}>
      
      <div style={styles.logo}>Logo</div>

      <div style={styles.links}>
        <div style={styles.nav}><a href="#home" style={styles.link}>Home</a></div>
        <div style={styles.nav}><a href="#products" style={styles.link}>Products</a></div>
        <div style={styles.nav}><a href="#about" style={styles.link}>About Us</a></div>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    background: "#333",
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    padding: "20px 40px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  logo: {
    fontFamily:"Brush Script MT",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize:"50 px"
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  nav: {
    cursor: "pointer",
    color: "white",
    padding: "5px",
  },
};

export default Navbar;
