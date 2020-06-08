import './style.css';

import navbar from './navbar';
import container from './container';
import * as Click from './functions';

document.getElementById('content').appendChild(navbar());
document.getElementById('content').appendChild(container());
Click.clickHome();

document.getElementById('about').addEventListener('click', Click.clickAbout);
document.getElementById('menu').addEventListener('click', Click.clickMenu);
document.getElementById('find').addEventListener('click', Click.clickFind);
document.getElementById('logo').addEventListener('click', Click.clickHome);