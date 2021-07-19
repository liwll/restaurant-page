const renderFooter = () => {
    const body = document.querySelector('body');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = '<span>Brought to you by the Straw Hat Pirates</span><ion-icon name="logo-github"></ion-icon>'
    body.appendChild(footer);
    console.log("footer rendered");
}

export default renderFooter;