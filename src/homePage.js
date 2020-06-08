import Banner from './img/home_banner.png';

export default function homePage() {
  const homepage = document.createElement('div');
  homepage.innerHTML = `<div class="">
                          <img src="${Banner}" alt="banner" width="100%">
                        </div>
                        <p>HomePage</p>`;
  return homepage;
}
