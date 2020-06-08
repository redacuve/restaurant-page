import homePage from './homePage';
import aboutPage from './aboutPage';
import menuPage from './menuPage';
import findPage from './findPage';

export function clickAbout() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(aboutPage());
}

export function clickMenu() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(menuPage());
}

export function clickFind() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(findPage());
}

export function clickHome() {
  const content = document.getElementById('container');
  content.innerHTML = '';
  content.appendChild(homePage());
}

export default {
  clickHome, clickFind, clickAbout, clickMenu,
};