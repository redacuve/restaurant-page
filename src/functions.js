import homePage from './homePage';
import aboutPage from './aboutPage';
import menuPage from './menuPage';
import findPage from './findPage';

function clickAbout() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(aboutPage());
}

function clickMenu() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(menuPage());
}

function clickFind() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(findPage());
}

function clickHome() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(homePage());
}

export default {
  clickAbout, clickFind, clickHome, clickMenu,
};