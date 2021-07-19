const renderHome = () => {
    const content = document.querySelector('#content');
    const homePage = document.createElement('div');
    homePage.classList.add('homepage');
    const background = document.createElement('div');
    background.classList.add('background');
    homePage.appendChild(background);
    content.appendChild(homePage);
    console.log("home rendered");
}

export default renderHome;