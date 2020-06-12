export default function findPage() {
  const find = document.createElement('div');
  find.classList.add('text-center');
  find.innerHTML = `
  <h4 class="text-5xl font-bold text-orange-600"><u>We are near to you</u></h4>
  <p class="bg-orange-600 text-white text-2xl font-extrabold mb-2">Find Us!</p>
  <div class="flex">
    <div class="w-1/3">
      <p class="text-2xl text-orange-600 font-bold border-solid border-orange-600 border-b-4 p-2">Pizza Plaza!</p>
      <p class="font-medium text-center p-1  mt-2">You can eat, drink and have fun! </p>
      <p class="font-medium text-center p-1">We have 100 restaurants over America!</p>
      <p class="font-medium text-center p-1">The best pizzas in town!</p>
    </div>
    <div class="w-2/3">
      <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.60467529296876%2C37.71234379341038%2C-122.34169006347658%2C37.86428351616802&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=12/37.7884/-122.4732">Ver mapa más grande</a></small>
    </div>
  </div>
  `;
  return find;
}
