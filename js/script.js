function toggleMenu() {
    const menuLinks = document.getElementById("links");
    if (menuLinks.style.display === "block") {
      menuLinks.style.display = "none";
    } else {
      menuLinks.style.display = "block";
    }
  }