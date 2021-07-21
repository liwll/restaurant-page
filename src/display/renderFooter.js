const renderFooter = () => {
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = '<div>Brought to you by the Straw Hat Pirates</div><a href="https://www.github.com/liwll"><ion-icon name="logo-github"></ion-icon>'
    content.appendChild(footer);
    console.log("footer rendered");
}

export default renderFooter;