const renderAbout = () => {
    const content = document.querySelector('#content');
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about');


    const img1 = document.createElement('img');
    img1.setAttribute('id', 'img-indoors');
    img1.setAttribute('src', './imgs/baratie.jpg');
    img1.setAttribute('alt', 'Baratie Indoors');

    const description = document.createElement('div')
    description.classList.add('description');
    description.textContent = "The Baratie is owned and headed by Zeff, who founded it 12 years ago with the help of a 9-year-old Sanji. After its founding, Zeff assumed the position of head chef, with Sanji becoming the young sous chef.The Baratie staff is noted for being a staff of outcasts, exiles and pirate types. Its owner is a renowned former pirate captain, and Sanji himself came to help co-found the restaurant after being exiled from his family."

    const img2 = document.createElement('img');
    img2.setAttribute('id', 'img-sanji');
    img2.setAttribute('src', './imgs/sanji_zeff.png');
    img2.setAttribute('alt', 'Sanji');

    aboutPage.appendChild(img1);
    aboutPage.appendChild(description);
    aboutPage.appendChild(img2);
    content.appendChild(aboutPage);
    console.log("about rendered");
}

export default renderAbout;