import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'

export default function footer(){
    const footer = document.createElement('footer');
    
    footer.innerHTML = `
        <div>
            <p>Pizza Plaza </p>
        </div>
        <div>
            Social Media:
            <li><i class="fas fa-map-marked-alt"></i></li>
            <li><i class="fab fa-tripadvisor"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook"></i></li>
        </div>
        <div>
            <p>&copy; Pizza Plaza  by <em>Redacuve | 2020</em></p>
        </div>
    `;
    return footer;
}