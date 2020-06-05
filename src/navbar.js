export default function navbar() {
    //defining elements
  
    const navBar = document.createElement('nav');
    const ulE = document.createElement('ul');
    
    //added class
    navBar.classList.add('navbar');
    ulE.classList.add("unordenered")
  
    //added logo
  
    
  
    ulE.innerHTML = "<li>Logo</li><li>About Us</li><li>Our Menu</li><li>Find Us!</li>"
    navBar.appendChild(ulE);
    return navBar;
  }