import firstRestaurant from './img/first_restaurant.jpeg';
import secondRestaurant from './img/second_restaurant.png';
import pizzaPizza from './img/pizza_pizza.jpg';
import globally from './img/globally.png';

export default function aboutPage() {
  const about = document.createElement('div');
  about.classList.add('text-center');
  about.innerHTML = `
    <h2 class="text-5xl font-bold text-orange-600">Since 1959</h2>
    <h4 class="text-5xl font-bold text-orange-600"><u>We Make Pizzas!</u></h4>
    <h4 class="text-5xl font-bold text-orange-600"><u>We Made History!</u></h4>
    <p class="bg-orange-600 text-white text-xl font-extrabold">Our History</p>
    <div>
      <div class="max-w flex">
        <div class="w-1/2">
          <img src="${firstRestaurant}" width="100%">
        </div>
        <div class="w-1/2">
          <p class="text-2xl text-orange-600 font-bold border-solid border-orange-600 border-b-4 p-2">1959 Our History starts Here</p>
          <p class="font-medium text-center p-1">Our first Restaurant is opened in California USA.</p>
        </div>
      </div>
      <div class="max-w flex bg-orange-600">
        <div class="w-1/2">
          <p class="text-2xl text-white font-bold border-solid border-white border-b-4 p-2">1962 We started openend a new restaurants</p>
          <p class="text-white font-medium text-center p-1">Our brand became more famous, we expand with three new locations in California.</p>
        </div>
        <div class="w-1/2">
          <img src="${secondRestaurant}" width="100%">
        </div>
      </div>
      <div class="max-w flex">
      <div class="w-1/2">
        <img src="${pizzaPizza}" width="100%">
      </div>
      <div class="w-1/2">
        <p class="text-2xl text-orange-600 font-bold border-solid border-orange-600 border-b-4 p-2">1997 We are across the country</p>
        <p class="font-medium text-center p-1">New franchises now are open all across the country.</p>
      </div>
    </div>
    <div class="max-w flex bg-orange-600">
    <div class="w-1/2">
      <p class="text-2xl text-white font-bold border-solid border-white border-b-4 p-2">2014 We go globally</p>
      <p class="text-white font-medium text-center p-1">Our first restaurant outside America is open on the UK.</p>
    </div>
    <div class="w-1/2">
      <img src="${globally}" width="100%">
    </div>
  </div>
    </div>
  `;
  return about;
}
