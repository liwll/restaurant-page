const renderFooter = () => {
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = '<div>Brought to you by the Straw Hat Pirates</div><ion-icon name="logo-github"></ion-icon>'
    body.appendChild(footer);
    console.log("footer rendered");
}

export default renderFooter;