import Logo from './img/pizza-plaza.png';

export default function navbar() {
  // defining elements

  const navBar = document.createElement('nav');
  const ulE = document.createElement('ul');

  // added class
  navBar.classList.add('navbar');
  ulE.classList.add('unordenered', 'flex', 'items-end', 'm-1');

  // added logo

  ulE.innerHTML = `<li class="flex-1 mr-2"><img id="logo" src="${Logo}" alt="logos"></li>
                    <li class="flex-1 mr-2">
                      <a class="text-center block border border-orange-500 rounded py-2 px-4 bg-orange-500 hover:bg-orange-700 text-white" id="about">About Us</a>
                    </li>
                    <li class="flex-1 mr-2">
                      <a class="text-center block border border-orange-500 rounded py-2 px-4 bg-orange-500 hover:bg-orange-700 text-white" id="menu">Our Menu</a>
                    </li>
                    <li class="flex-1 mr-2">
                      <a class="text-center block border border-orange-500 rounded py-2 px-4 bg-orange-500 hover:bg-orange-700 text-white" id="find">Find Us!</a>
                    </li>`;
  // navBar.appendChild()
  navBar.appendChild(ulE);
  return navBar;
}
