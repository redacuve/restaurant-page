import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'

export default function footer(){
    const footer = document.createElement('footer');
    footer.classList.add('flex', 'text-center', 'mb-4', 'flex-wrap', 'border-solid', 'border-t-4');
    footer.innerHTML = `
        <div class="w-full">
            <p class="text-2xl">Pizza Plaza</p>
        </div>
        <div class="w-full">
            <ul class="flex justify-center">
                <li class="mr-3"><i class="fab fa-2x fa-facebook"></i></li>
                <li class="mr-3"><i class="fab fa-2x fa-twitter"></i></li>
                <li class="mr-3"><i class="fab fa-2x fa-tripadvisor"></i></li>
                <li class="mr-3"><i class="fas fa-2x fa-map-marked-alt"></i></li>
            </ul>
        </div>
        <div class="w-full">
            <p>&copy; Pizza Plaza  by <em>Redacuve | 2020</em></p>
        </div>
    `;
    return footer;
}