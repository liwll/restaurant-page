const renderAbout = () => {
    const content = document.querySelector('#content');
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about');
    aboutPage.innerHTML = `
        <div class="about">
            <div class="heading">
                <h1>Enjoy the <span style="color: green">best food</span> in all of the <span style="color: #3c2fc5">Grand Line</span>...</h1>
            </div>
            <img id="img-indoors" src="./imgs/baratie.jpg" alt="">
            <div class="heading">
                <h1>Sourcing ingredients from the legendary 
                    <span style="color: #003daf">All Blue Sea</span>, and backed by the 
                    <span style="color: #890304">Straw Hat Pirates</span>, 
                    <span style="color: rgb(129, 209, 233);">Restaraunt Baratie's</span> 
                    food is enjoyed by all!</h1>
            </div>
            <img id="img-crew" src="./imgs/baratie_eating.jpg" alt="">
        </div>
    `
    content.appendChild(aboutPage);
    console.log("about rendered");
}

export default renderAbout;