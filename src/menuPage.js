import chesse from './img/pizza-cheese.png';
import crunch from './img/pizza-crunch.png';
import fullMeat from './img/pizza-full-meat.png';
import hawaiana from './img/pizza-hawaiana.png';
import pepperoni from './img/pizza-pepperoni.png';
import supreme from './img/pizza-supreme.png';

export default function menuPage() {
  const menu = document.createElement('div');
  menu.classList.add('text-center');
  menu.innerHTML = `
  <h4 class="text-5xl font-bold text-orange-600"><u>Our Menu</u></h4>
  <p class="bg-orange-600 text-white text-2xl font-extrabold mb-2">Pizza</p>
  <div class="flex flex-wrap mb-2 justify-center">
    <div class="bg-orange-600 p-3 m-2">
      <img src="${chesse}" alt="cheese pizza">
      <p class="text-white font-extrabold text-3xl">Cheese Pizza</p>
    </div>
    <div class="bg-orange-600 p-3 m-2">
      <img src="${crunch}" alt="crunch pizza">
      <p class="text-white font-extrabold text-3xl">Crunchy Pizza</p>
    </div>
    <div class="bg-orange-600 p-3 m-2">
      <img src="${fullMeat}" alt="Extra Meat pizza">
      <p class="text-white font-extrabold text-3xl">Meat Pizza</p>
    </div>
    <div class="bg-orange-600 p-3 m-2">
      <img src="${hawaiana}" alt="Hawaian pizza">
      <p class="text-white font-extrabold text-3xl">Hawaian Pizza</p>
    </div>
    <div class="bg-orange-600 p-3 m-2">
      <img src="${pepperoni}" alt="Pepperoni pizza">
      <p class="text-white font-extrabold text-3xl">Classic Pizza</p>
    </div>
    <div class="bg-orange-600 p-3 m-2">
      <img src="${supreme}" alt="Supreme pizza">
      <p class="text-white font-extrabold text-3xl">Superior Pizza</p>
    </div>
  </div>
  `;
  return menu;
}
