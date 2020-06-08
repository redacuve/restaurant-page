import './style.css';

import navbar from './navbar';
import container from './container';
import {clickHome, clickFind, clickMenu, clickAbout} from './functions';

document.getElementById('content').appendChild(navbar());
document.getElementById('content').appendChild(container());
clickHome();

document.getElementById('about').addEventListener('click', clickAbout);
document.getElementById('menu').addEventListener('click', clickMenu);
document.getElementById('find').addEventListener('click', clickFind);
document.getElementById('logo').addEventListener('click', clickHome);