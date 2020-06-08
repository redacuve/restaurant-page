import Banner from './img/home_banner.png';

export default function homePage() {
  const homepage = document.createElement('div');
  homepage.innerHTML = `<div>
                          <img src="${Banner}" alt="banner" width="100%">
                        </div>
                        <div class="bg-orange-600 text-white text-6xl font-extrabold flex flex-wrap justify-center">
                          <p class="mr-10">Tasty!</p>
                          <p class="mr-10">Ready and Hot!</p>
                          <p class="mr-10">Just for You!</p>
                          <p class="mr-10">Enjoy!</p>
                        </div>`;
  return homepage;
}