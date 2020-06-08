export default function footer(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div>
            <p>Pizza Plaza </p>
        </div>
        <div>
            Social Media:
            <li><i></i></li>
            <li><i></i></li>
            <li><i></i></li>
        </div>
        <div>
            <p>&copy; Pizza Plaza  by <em>Redacuve | 2020</em></p>
        </div>
    `;
    return footer;
}